const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

const britishToAmericanSpelling = {};
for (const [key, value] of Object.entries(americanToBritishSpelling)) {
  britishToAmericanSpelling[value] = key;
}

const britishToAmericanTitles = {};
for (const [key, value] of Object.entries(americanToBritishTitles)) {
  britishToAmericanTitles[value] = key;
}

class Translator {
  
  translate(inputStr, locale) {
    let translateWords;
    let translateSpellings;
    let translateTitles;
    let timeRegex;
    let timeOutput;
    
    if (locale === "american-to-british") {
      translateWords = americanOnly;
      translateSpellings = americanToBritishSpelling;
      translateTitles = americanToBritishTitles;
      timeRegex = /(\d{1,2})\:(\d{2})/g;
      timeOutput = '<span class="highlight">' + "$1.$2" + "</span>"
    } else {
      translateWords = britishOnly;
      translateSpellings = britishToAmericanSpelling;
      translateTitles = britishToAmericanTitles;
      timeRegex = /(\d{1,2})\.(\d{2})/g;
      timeOutput = '<span class="highlight">' + "$1:$2" + "</span>";
    }
    
    const wordRegExp = /\b[\w]{1,}(\-[\w]{1,})?(\'d)?\b/;
    const inputArray = inputStr.split(" ");
    let translated = new Array(inputArray.length).fill(false);
    let updated = false;
    let output = inputStr.slice();

    /*console.log(inputArray);
    console.log(translated);
    console.log(output);*/
    

    // translate words and spellings
    for (let i = 0; i <= inputArray.length - 1; ++i) {
      if (!translated[i]) {
        let word1 = (inputArray[i].match(wordRegExp))[0].toLowerCase();
        let word2 = inputArray[i + 1] ? (inputArray[i + 1].match(wordRegExp))[0].toLowerCase() : "";
        let word3 = inputArray[i + 2] ? (inputArray[i + 2].match(wordRegExp))[0].toLowerCase() : "";

        let combo3 = word1 + " " + word2 + " " + word3;
        let input3 = new RegExp(word1 + "\\s" + word2 + "\\s" + word3, "i");
        let combo2 = word1 + " " + word2;
        let input2 = new RegExp(word1 + "\\s" + word2, "i");
        let input1 = new RegExp(word1, "i");

        if (word2 && word3) {
          if (word1.length === inputArray[i].length && word2.length === inputArray[i + 1].length) {
            if (translateWords[combo3]) {
              output = output.replace(input3, `<span class="highlight">${translateWords[combo3]}</span>`);
              translated[i] = true;
              translated[i + 1] = true;
              translated[i + 2] = true;
              updated = true
            } else if (translateWords[combo2]) {
              output = output.replace(input2, `<span class="highlight">${translateWords[combo2]}</span>`);
              translated[i] = true;
              translated[i + 1] = true;
              updated = true;
            } else {
              if (translateWords[word1]) {
                output = output.replace(input1, `<span class="highlight">${translateWords[word1]}</span>`);
                translated[i] = true;
                updated = true;
              } else if (translateSpellings[word1]) {
                output = output.replace(input1,`<span class="highlight">${translateSpellings[word1]}</span>`);
                translated[i] = true;
                updated = true;
              }
            }
          }
          
        } else if (word2) {
          if (word1.length === inputArray[i].length) {
            if (translateWords[combo2]) {
              output = output.replace(input2, `<span class="highlight">${translateWords[combo2]}</span>`);
              translated[i] = true;
              translated[i + 1] = true;
              updated = true;
            } else {
              
              if (translateWords[word1]) { 
                output = output.replace(input1, `<span class="highlight">${translateWords[word1]}</span>`);
                translated[i] = true;
                updated = true;
              } else if (translateSpellings[word1]) {
                output = output.replace(input1,`<span class="highlight">${translateSpellings[word1]}</span>`);
                translated[i] = true;
                updated = true;
              }
            }
          }
        } else {
          if (translateWords[word1]) {
            output = output.replace(input1,`<span class="highlight">${translateWords[word1]}</span>`);
            translated[i] = true;
            updated = true;
          } else if (translateSpellings[word1]) {
            output = output.replace(input1,`<span class="highlight">${translateSpellings[word1]}</span>`);
            translated[i] = true;
            updated = true;
          }
        }
      }
    }

    // translate titles
    for (const [key, value] of Object.entries(translateTitles)) {
      let pattern = key.split("");
      pattern = "\\b[" + pattern.join("][") + "](?=\\s)";
      let titleRegex = new RegExp(pattern, "i");
      //console.log(titleRegex);
      if (output.match(titleRegex)) {
        output = output.replace(titleRegex, `<span class="highlight">${value}</span>`);
        updated = true;
      }
    }

    // translate time
    if (output.match(timeRegex)) {
      output = output.replace(timeRegex, timeOutput);
      updated = true;
    }
    
    
    if (updated) {
      return output;
    } else {
      return "Everything looks good to me!";
    }
  }
  
}

module.exports = Translator;