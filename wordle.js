const vocabulary = [
    
        {
            type: "noun",
            nominative: "οὐρανός",
            genitive: "οὐρανοῦ",
            article: "ὁ",
            meaning: "sky, heaven",
            declension: "2nd declension",
            gender: "m",
            forms: ["οὐρανός", "οὐρανοῦ", "οὐρανῷ", "οὐρανόν", "οὐρανοί", "οὐρανῶν", "οὐρανοῖς", "οὐρανούς"]
        },
        {
            type: "noun",
            nominative: "ὀφθαλμός",
            genitive: "ὀφθαλμοῦ",
            article: "ὁ",
            meaning: "eye",
            declension: "2nd declension",
            gender: "m",
            forms: ["ὀφθαλμός", "ὀφθαλμοῦ", "ὀφθαλμῷ", "ὀφθαλμόν", "ὀφθαλμοί", "ὀφθαλμῶν", "ὀφθαλμοῖς", "ὀφθαλμούς"]
        },
        {
            type: "noun",
            nominative: "παῖς",
            genitive: "παιδός",
            article: "ὁ",
            meaning: "child",
            declension: "3rd declension",
            gender: "m",
            forms: ["παῖς", "παιδός", "παιδί", "παῖδα", "παῖδες", "παίδων", "παῖσι", "παῖδας"]
        },
        {
            type: "noun",
            nominative: "πάππας",
            genitive: "πάππου",
            article: "ὁ",
            meaning: "father, papa",
            declension: "2nd declension",
            gender: "m",
            forms: ["πάππας", "πάππου", "πάππῳ", "πάππαν", "πάπποι", "πάππων", "πάπποις", "πάππους"]
        },
        {
            type: "noun",
            nominative: "πάππος",
            genitive: "πάππου",
            article: "ὁ",
            meaning: "grandfather",
            declension: "2nd declension",
            gender: "m",
            forms: ["πάππος", "πάππου", "πάππῳ", "πάππον", "πάπποι", "πάππων", "πάπποις", "πάππους"]
        },
        {
            type: "noun",
            nominative: "παρθένος",
            genitive: "παρθένου",
            article: "ἡ",
            meaning: "maiden, girl",
            declension: "2nd declension",
            gender: "f",
            forms: ["παρθένος", "παρθένου", "παρθένῳ", "παρθένον", "παρθένοι", "παρθένων", "παρθένοις", "παρθένους"]
        },
        {
            type: "noun",
            nominative: "Παρθένος",
            genitive: "Παρθένου",
            article: "ἡ",
            meaning: "the Maiden, Athena",
            declension: "2nd declension",
            gender: "f",
            forms: ["Παρθένος", "Παρθένου", "Παρθένῳ", "Παρθένον", "Παρθένοι", "Παρθένων", "Παρθένοις", "Παρθένους"]
        },
        {
            type: "noun",
            nominative: "Παρθενών",
            genitive: "Παρθενῶνος",
            article: "ὁ",
            meaning: "the Parthenon",
            declension: "3rd declension",
            gender: "m",
            forms: ["Παρθενών", "Παρθενῶνος", "Παρθενῶνι", "Παρθενῶνα", "Παρθενῶνες", "Παρθενώνων", "Παρθενῶσι", "Παρθενῶνας"]
        },
        {
            type: "noun",
            nominative: "πατήρ",
            genitive: "πατρός",
            article: "ὁ",
            meaning: "father",
            declension: "3rd declension",
            gender: "m",
            forms: ["πατήρ", "πατρός", "πατρί", "πατέρα", "πατέρες", "πατέρων", "πατράσι", "πατέρας"]
        },
        {
            type: "noun",
            nominative: "πατρίς",
            genitive: "πατρίδος",
            article: "ἡ",
            meaning: "fatherland",
            declension: "3rd declension",
            gender: "f",
            forms: ["πατρίς", "πατρίδος", "πατρίδι", "πατρίδα", "πατρίδες", "πατρίδων", "πατρίσι", "πατρίδας"]
        },
        {
            type: "noun",
            nominative: "Πειραιεύς",
            genitive: "Πειραιῶς",
            article: "ὁ",
            meaning: "the Piraeus (port of Athens)",
            declension: "3rd declension",
            gender: "m",
            forms: ["Πειραιεύς", "Πειραιῶς", "Πειραιεῖ", "Πειραιᾶ", "Πειραιεῖς", "Πειραιῶν", "Πειραιεῦσι", "Πειραιεῖς"]
        },
        {
            type: "noun",
            nominative: "Πελοπόννησος",
            genitive: "Πελοποννήσου",
            article: "ἡ",
            meaning: "the Peloponnese",
            declension: "2nd declension",
            gender: "f",
            forms: ["Πελοπόννησος", "Πελοποννήσου", "Πελοποννήσῳ", "Πελοπόννησον", "Πελοπόννησοι", "Πελοποννήσων", "Πελοποννήσοις", "Πελοποννήσους"]
        },
        {
            type: "noun",
            nominative: "πέπλος",
            genitive: "πέπλου",
            article: "ὁ",
            meaning: "robe, cloth",
            declension: "2nd declension",
            gender: "m",
            forms: ["πέπλος", "πέπλου", "πέπλῳ", "πέπλον", "πέπλοι", "πέπλων", "πέπλοις", "πέπλους"]
        },
        {
            type: "noun",
            nominative: "ποταμός",
            genitive: "ποταμοῦ",
            article: "ὁ",
            meaning: "river",
            declension: "2nd declension",
            gender: "m",
            forms: ["ποταμός", "ποταμοῦ", "ποταμῷ", "ποταμόν", "ποταμοί", "ποταμῶν", "ποταμοῖς", "ποταμούς"]
        },
        {
            type: "noun",
            nominative: "στρατηγός",
            genitive: "στρατηγοῦ",
            article: "ὁ",
            meaning: "general",
            declension: "2nd declension",
            gender: "m",
            forms: ["στρατηγός", "στρατηγοῦ", "στρατηγῷ", "στρατηγόν", "στρατηγοί", "στρατηγῶν", "στρατηγοῖς", "στρατηγοίς"]
        },
        {
            type: "noun",
            nominative: "στρατός",
            genitive: "στρατοῦ",
            article: "ὁ",
            meaning: "army",
            declension: "2nd declension",
            gender: "m",
            forms: ["στρατός", "στρατοῦ", "στρατῷ", "στρατόν", "στρατοί", "στρατῶν", "στρατοῖς", "στρατούς"]
        },
        {
            type: "noun",
            nominative: "στόμα",
            genitive: "στόματος",
            article: "τό",
            meaning: "mouth",
            declension: "3rd declension",
            gender: "n",
            forms: ["στόμα", "στόματος", "στόματι", "στόμα", "στόματα", "στομάτων", "στόμασι", "στόματα"]
        },
        {
            type: "noun",
            nominative: "σύμμαχος",
            genitive: "συμμάχου",
            article: "ὁ",
            meaning: "ally",
            declension: "2nd declension",
            gender: "m",
            forms: ["σύμμαχος", "συμμάχου", "συμμάχῳ", "σύμμαχον", "σύμμαχοι", "συμμάχων", "συμμάχοις", "συμμάχους"]
        },
        {
            type: "noun",
            nominative: "τεῖχος",
            genitive: "τείχους",
            article: "τό",
            meaning: "wall",
            declension: "3rd declension",
            gender: "n",
            forms: ["τεῖχος", "τείχους", "τείχει", "τεῖχος", "τείχη", "τειχῶν", "τείχεσι", "τείχη"]
        },
        {
            type: "noun",
            nominative: "τιμή",
            genitive: "τιμῆς",
            article: "ἡ",
            meaning: "honor",
            declension: "1st declension",
            gender: "f",
            forms: ["τιμή", "τιμῆς", "τιμῇ", "τιμήν", "τιμαί", "τιμῶν", "τιμαῖς", "τιμάς"]
        },
        {
            type: "noun",
            nominative: "τόξον",
            genitive: "τόξου",
            article: "τό",
            meaning: "bow",
            declension: "2nd declension",
            gender: "n",
            forms: ["τόξον", "τόξου", "τόξῳ", "τόξον", "τόξα", "τόξων", "τόξοις", "τόξα"]
        },
        {
            type: "noun",
            nominative: "τριήρης",
            genitive: "τριήρους",
            article: "ἡ",
            meaning: "trireme",
            declension: "3rd declension",
            gender: "f",
            forms: ["τριήρης", "τριήρους", "τριήρει", "τριήρη", "τριήρεις", "τριήρων", "τριήρεσι", "τριήρεις"]
        },
        {
            type: "noun",
            nominative: "τροφή",
            genitive: "τροφῆς",
            article: "ἡ",
            meaning: "food",
            declension: "1st declension",
            gender: "f",
            forms: ["τροφή", "τροφῆς", "τροφῇ", "τροφήν", "τροφαί", "τροφῶν", "τροφαῖς", "τροφάς"]
        },
        {
            type: "noun",
            nominative: "τύχη",
            genitive: "τύχης",
            article: "ἡ",
            meaning: "fortune, chance",
            declension: "1st declension",
            gender: "f",
            forms: ["τύχη", "τύχης", "τύχῃ", "τύχην", "τύχαι", "τυχῶν", "τύχαις", "τύχας"]
        },
        {
            type: "noun",
            nominative: "ὕδωρ",
            genitive: "ὕδατος",
            article: "τό",
            meaning: "water",
            declension: "3rd declension",
            gender: "n",
            forms: ["ὕδωρ", "ὕδατος", "ὕδατι", "ὕδωρ", "ὕδατα", "ὑδάτων", "ὕδασι", "ὕδατα"]
        },
        {
            type: "noun",
            nominative: "υἱός",
            genitive: "υἱοῦ",
            article: "ὁ",
            meaning: "son",
            declension: "2nd declension",
            gender: "m",
            forms: ["υἱός", "υἱοῦ", "υἱῷ", "υἱόν", "υἱοί", "υἱῶν", "υἱοῖς", "υἱούς"]
        },
        {
            type: "noun",
            nominative: "φάλαγξ",
            genitive: "φάλαγγος",
            article: "ἡ",
            meaning: "phalanx",
            declension: "3rd declension",
            gender: "f",
            forms: ["φάλαγξ", "φάλαγγος", "φάλαγγι", "φάλαγγα", "φάλαγγες", "φαλάγγων", "φάλαγξι", "φάλαγγας"]
        },
        {
            type: "noun",
            nominative: "φίλος",
            genitive: "φίλου",
            article: "ὁ",
            meaning: "friend",
            declension: "2nd declension",
            gender: "m",
            forms: ["φίλος", "φίλου", "φίλῳ", "φίλον", "φίλοι", "φίλων", "φίλοις", "φίλους"]
        },
        {
            type: "noun",
            nominative: "φόβος",
            genitive: "φόβου",
            article: "ὁ",
            meaning: "fear",
            declension: "2nd declension",
            gender: "m",
            forms: ["φόβος", "φόβου", "φόβῳ", "φόβον", "φόβοι", "φόβων", "φόβοις", "φόβους"]
        },
        {
            type: "noun",
            nominative: "χείρ",
            genitive: "χειρός",
            article: "ἡ",
            meaning: "hand",
            declension: "3rd declension",
            gender: "f",
            forms: ["χείρ", "χειρός", "χειρί", "χείρα", "χέρες", "χειρῶν", "χεροῖς", "χεῖρας"]
        },
        {
            type: "noun",
            nominative: "χρῆμα",
            genitive: "χρήματος",
            article: "τό",
            meaning: "thing, (pl.) money",
            declension: "3rd declension",
            gender: "n",
            forms: ["χρῆμα", "χρήματος", "χρήματι", "χρῆμα", "χρήματα", "χρημάτων", "χρήμασι", "χρήματα"]
        },
        {
            type: "noun",
            nominative: "χρυσός",
            genitive: "χρυσοῦ",
            article: "ὁ",
            meaning: "gold",
            declension: "2nd declension",
            gender: "m",
            forms: ["χρυσός", "χρυσοῦ", "χρυσῷ", "χρυσόν", "χρυσοί", "χρυσῶν", "χρυσοῖς", "χρυσούς"]
        },
        {
            type: "verb",
            present: "γράφω",
            aorist: "ἔγραψα",
            meaning: "to write",
            forms: ["γράφω", "γράφεις", "γράφει", "γράφουμεν", "γράφετε", "γράφουσι", "ἔγραψα", "ἔγραψας", "ἔγραψε", "ἔγραψαμεν", "ἔγραψατε", "ἔγραψαν"]
        },
        {
            type: "verb",
            present: "λύω",
            aorist: "ἔλυσα",
            meaning: "to loose, to free",
            forms: ["λύω", "λύεις", "λύει", "λύομεν", "λύετε", "λύουσι", "ἔλυσα", "ἔλυσας", "ἔλυσε", "ἔλυσαμεν", "ἔλυσατε", "ἔλυσαν"]
        }
         
        
        
    
];

