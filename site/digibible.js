// ADD MODELS

const markContent = `
The Good News According to Mark

Chapter 1

The Preparation

1The beginning of the good news about Jesus Christ[, the Son of God].

2It is said in the prophet Isaiah –
    ‘I am sending my messenger ahead of you;
     he will prepare your way.

    3The voice of one crying aloud in the wilderness:
      “Prepare the road for the Lord,
       make a straight path for him.”’

4John the Baptizer appeared in the wilderness, proclaiming a baptism on repentance, for the forgiveness of sins.
5The whole of Judea, as well as all the inhabitants of Jerusalem, went out to him; and they were baptized by him in the Jordan River, confessing their sins.

6John wore clothes made of camels’ hair, with a leather strap around his waist, and lived on locusts and wild honey;
7and he proclaimed – “After me is coming someone more powerful than I am, and I am not fit even to stoop down and unfasten his sandals.
8I have baptized you with water, but he will baptize you with the Holy Spirit.”

9Now about that time Jesus came from Nazareth in Galilee, and was baptized by John in the Jordan.
10Just as he was coming up out of the water, he saw the heavens split open and the Spirit coming down to him like a dove,
11and from the heavens came a voice – “You are my dearly loved son; you bring me great joy.”

12Immediately afterward the Spirit drove Jesus out into the wilderness;
13and he was there in the wilderness forty days, tempted by Satan, and among the wild beasts, while the angels helped him.

The Work in Galilee

14After John had been arrested, Jesus went to Galilee, proclaiming the good news of God –
15“The time has come, and the kingdom of God is at hand; repent, and believe the good news.”

16As Jesus was going along the shore of the Sea of Galilee, he saw Simon and his brother Andrew casting a net in the sea, for they were fishermen.
17“Come and follow me,” Jesus said, “and I will teach you to fish for people.”
18They left their nets at once, and followed him.

19Going on a little further, he saw James, Zebedee’s son, and his brother John, who were in their boat mending the nets.
20Jesus called them at once, and they left their father Zebedee in the boat with the crew, and went after him.

21They walked to Capernaum. On the next Sabbath Jesus went into the synagogue and began to teach.
22The people were amazed at his teaching, for he taught them like one who had authority, and not like the teachers of the Law.
23Now there was in their synagogue at the time a man under the power of a foul spirit, who called out,
24“What do you want with us, Jesus the Nazarene? Have you come to destroy us? I know who you are – the Holy One of God!”
25But Jesus rebuked the spirit, “Be silent! Come out from him.”
26The foul spirit threw the man into a fit, and with a loud cry came out from him.
27They were all so amazed that they kept asking each other, “What is this? What is this, a new kind of teaching? He gives his commands with authority even to the foul spirits, and they obey him!”
28His fame spread at once in all directions, through the whole region of Galilee.

29As soon as they had left the synagogue, they went to the house of Simon and Andrew, along with James and John.
30Now Simon’s mother-in-law was lying ill with a fever, and they at once told Jesus about her.
31Jesus went up to her and, grasping her hand, raised her up; the fever left her, and she began to take care of them.

32In the evening, after sunset, the people brought to Jesus all who were ill or possessed by demons; 33and the whole city was gathered around the door.
34Jesus cured many who were ill with various diseases, and drove out many demons, and would not permit them to speak, because they knew him to be the Christ.

35In the morning, long before daylight, Jesus got up and went out to a lonely spot, where he began to pray.
36But Simon and his companions went out searching for him;
37and, when they found him, they exclaimed, “Everyone is looking for you!”
38But Jesus said to them, “Let us go somewhere else, into the country towns nearby so that I can make my proclamation in them also; for that was why I came.”
39And he went about making his proclamation in their synagogues all through Galilee, and driving out the demons.

40One day a leper came to Jesus and, falling on his knees, begged him for help. “If only you are willing,” he said, “you are able to make me clean.”
41Moved with compassion, Jesus stretched out his hand and touched him, saying as he did so, “I am willing; become clean.”
42Instantly the leprosy left the man, and he became clean;
43and then Jesus, after sternly warning him, immediately sent him away,
44and said to him, “Be careful not to say anything to anyone; but go and show yourself to the priest, and make the offerings for your cleansing directed by Moses, as evidence of your cure.”
`;

