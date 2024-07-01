using System.Text;

namespace DataTransformer
{
	internal class Program
	{
		static void Main(string[] args)
		{
			var books = new List<string>() { "mark", "malachi", "isaiah" };

			foreach (var book in books)
			{
				var lines = File.ReadAllLines($"../../../../data/{book}.data");

				string? currentLine = null;
				int lineInfo = 0;

				var lineNumber = 1; // Start at one to allow for an extra blank line at the start

				var model = new StringBuilder();
				model.AppendLine($"const {book}Content = `");

				var decorations = new List<Decoration>();
				var hovers = new List<Hover>();
				var markers = new List<HintMarker>();
				var hints = new List<InlineHint>();
				var links = new List<LinkInfo>();

				foreach (var line in lines)
				{
					if (line.StartsWith("|-"))
					{
						lineInfo++;

						// validate info lines

						var subLines = line.Split('|');

						if (subLines.Length != 5)
						{
							Console.WriteLine($"Invalid line: {line}");
							continue;
						}
						else
						{
							var positions = subLines[3].Split(',');

							if (currentLine!.Substring(int.Parse(positions[0]) - 1, int.Parse(positions[1]) - int.Parse(positions[0])) == subLines[4])
							{
								// all good

								switch (subLines[1])
								{
									case "-VN":
										decorations.Add(new Decoration(lineNumber, int.Parse(positions[0]), lineNumber, int.Parse(positions[1]), CssClasses.VerseNumber));
										break;

									case "-H":
										decorations.Add(new Decoration(lineNumber, int.Parse(positions[0]), lineNumber, int.Parse(positions[1]), CssClasses.ChapterHeading));
										break;

									case "-SH":
										decorations.Add(new Decoration(lineNumber, int.Parse(positions[0]), lineNumber, int.Parse(positions[1]), CssClasses.SubHeading));
										break;

									case "-PH":
										decorations.Add(new Decoration(lineNumber, int.Parse(positions[0]), lineNumber, int.Parse(positions[1]), CssClasses.PeekHeading));
										break;

									case "-TRINITY":
										decorations.Add(new Decoration(lineNumber, int.Parse(positions[0]), lineNumber, int.Parse(positions[1]), CssClasses.Trinity));
										break;

									case "-PERSON":
										decorations.Add(new Decoration(lineNumber, int.Parse(positions[0]), lineNumber, int.Parse(positions[1]), CssClasses.Person));
										break;

									case "-PLACE":
										decorations.Add(new Decoration(lineNumber, int.Parse(positions[0]), lineNumber, int.Parse(positions[1]), CssClasses.Place));
										break;

									case "-PEOPLE":
										decorations.Add(new Decoration(lineNumber, int.Parse(positions[0]), lineNumber, int.Parse(positions[1]), CssClasses.People));
										break;

									case "-DISC":
										decorations.Add(new Decoration(lineNumber, int.Parse(positions[0]), lineNumber, int.Parse(positions[1]), CssClasses.Discretionary));
										markers.Add(new HintMarker(lineNumber, int.Parse(positions[0]), lineNumber, int.Parse(positions[1]), subLines[2]));
										break;

									case "-ALTERNATE":
										decorations.Add(new Decoration(lineNumber, int.Parse(positions[0]), lineNumber, int.Parse(positions[1]), CssClasses.Alternate));
										// add a marker here too to get an underline
										markers.Add(new HintMarker(lineNumber, int.Parse(positions[0]), lineNumber, int.Parse(positions[1]), currentLine.Substring(int.Parse(positions[0]) - 1, int.Parse(positions[1]) - int.Parse(positions[0]))));
										hovers.Add(new Hover(lineNumber, int.Parse(positions[0]), lineNumber, int.Parse(positions[1]), subLines[2]));
										break;

									case "-HINT":
										hints.Add(new InlineHint(lineNumber, int.Parse(positions[0]), lineNumber, int.Parse(positions[1]), subLines[2]));
										break;

									case "-LINK":
										var textParts = subLines[2].Split('>');
										links.Add(new LinkInfo(lineNumber, int.Parse(positions[0]), lineNumber, int.Parse(positions[1]), textParts[0], textParts[1]));
										break;

									case "-NOTE":
										// TODO: Handle generic notes
										//links.Add(new LinkInfo(lineNumber, int.Parse(positions[0]), lineNumber, int.Parse(positions[1]), textParts[0], textParts[1]));
										break;

									default:
										break;
								}

							}
							else
							{
								Console.WriteLine($"Invalid substring: {line}");
							}
						}
					}
					else
					{
						if (currentLine is not null)
						{
							Console.WriteLine($"({lineInfo}) {currentLine}");
							model.AppendLine(currentLine);
						}

						lineInfo = 0;
						lineNumber++;
						currentLine = line;
					}
				}

				Console.WriteLine($"({lineInfo}) {currentLine}");

				model.AppendLine("`;");
				model.AppendLine();
				model.AppendLine($"var {book}Model = monaco.editor.createModel({book}Content, \"mdbible\", monaco.Uri.parse(\"{book}\"));");

				if (!Directory.Exists($"./{book}/"))
				{
					Directory.CreateDirectory($"./{book}/");
				}

				File.WriteAllText($"./{book}/model.js", model.ToString());

				if (decorations.Any())
				{
					var decorationOutput = new StringBuilder();

					decorationOutput.AppendLine($"if (e.newModelUrl == {book}Model.uri) {{");
					decorationOutput.AppendLine("  var decorations = newEditor.createDecorationsCollection([");
					decorationOutput.AppendLine();

					foreach (var item in decorations)
					{
						decorationOutput.AppendLine($"    {{ range: new monaco.Range({item.startLine}, {item.startColumn}, {item.endLine}, {item.endColumn}), options: {{ inlineClassName: \"{item.className}\" }}}},");
					}

					decorationOutput.AppendLine();
					decorationOutput.AppendLine("  ]);");
					decorationOutput.AppendLine("}");

					File.WriteAllText($"./{book}/decorations.js", decorationOutput.ToString());
				}

				if (markers.Any())
				{
					var markerOutput = new StringBuilder();

					markerOutput.AppendLine("const markers = [];");
					markerOutput.AppendLine();

					foreach (var item in markers)
					{
						markerOutput.AppendLine($"markers.push({{ message: \"{item.tooltip}\", severity: monaco.MarkerSeverity.Hint, startLineNumber: {item.startLine}, startColumn: {item.startColumn}, endLineNumber: {item.endLine}, endColumn: {item.endColumn}}});");
					}

					markerOutput.AppendLine();
					markerOutput.AppendLine($"monaco.editor.setModelMarkers({book}Model, \"owner\", markers);");

					File.WriteAllText($"./{book}/markers.js", markerOutput.ToString());
				}

				if (hovers.Any())
				{
					var hoverOutput = new StringBuilder();

					hoverOutput.AppendLine($"if (model.uri == {book}Model.uri) {{");

					foreach (var item in hovers)
					{
						hoverOutput.AppendLine($"if (position.lineNumber == {item.startLine} && position.column >= {item.startColumn} && position.column <= {item.endColumn}) {{ return {{ range: new monaco.Range({item.startLine}, {item.startColumn}, {item.endLine}, {item.endColumn}), contents: [ {{ value: \"{item.markdownString}\" }}, ], }};}};");
					}

					hoverOutput.AppendLine("}");


					File.WriteAllText($"./{book}/hovers.js", hoverOutput.ToString());
				}

				if (hints.Any())
				{
					var hintOutput = new StringBuilder();

					hintOutput.AppendLine("if (model.uri == markModel.uri) {");
					hintOutput.AppendLine("  return {");
					hintOutput.AppendLine("     hints: [");

					foreach (var item in hints)
					{
						hintOutput.AppendLine($"{{ kind: monaco.languages.InlayHintKind.Type, position: {{ lineNumber: {item.startLine}, column: {item.endColumn} }}, label: `{item.hintText}`, }},");
					}

					hintOutput.AppendLine("    ],");
					hintOutput.AppendLine("    dispose: () => { },");
					hintOutput.AppendLine("  };");
					hintOutput.AppendLine("}");

					File.WriteAllText($"./{book}/hints.js", hintOutput.ToString());
				}

				if (links.Any())
				{
					var definitionsOutput = new StringBuilder();

					definitionsOutput.AppendLine($"if (model.uri == {book}Model.uri) {{");


					var commandsOutput = new StringBuilder();

					var codeLensOutput = new StringBuilder();

					codeLensOutput.AppendLine($"if (model.uri == {book}Model.uri) {{");
					codeLensOutput.AppendLine("    return {");
					codeLensOutput.AppendLine("        lenses: [");

					var linkCounter = 0;

					foreach (var item in links)
					{
						linkCounter++;
						// Set the target range to the start of the link
						definitionsOutput.AppendLine($"if (position.lineNumber == {item.startLine} && position.column >= {item.startColumn} && position.column <= {item.endColumn}) {{ return {{ uri: monaco.Uri.parse(\"{item.Uri}\"), range: new monaco.Range(1, 1, 1, 2), }} }}");

						commandsOutput.AppendLine($"var {item.Uri}cmdId = myEditor.addCommand({linkCounter}, function () {{ myEditor.setPosition({{lineNumber: {item.startLine}, column: {item.startColumn} }}); myEditor.trigger('source', 'editor.action.peekDefinition'); }}, \"\");");

						codeLensOutput.AppendLine($" {{ range: {{ startLineNumber: {item.startLine}, startColumn: {item.startColumn}, endLineNumber: {item.endLine}, endColumn: {item.endColumn}, }}, command: {{ id: {item.Uri}cmdId, title: \"{item.titleText}\", }}, }},");
					}


					definitionsOutput.AppendLine("}");

					File.WriteAllText($"./{book}/definitions.js", definitionsOutput.ToString());

					File.WriteAllText($"./{book}/commands.js", commandsOutput.ToString());

					codeLensOutput.AppendLine("        ],");
					codeLensOutput.AppendLine("        dispose: () => { },");
					codeLensOutput.AppendLine("    };");
					codeLensOutput.AppendLine("}");

					File.WriteAllText($"./{book}/codeLens.js", codeLensOutput.ToString());
				}
			}
		}
	}
}

public record Decoration(int startLine, int startColumn, int endLine, int endColumn, string className);

public record Hover(int startLine, int startColumn, int endLine, int endColumn, string markdownString);

public record HintMarker(int startLine, int startColumn, int endLine, int endColumn, string tooltip);

public record InlineHint(int startLine, int startColumn, int endLine, int endColumn, string hintText);

public record LinkInfo(int startLine, int startColumn, int endLine, int endColumn, string titleText, string Uri);

public static class CssClasses
{
	public static string ChapterHeading = "mdbChapterHeading";
	public static string SubHeading = "mdbSectionHeading";
	public static string VerseNumber = "mdbVerseNumber";
	public static string Trinity = "mdbTrinity";
	public static string Person = "mdbPerson";
	public static string Place = "mdbPlace";
	public static string People = "mdbPeople";
	public static string Discretionary = "mdbDiscretionary";
	public static string Alternate = "mdbAlternate";
	public static string PeekHeading = "mdbPeekHeading";
}