var height = 6; // number of guesses
var width = 5; // length of the word
var row = 0; // current guess (attempt #)
var col = 0; // current letter for that attempt
var gameOver = false;

var selectedWordObj = getWordToGuess(vocabulary);
var word = removeAccents(selectedWordObj.form.toUpperCase());

window.onload = function() {
    initialize();
}

function initialize() {
    // Create the game board
    const board = document.getElementById("board");
    board.innerHTML = ''; // Clear previous board if any
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            board.appendChild(tile);
        }
    }

    // Listen for button clicks
    document.getElementById("keyboard").addEventListener("click", (e) => {
        if (gameOver) return;

        const target = e.target;
        if (target.tagName !== "BUTTON") return;

        if (target.id === "backspace") {
            if (col > 0) {
                col -= 1;
                let currTile = document.getElementById(row.toString() + '-' + col.toString());
                currTile.innerText = "";
            }
        } else if (target.id === "enter") {
            if (col == width) {
                update();
                row += 1; // start new row
                col = 0; // start at 0 for new row
                if (row == height && !gameOver) {
                    gameOver = true;
                    document.getElementById("answer").innerText = `The correct word was: ${selectedWordObj.form}`;
                    displayWordInfo(selectedWordObj, "");
                }
            }
        } else {
            if (col < width) {
                let currTile = document.getElementById(row.toString() + '-' + col.toString());
                if (currTile.innerText == "") {
                    currTile.innerText = target.innerText;
                    col += 1;
                }
            }
        }
    });
}