var markModel = monaco.editor.createModel(markContent, "mdbible", monaco.Uri.parse("mark"));

const malachiContent = `
Chapter 3

1“I am about to send my messenger and he will clear a path before me: And the Lord, who you are seeking, will suddenly come to his temple. The messenger of the covenant who you long for is already coming, says the Lord of hosts.

2But who can endure the day of his coming? And who will stand firm when he appears? He is like a refiner’s fire, and like a launderer’s soap, 3and he will sit as a refiner and purifier. He will purify the descendants of Levi, and refine them like gold and silver, until they are fit to bring offerings to the Lord. 4Then will the offerings of Judah and Jerusalem be pleasant to the Lord, as in the days of old, and as in former years.

5“I will come to you in judgment. I will be quick to testify against the sorcerers, adulterers, perjurers, those who cheat workers, or widows, or orphans, deny justice to immigrants, and do not fear me,” says the Lord of hosts.
6“For I, the Lord, do not change; and you have not ceased to be descendants of Jacob.”

7“From the days of your ancestors, you have turned aside from my statutes, and you have not kept them. Turn to me and I will turn to you,” says the Lord. “You say, ‘How should we turn?’
8Can a human rob God? Yet you robbed me. You ask, ‘How have we robbed you?’ In tithes and gifts!
9You – your entire nation – are all cursed, because you rob me.

10“Bring the whole tithe into the storehouse, so that there is food in my house. Test me in this way. See if I will not open to you the windows of the sky, and pour you out a blessing, until there is more than enough.
11I will rebuke for your sakes the devouring locust and he will not destroy your crops, nor will the vine fail to ripen its fruit in the field, says the Lord of hosts,
12and all nations will call you happy, for you will be a delightful land,” says the Lord of hosts.

13“You have said terrible things about me,” says the Lord. “You ask, ‘What have we said about you?’
14You have said, ‘It is useless to serve God, and what do we gain from the Lord of hosts by keeping his commands, and walking mournfully in funeral garb before him?
15So now we call the proud happy, evildoers thrive: they dare God and escape unharmed.’”

16Such things those who revered the Lord spoke to one another, and the Lord took notice, and a record was written before him of those who revered the Lord and those who keep in mind his name.
17“They will be mine,” says the Lord of hosts, “my special possession on that day that I am preparing. I will spare them as a man spares his son who serves him.
`;

var malachiModel = monaco.editor.createModel(malachiContent, "mdbible", monaco.Uri.parse("malachi"));

const isaiahContent = `
Chapter 40

    1“Comfort you, comfort my people,”
      declares your God.

    2“Speak home to the heart of Jerusalem,
      cry unto her
      that her time of sore service is over,
      her guilt is discharged;
      for her sins she has doubly atoned
      at the hand of the Lord.”

3Hark! Says a voice, “In the wilderness
clear you a way for the Lord;
make you straight in the desert
a highway for our God.

4Let every valley be raised,
every mountain and hill brought low;
let the steep rugged ground become level,
the rough rocky ridges a plain.

5Then the Lord will show forth his glory,
and all fresh will see it together:
the mouth of the Lord has spoken it.”

6Hark! Says a voice, “Proclaim.”
“What should I proclaim?” said I.
“Proclaim that all flesh is grass,
 all its grace as the flower of the field.

7The grass withers, the flower fades,
when upon it the breath of the Lord has blown.

8Yea, the grass withers, the flower fades;
but the word of our God will stand for ever.”

9Get you up to a mountain high,
you who tell good tidings to Zion;
lift up your voice with strength,
you who bring good news to Jerusalem;
lift it up, be not afraid.
Say to the cities of Judah,
“Yonder comes your God.”

10See! The Lord is coming in might,
with an arm that ensures his dominion.
Behold, his reward is with him,
his recompense is before him.

11He feeds his flock like a shepherd,
he gathered it with his arm;
he carries the lambs in his bosom,
and those who give suck he leads.

12 Who has measured the waters in the hollow of his hand?
Who has ruled off the heavens with a span,
comprehend the dust of the earth in a measure,
and weighed the mountains in scales,
and the hills in a balance?

13Who has directed the mind of the Lord?
And where is the counsellor who taught him?

14Whom did he ask for enlightenment?
Who taught him the pathway of right,
or showed him the way of true insight?

15See! Nations are nothing but a drop on a bucket,
they count but as dust on a balance;
he lifted the isles like a mote.

16Too small for the fires (of his altars) is Lebanon,
too few are its breasts for an offering.

17All nations are nothing before him,
he counts them but empty nothing.

18So to whom will you liken God,
or what likeness set over against him?

19An imagine! A craftsman has cast it, a goldsmith has overlaid it with gold.
`;

