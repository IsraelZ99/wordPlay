let myPackage = require('objects-dictionary');

let knowTheSameElements = (arrayWord, arrayToCompare, goodWord) => {
    let arrayToCopyItems = [];
    let copyArrayWord = arrayWord.slice();
    let completeWords = "";
    arrayToCompare.forEach(element => {
        if (copyArrayWord.includes(element)) {
            arrayToCopyItems.push(element);
            copyArrayWord.splice(copyArrayWord.indexOf(element), 1);
        }
    });
    /*COMPROBAR QUE SEAN IGUALES O NO */
    let changeToStringWord = arrayWord.join('');
    let changeToStringNew = arrayToCopyItems.join('');
    if (changeToStringNew === changeToStringWord) {
        completeWords = goodWord;
    } else { completeWords = "no"; }
    return completeWords;
}

let wordPlay = (userArray) => {
    let arrayOfCreatedWords = [];
    for (let i = 0; i < myPackage.myDictionary.length; i++) {
        let getWordSorted = myPackage.myDictionary[i].sorted;
        userArray.sort();
        let arrayWordSorted = Array.from(getWordSorted);
        let getWord = myPackage.myDictionary[i].word;
        arrayOfCreatedWords.push(knowTheSameElements(arrayWordSorted, userArray, getWord));
        if (arrayOfCreatedWords[arrayOfCreatedWords.length - 1] === "no") arrayOfCreatedWords.pop();
    }
    return arrayOfCreatedWords;
}

let resultsWordPlay = (userArray) => {
    console.warn("Las palabras que se pueden armar con: \n");
    console.info(userArray);
    console.info("son: ");
    console.info(wordPlay(userArray));
    console.info("\n");
}



/* *********************** TESTING *********************** */
const word1 = "cpatmkdiniarapboercpamliyarr"; //p,t,k,d
const word2 = "aabelmutmncs";
const word3 = "sgimaoa";

const arrayOfLetters = Array.from(word1);
const arrayOfLetters2 = Array.from(word2);
const arrayOfLetters3 = Array.from(word3)

/* resultsWordPlay(arrayOfLetters);
resultsWordPlay(arrayOfLetters2); */
resultsWordPlay(arrayOfLetters3);