function update() {
    let guess = "";
    let correctLetters = 0;
    let correctLettersIndices = [];
    let wordRemainingLetters = word.split(''); // Make a copy of the word to track remaining letters
    let guessWithAccents = ""; // Define guessWithAccents variable

    // Construct guessWithAccents
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        guessWithAccents += currTile.innerText;
    }

    // Check each letter in the guess
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        // If the guessed letter matches the letter in the word at the same position
        if (word[c] === letter) {
            currTile.classList.add("correct");
            correctLetters++;
            correctLettersIndices.push(c);
            // Remove the correctly guessed letter from the remaining letters
            wordRemainingLetters.splice(wordRemainingLetters.indexOf(letter), 1);
        }
    }

    // Check each letter in the guess again to mark yellow tiles for correct letters in wrong positions
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        // If the guessed letter is in the word but not in the correct position
        if (word.includes(letter) && !correctLettersIndices.includes(c)) {
            // Check if there are more occurrences of this letter in the remaining letters
            if (wordRemainingLetters.includes(letter)) {
                currTile.classList.add("present");
                wordRemainingLetters.splice(wordRemainingLetters.indexOf(letter), 1);
            } else {
                currTile.classList.add("absent");
            }
        } else if (!word.includes(letter)) { // If the guessed letter is not in the word
            currTile.classList.add("absent");
        }
    }

    // If all letters are correct
    if (correctLetters === width) {
        gameOver = true;
        document.getElementById("answer").innerText = "You guessed the word!";
    }

    // If all guesses are used and the word is not guessed
    if (!gameOver && row === height - 1) {
        gameOver = true;
        document.getElementById("answer").innerText = `The correct word was: ${selectedWordObj.form}`;
    }

    // Display word information after game over
    if (gameOver) {
        displayWordInfo(selectedWordObj, guessWithAccents);
    }
}