var isaiahModel = monaco.editor.createModel(isaiahContent, "mdbible", monaco.Uri.parse("isaiah"));



// ADD MARKERS

const markers = [];

markers.push({ message: "good news", severity: monaco.MarkerSeverity.Hint, startLineNumber: 8, startColumn: 23, endLineNumber: 8, endColumn: 32 });
markers.push({ message: "Some manuscripts do not have 'the Son of God'", severity: monaco.MarkerSeverity.Hint, startLineNumber: 8, startColumn: 52, endLineNumber: 8, endColumn: 69 });
markers.push({ message: "with", severity: monaco.MarkerSeverity.Hint, startLineNumber: 23, startColumn: 22, endLineNumber: 23, endColumn: 26 });
markers.push({ message: "with", severity: monaco.MarkerSeverity.Hint, startLineNumber: 23, startColumn: 58, endLineNumber: 23, endColumn: 62 });
markers.push({ message: "tempted", severity: monaco.MarkerSeverity.Hint, startLineNumber: 30, startColumn: 50, endLineNumber: 30, endColumn: 57 });

monaco.editor.setModelMarkers(markModel, "owner", markers);




monaco.languages.register({ id: "mdbible" });



// Need this for markdown in contents
monaco.languages.registerHoverProvider("mdbible", {
    provideHover: function (model, position) {

            // ADD HOVERS

        if (model.uri == markModel.uri) {
            if (position.lineNumber == 8 && position.column >= 23 && position.column <= 32) { return { range: new monaco.Range(8, 23, 8, 32), contents: [{ value: "or **gospel**" },], }; };
            if (position.lineNumber == 23 && position.column >= 22 && position.column <= 26) { return { range: new monaco.Range(23, 22, 23, 26), contents: [{ value: "or **in**" },], }; };
            if (position.lineNumber == 23 && position.column >= 58 && position.column <= 62) { return { range: new monaco.Range(23, 58, 23, 62), contents: [{ value: "or **in**" },], }; };
            if (position.lineNumber == 30 && position.column >= 50 && position.column <= 57) { return { range: new monaco.Range(30, 50, 30, 57), contents: [{ value: "or **tested**" },], }; };
        }


        return undefined;
    }
});



monaco.editor.defineTheme('mdbTheme', {
    base: 'vs',
    inherit: true,
    rules: [
    ],
    colors: {
    }
});

