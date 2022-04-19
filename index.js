// 1. Define variables
const adjectives = ["blue", "green", "red", "orange", "yellow"];
const nouns = ["house", "car", "garage", "garden shed", "driveway"];
// Format users backticks format `` to allow string interpolation in the console.log statement in the function.
// Format of string included a1, n1 as adjective 1 and noun 1 respectively.
const scaffoldPhrases = [
  [
    `The person lives in a `, // n1
    `, which is `, // a1
    `. The `, // n1
    ` is near to a `,
    ` `, // a2
    `.`, // n2
  ],
  [
    `The cat lives on top of a `,
    `, which is `,
    `. The `,
    ` is near to a `,
    ` `,
    `.`,
  ],
  [
    `The dog likes to wee on a `,
    `, which is `,
    `. The `,
    ` is near to a `,
    ` `,
    `.`,
  ],
];

// 2. Scaffold out the core functions and helper functions

function generateRandomNumber() {
  const randomAdjectives = [];
  const randomNouns = [];
  const randomPhrase = Math.floor(Math.random() * scaffoldPhrases.length);

  randomAdjectives.push(Math.floor(Math.random() * adjectives.length));
  randomAdjectives.push(Math.floor(Math.random() * adjectives.length));

  randomNouns.push(Math.floor(Math.random() * nouns.length));
  randomNouns.push(Math.floor(Math.random() * nouns.length));

  return { randomAdjectives, randomNouns, randomPhrase };
}

function outputPhrase(strings, adjectives, nouns) {
  let str0 = strings[0];
  let str1 = strings[1];
  let str2 = strings[2];
  let str3 = strings[3];
  let str4 = strings[4];
  let str5 = strings[5];

  return `${str0}${nouns[0]}${str1}${adjectives[0]}${str2}${nouns[0]}${str3}${adjectives[1]}${str4}${nouns[1]}${str5}`;
}

function displayRandomMessage() {
  const selectedElements = generateRandomNumber();
  const phrase = scaffoldPhrases[selectedElements.randomPhrase];

  const selectedAdjectives = [];
  selectedAdjectives.push(adjectives[selectedElements.randomAdjectives[0]]);
  selectedAdjectives.push(adjectives[selectedElements.randomAdjectives[1]]);

  const selectedNouns = [];
  selectedNouns.push(nouns[selectedElements.randomNouns[0]]);
  selectedNouns.push(nouns[selectedElements.randomNouns[1]]);

  console.log(outputPhrase(phrase, selectedAdjectives, selectedNouns));
}

// 3. Execute the program
displayRandomMessage();

// 4. Expansion thoughts
// Could use process.argv to capture input arguments with node to use user input