function getWordToGuess(vocabulary) {
    if (!vocabulary || !Array.isArray(vocabulary) || vocabulary.length === 0) {
        console.error("Vocabulary is empty or not properly defined.");
        return null;
    }

    const fiveLetterWords = [];

    for (const wordObject of vocabulary) {
        if (wordObject && wordObject.type && Array.isArray(wordObject.forms)) {
            const fiveLetterForms = wordObject.forms.filter(form => removeAccents(form).length === 5);
            for (const form of fiveLetterForms) {
                fiveLetterWords.push({ word: wordObject, form: form });
            }
        } else {
            console.error("Invalid word object in vocabulary:", wordObject);
        }
    }

    if (fiveLetterWords.length === 0) {
        console.error("No five-letter words found in the vocabulary.");
        return null;
    }

    const selectedWord = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
    return selectedWord;
}


function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function displayWordInfo(selectedWordObj, guessedForm) {
    let wordInfo = selectedWordObj.word;
    let info;

    let grammaticalLabel;
    if (wordInfo.type === "noun") {
        grammaticalLabel = getNounLabel(selectedWordObj);
        info = `
            <p>${wordInfo.nominative}, ${wordInfo.genitive}, ${wordInfo.article}</p>
            <p>${wordInfo.meaning}</p>
            <p>${grammaticalLabel}</p>
        `;
    } else if (wordInfo.type === "verb") {
        grammaticalLabel = getVerbLabel(selectedWordObj);
        info = `
            <p>${wordInfo.present}, ${wordInfo.aorist}</p>
            <p>${wordInfo.meaning}</p>
            <p>${grammaticalLabel}</p>
        `;
    }

    document.getElementById("answer").innerHTML = info;
}

