const morseCode = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  " ": "&nbsp;",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----."
};

const getMorseFromInput = () => {
  const inputText = document.getElementById("myText").value;
  const textArray = inputText.toLowerCase().split("");
  const convertArray = textArray.map(getMorseFromArray);
  document.getElementById("myMorse").value = convertArray.join(" ");
};

const getMorseFromArray = arrayInput => morseCode[arrayInput];

const getTextFromInput = () => {
  const inputMorse = doocument.getElementById("myMorse").value;
  const morseArray = inputMorse.split("");
  const convertArray = morseArray.map(getTextFromArray);
  document.getElementById("myText").value = convertArray.join(" ");
};

const getTextFromArray = morseLetter => {
  const propertyName = Object.keys(morseCode);
  return propertyName.find(key => morseCode[key] === morseLetter);
};

console.log(getTextFromArray("... --. .-"));