monaco.editor.onDidCreateEditor(newEditor => {
    newEditor.onDidChangeModel(e => {
        newEditor.updateOptions({
            // To ensure that peeked editors are also readonly
            readOnly: true
        });


        // ADD DECORATIONS

        if (newEditor.getModel().uri == markModel.uri) {
            var decorations = newEditor.createDecorationsCollection([

                { range: new monaco.Range(2, 1, 2, 32), options: { inlineClassName: "mdbChapterHeading" } },
                { range: new monaco.Range(4, 1, 4, 10), options: { inlineClassName: "mdbChapterHeading" } },
                { range: new monaco.Range(6, 1, 6, 16), options: { inlineClassName: "mdbSectionHeading" } },
                { range: new monaco.Range(8, 1, 8, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(8, 39, 8, 44), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(8, 23, 8, 32), options: { inlineClassName: "mdbAlternate" } },
                { range: new monaco.Range(8, 52, 8, 69), options: { inlineClassName: "mdbDiscretionary" } },
                { range: new monaco.Range(10, 1, 10, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(10, 28, 10, 34), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(14, 5, 14, 6), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(15, 33, 15, 37), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(18, 1, 18, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(18, 2, 18, 19), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(19, 1, 19, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(19, 15, 19, 20), options: { inlineClassName: "mdbPlace" } },
                { range: new monaco.Range(19, 56, 19, 65), options: { inlineClassName: "mdbPlace" } },
                { range: new monaco.Range(21, 1, 21, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(21, 2, 21, 6), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(22, 1, 22, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(23, 1, 23, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(23, 22, 23, 26), options: { inlineClassName: "mdbAlternate" } },
                { range: new monaco.Range(23, 58, 23, 62), options: { inlineClassName: "mdbAlternate" } },
                { range: new monaco.Range(23, 67, 23, 78), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(25, 1, 25, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(25, 22, 25, 27), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(25, 79, 25, 83), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(25, 38, 25, 46), options: { inlineClassName: "mdbPlace" } },
                { range: new monaco.Range(25, 50, 25, 57), options: { inlineClassName: "mdbPlace" } },
                { range: new monaco.Range(25, 91, 25, 97), options: { inlineClassName: "mdbPlace" } },
                { range: new monaco.Range(26, 1, 26, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(26, 84, 26, 90), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(27, 1, 27, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(29, 1, 29, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(29, 29, 29, 35), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(29, 42, 29, 47), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(30, 1, 30, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(30, 50, 30, 57), options: { inlineClassName: "mdbAlternate" } },
                { range: new monaco.Range(30, 61, 30, 66), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(30, 105, 30, 111), options: { inlineClassName: "mdbPeople" } },
                { range: new monaco.Range(32, 1, 32, 20), options: { inlineClassName: "mdbSectionHeading" } },
                { range: new monaco.Range(34, 1, 34, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(34, 33, 34, 38), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(34, 47, 34, 54), options: { inlineClassName: "mdbPlace" } },
                { range: new monaco.Range(34, 9, 34, 13), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(34, 85, 34, 88), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(35, 1, 35, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(35, 42, 35, 45), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(37, 1, 37, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(37, 6, 37, 11), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(37, 68, 37, 73), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(37, 90, 37, 96), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(37, 45, 37, 59), options: { inlineClassName: "mdbPlace" } },
                { range: new monaco.Range(38, 1, 38, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(38, 25, 38, 30), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(39, 1, 39, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(41, 1, 41, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(41, 37, 41, 42), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(41, 44, 41, 51), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(41, 75, 41, 79), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(42, 1, 42, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(42, 3, 42, 8), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(42, 57, 42, 64), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(44, 1, 44, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(44, 49, 44, 54), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(44, 18, 44, 27), options: { inlineClassName: "mdbPlace" } },
                { range: new monaco.Range(45, 1, 45, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(46, 1, 46, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(47, 1, 47, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(47, 30, 47, 35), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(48, 1, 48, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(48, 7, 48, 12), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(49, 1, 49, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(50, 1, 50, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(51, 1, 51, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(51, 74, 51, 81), options: { inlineClassName: "mdbPlace" } },
                { range: new monaco.Range(53, 1, 53, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(53, 69, 53, 74), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(53, 79, 53, 85), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(53, 98, 53, 103), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(53, 108, 53, 112), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(54, 1, 54, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(54, 79, 54, 84), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(54, 7, 54, 28), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(55, 1, 55, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(55, 3, 55, 8), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(57, 1, 57, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(57, 55, 57, 60), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(57, 102, 57, 104), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(58, 1, 58, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(58, 3, 58, 8), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(60, 1, 60, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(60, 41, 60, 46), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(61, 1, 61, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(61, 7, 61, 12), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(62, 1, 62, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(63, 1, 63, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(63, 7, 63, 12), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(64, 1, 64, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(64, 77, 64, 84), options: { inlineClassName: "mdbPlace" } },
                { range: new monaco.Range(66, 1, 66, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(66, 27, 66, 32), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(67, 1, 67, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(67, 26, 67, 31), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(68, 1, 68, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(69, 1, 69, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(69, 12, 69, 17), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(70, 1, 70, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(70, 157, 70, 162), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(71, 1, 71, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(71, 110, 71, 115), options: { inlineClassName: "mdbTrinity" } },

            ]);
        }

        if (newEditor.getModel().uri == malachiModel.uri) {
            var decorations = newEditor.createDecorationsCollection([

                { range: new monaco.Range(2, 1, 2, 10), options: { inlineClassName: "mdbPeekHeading" } },
                { range: new monaco.Range(4, 1, 4, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(4, 79, 4, 83), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(4, 215, 4, 219), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(6, 1, 6, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(6, 143, 6, 144), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(6, 221, 6, 225), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(6, 310, 6, 314), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(6, 316, 6, 317), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(6, 344, 6, 349), options: { inlineClassName: "mdbPeople" } },
                { range: new monaco.Range(6, 354, 6, 363), options: { inlineClassName: "mdbPlace" } },
                { range: new monaco.Range(6, 383, 6, 387), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(8, 1, 8, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(8, 214, 8, 218), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(9, 1, 9, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(9, 14, 9, 18), options: { inlineClassName: "mdbTrinity" } },
                { range: new monaco.Range(9, 80, 9, 85), options: { inlineClassName: "mdbPerson" } },
                { range: new monaco.Range(11, 1, 11, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(12, 1, 12, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(13, 1, 13, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(15, 1, 15, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(16, 1, 16, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(17, 1, 17, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(19, 1, 19, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(20, 1, 20, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(21, 1, 21, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(23, 1, 23, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(24, 1, 24, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(25, 1, 25, 3), options: { inlineClassName: "mdbVerseNumber" } },

            ]);
        }

        if (newEditor.getModel().uri == isaiahModel.uri) {
            var decorations = newEditor.createDecorationsCollection([

                { range: new monaco.Range(2, 1, 2, 11), options: { inlineClassName: "mdbPeekHeading" } },
                { range: new monaco.Range(4, 5, 4, 6), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(7, 5, 7, 6), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(14, 1, 14, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(19, 1, 19, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(24, 1, 24, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(28, 1, 28, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(33, 1, 33, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(36, 1, 36, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(39, 1, 39, 2), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(47, 1, 47, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(52, 1, 52, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(57, 1, 57, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(63, 1, 63, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(66, 1, 66, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(70, 1, 70, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(74, 1, 74, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(77, 1, 77, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(80, 1, 80, 3), options: { inlineClassName: "mdbVerseNumber" } },
                { range: new monaco.Range(83, 1, 83, 3), options: { inlineClassName: "mdbVerseNumber" } },

            ]);
        }

    });
});



const myEditor = monaco.editor.create(document.getElementById("container"), {
    language: 'mdbible',
    theme: 'mdbTheme',
    automaticLayout: true,
    readOnly: true,
    codeLens: true,
    showFoldingControls: "never",
    definitionLinkOpensInPeek: true,
    occurrencesHighlight: "off",
    minimap: { enabled: false },
    lineNumbers: "off",
    lineNumbersMinChars: 3,
    renderLineHighlight: "none",
    wordWrap: "on",
    scrollBeyondLastLine: false,
    scrollbar: { horizontal: 'hidden' },
    lightbulb: {
        enabled: "off"
    },
    unicodeHighlight: {
        ambiguousCharacters: false,
    },
    guides: {
        indentation: false
    },

    "semanticHighlighting.enabled": true,
});

myEditor.setModel(markModel);


monaco.languages.registerInlayHintsProvider("mdbible", {
    provideInlayHints: function (model, range, token) {

        // ADD HINTS

        if (model.uri == markModel.uri) {
            return {
                hints: [
                    { kind: monaco.languages.InlayHintKind.Type, position: { lineNumber: 19, column: 82 }, label: `(John)`, },
                    { kind: monaco.languages.InlayHintKind.Type, position: { lineNumber: 19, column: 113 }, label: `(John)`, },
                    { kind: monaco.languages.InlayHintKind.Type, position: { lineNumber: 22, column: 8 }, label: `(John)`, },
                    { kind: monaco.languages.InlayHintKind.Type, position: { lineNumber: 23, column: 3 }, label: `(John)`, },
                    { kind: monaco.languages.InlayHintKind.Type, position: { lineNumber: 23, column: 40 }, label: `(the one coming after)`, },
                    { kind: monaco.languages.InlayHintKind.Type, position: { lineNumber: 25, column: 97 }, label: `(river)`, },
                    { kind: monaco.languages.InlayHintKind.Type, position: { lineNumber: 26, column: 13 }, label: `(Jesus)`, },
                    { kind: monaco.languages.InlayHintKind.Type, position: { lineNumber: 26, column: 48 }, label: `(Jesus)`, },
                    { kind: monaco.languages.InlayHintKind.Type, position: { lineNumber: 26, column: 109 }, label: `(Jesus)`, },
                    { kind: monaco.languages.InlayHintKind.Type, position: { lineNumber: 27, column: 43 }, label: `(Jesus)`, },
                    { kind: monaco.languages.InlayHintKind.Type, position: { lineNumber: 27, column: 50 }, label: `(GOD--the Father)`, },
                    { kind: monaco.languages.InlayHintKind.Type, position: { lineNumber: 30, column: 9 }, label: `(Jesus)`, },
                    { kind: monaco.languages.InlayHintKind.Type, position: { lineNumber: 30, column: 122 }, label: `(Jesus)`, },
                    { kind: monaco.languages.InlayHintKind.Type, position: { lineNumber: 39, column: 7 }, label: `(Simon & Andrew)`, },
                    { kind: monaco.languages.InlayHintKind.Type, position: { lineNumber: 39, column: 49 }, label: `(Jesus)`, },
                    { kind: monaco.languages.InlayHintKind.Type, position: { lineNumber: 42, column: 38 }, label: `(James & John)`, },
                    { kind: monaco.languages.InlayHintKind.Type, position: { lineNumber: 42, column: 110 }, label: `(Jesus)`, },
                    { kind: monaco.languages.InlayHintKind.Type, position: { lineNumber: 61, column: 58 }, label: `(Jesus)`, },
                ],
                dispose: () => { },
            };
        }

        return undefined;
    },
});


monaco.languages.registerDefinitionProvider('mdbible', {
    provideDefinition: function (model, position) {

            // ADD DEFINTIONS

        if (model.uri == markModel.uri) {
            if (position.lineNumber == 11 && position.column >= 5 && position.column <= 44) { return { uri: monaco.Uri.parse("malachi"), range: new monaco.Range(1, 1, 1, 2), } }
            if (position.lineNumber == 14 && position.column >= 5 && position.column <= 22) { return { uri: monaco.Uri.parse("isaiah"), range: new monaco.Range(1, 1, 1, 2), } }
        }


        return undefined;
    }
});


// ADD COMMANDS

var malachicmdId = myEditor.addCommand(1, function () { myEditor.setPosition({ lineNumber: 11, column: 5 }); myEditor.trigger('source', 'editor.action.peekDefinition'); }, "");
var isaiahcmdId = myEditor.addCommand(2, function () { myEditor.setPosition({ lineNumber: 14, column: 5 }); myEditor.trigger('source', 'editor.action.peekDefinition'); }, "");



monaco.languages.registerCodeLensProvider('mdbible', {
    provideCodeLenses: function (model, token) {
        // ADD CODELENS

        if (model.uri == markModel.uri) {
            return {
                lenses: [
                    { range: { startLineNumber: 11, startColumn: 5, endLineNumber: 11, endColumn: 44, }, command: { id: malachicmdId, title: "Malachi 3:1", }, },
                    { range: { startLineNumber: 14, startColumn: 5, endLineNumber: 14, endColumn: 22, }, command: { id: isaiahcmdId, title: "Isaiah 40:3", }, },
                ],
                dispose: () => { },
            };
        }


        return undefined;
    },
    resolveCodeLens: function (model, codeLens, token) {
        return codeLens;
    },
});


// Method called when the HTML checkbox is clicked
function SetTheme(useDarkMode) {
    if (useDarkMode.checked) {
        myEditor.updateOptions({ theme: "vs-dark" });
    } else {
        myEditor.updateOptions({ theme: "vs" });
    }
}


// This being displayed means that all the JS has loaded without issue.
alert("end of digibible file");