function getNounLabel(selectedWordObj) {
    const forms = selectedWordObj.word.forms;
    const formIndex = forms.indexOf(selectedWordObj.form);
    let label;
    if (formIndex === 0) {
        label = "Nom. sg.";
    } else if (formIndex === 1) {
        label = "Gen. sg.";
    } else if (formIndex === 2) {
        label = "Dat. sg.";
    } else if (formIndex === 3) {
        label = "Acc. sg.";
    } else if (formIndex === 4) {
        label = "Nom. pl.";
    } else if (formIndex === 5) {
        label = "Gen. pl.";
    } else if (formIndex === 6) {
        label = "Dat. pl.";
    } else if (formIndex === 7) {
        label = "Acc. pl.";
    }
    return label;
}

function getVerbLabel(selectedWordObj) {
    const forms = selectedWordObj.word.forms;
    const formIndex = forms.indexOf(selectedWordObj.form);
    let label;
    if (formIndex === 0) {
        label = "1st sg. present";
    } else if (formIndex === 1) {
        label = "2nd sg. present";
    } else if (formIndex === 2) {
        label = "3rd sg. present";
    } else if (formIndex === 3) {
        label = "1st pl. present";
    } else if (formIndex === 4) {
        label = "2nd pl. present";
    } else if (formIndex === 5) {
        label = "3rd pl. present";
    } else if (formIndex === 6) {
        label = "1st sg. aorist";
    } else if (formIndex === 7) {
        label = "2nd sg. aorist";
    } else if (formIndex === 8) {
        label = "3rd sg. aorist";
    } else if (formIndex === 9) {
        label = "1st pl. aorist";
    } else if (formIndex === 10) {
        label = "2nd pl. aorist";
    } else if (formIndex === 11) {
        label = "3rd pl. aorist";
    }
    return label;
}













