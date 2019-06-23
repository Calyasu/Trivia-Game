//Global Variables
var $trivia = $("#trivia");
var questions = [{
    text: "1. Where is King's Landing?",
    option: [{
        text: "South of Westeros.",
        id: "1a"
    }, {
        text: "North of Westeros",
        id: "1b"
    }, {
        text: "South of Essos",
        id: "1c"
    }, {
        text: "North of Essos",
        id: "1d"
    }]
}, {
    text: "2. What is The Purple Wedding?",
    option: [{
        text: "Edmure Tully and Roslin Frey's Wedding",
        id: "2a"
    }, {
        text: "Robb Stark and Talisa Maegyr's Wedding",
        id: "2b"
    }, {
        text: "Tyrion Lannister and Sansa Stark's Wedding",
        id: "2c"
    }, {
        text: "Joffrey Baratheon and Margaery Tyrell's Wedding",
        id: "2d"
    }]
}, {
    text: "3. What is the meaning of the phrase 'Valar Dohaeris' ? ",
    option: [{
        text: "All men must live",
        id: "3a"
    }, {
        text: "All men must die",
        id: "3b"
    }, {
        text: "All men must serve",
        id: "3c"
    }, {
        text: "All men must kill",
        id: "3d"
    }]
}, {
    text: "4. Who sits on the Iron Throne in the end?",
    option: [{
        text: "Jon Snow/Aegon VII Targaryen",
        id: "4a"
    }, {
        text: "Daenerys Targaryen",
        id: "4b"
    }, {
        text: "Brandon Stark",
        id: "4c"
    }, {
        text: "No One",
        id: "4d"
    }]
}, {
    text: "5. Who is 'The Prince That Was Promised' according to the show?",
    option: [{
        text: "Jon Snow/Aegon VII Targaryen",
        id: "5a"
    }, {
        text: "Daenerys Targaryen",
        id: "5b"
    }, {
        text: "Arya Stark",
        id: "5c"
    }, {
        text: "Jamie Lannister",
        id: "5d"
    }]
}, {
    text: "6. What is Hodor's real name?",
    option: [{
        text: "Willace",
        id: "6a"
    }, {
        text: "Wylis",
        id: "6b"
    }, {
        text: "Wyllis",
        id: "6c"
    }, {
        text: "Wallace",
        id: "6d"
    }]
}, {
    text: "7. Who made The Iron Throne?",
    option: [{
        text: "Balerion The Dread",
        id: "7a"
    }, {
        text: "Aegon I Targaryen",
        id: "7b"
    }, {
        text: "Aerys II Targaryen/The Mad King",
        id: "7c"
    }, {
        text: "Tywin Lannister",
        id: "7d"
    }]
}, {
    text: "8. Which of the following is not one of Jamie Lannister's alias",
    option: [{
        text: "Kingslayer",
        id: "8a"
    }, {
        text: "Kingkiller",
        id: "8b"
    }, {
        text: "Lord of Casterly Rock",
        id: "8c"
    }, {
        text: "Lord Commander of the Kingsguard",
        id: "8d"
    }]
}, {
    text: "9. Which of the following houses extinct?",
    option: [{
        text: "Lannisters",
        id: "9a"
    }, {
        text: "Tyrells",
        id: "9b"
    }, {
        text: "Targaryens",
        id: "9c"
    }, {
        text: "Baratheons",
        id: "9d"
    }]
}, {
    text: "10. Who is currently The King/Queen of the Seven Kingdom?",
    option: [{
        text: "Bran Stark",
        id: "10a"
    }, {
        text: "Jon Snow",
        id: "10b"
    }, {
        text: "Daenerys Targaryen",
        id: "10c"
    }, {
        text: "No One",
        id: "10d"
    }]
}]