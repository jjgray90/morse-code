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
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  " ": "/"
};

const getMorseFromInput = () => {
  const inputText = document.getElementById("myText").value;
  const textArray = inputText.toLowerCase().split("");
  const convertArray = textArray.map(getMorseFromArray);
  //   const addSpaces = convertArray.replace("#", "&nbsp");
  document.getElementById("myMorse").value = convertArray.join("   ");
};

const getMorseFromArray = arrayInput => {
  return morseCode[arrayInput];
};

const getTextFromInput = () => {
  const inputMorse = document.getElementById("myMorse").value;
  const morseArray = inputMorse.split(" ");
  const convertArray = morseArray.map(getTextFromArray);
  document.getElementById("myText").value = convertArray.join("");
};

const getTextFromArray = morseLetter => {
  const propertyName = Object.keys(morseCode);
  return propertyName.find(key => morseCode[key] === morseLetter);
};

const getAudioFromInput = () => {
  const inputText = document.getElementById("myText").value;
  const textArray = inputText.toLowerCase().split("");
};

const a = new Audio("/assets/audio/a.mp3");
const b = new Audio("/assets/audio/b.mp3");
const c = new Audio("/assets/audio/c.mp3");
const d = new Audio("/assets/audio/d.mp3");
const e = new Audio("/assets/audio/e.mp3");
const f = new Audio("/assets/audio/f.mp3");
const g = new Audio("/assets/audio/g.mp3");
const h = new Audio("/assets/audio/h.mp3");
const i = new Audio("/assets/audio/i.mp3");
const j = new Audio("/assets/audio/j.mp3");
const k = new Audio("/assets/audio/k.mp3");
const l = new Audio("/assets/audio/l.mp3");
const m = new Audio("/assets/audio/m.mp3");
const n = new Audio("/assets/audio/n.mp3");
const o = new Audio("/assets/audio/o.mp3");
const p = new Audio("/assets/audio/p.mp3");
const q = new Audio("/assets/audio/q.mp3");
const r = new Audio("/assets/audio/r.mp3");
const s = new Audio("/assets/audio/s.mp3");
const t = new Audio("/assets/audio/t.mp3");
const u = new Audio("/assets/audio/u.mp3");
const v = new Audio("/assets/audio/v.mp3");
const w = new Audio("/assets/audio/w.mp3");
const x = new Audio("/assets/audio/x.mp3");
const y = new Audio("/assets/audio/y.mp3");
const z = new Audio("/assets/audio/z.mp3");
const zero = new Audio("/assets/audio/0.mp3");
const one = new Audio("/assets/audio/1.mp3");
const two = new Audio("/assets/audio/2.mp3");
const three = new Audio("/assets/audio/3.mp3");
const four = new Audio("/assets/audio/4.mp3");
const five = new Audio("/assets/audio/5.mp3");
const six = new Audio("/assets/audio/6.mp3");
const seven = new Audio("/assets/audio/7.mp3");
const eight = new Audio("/assets/audio/8.mp3");
const nine = new Audio("/assets/audio/9.mp3");


const yes = () => {
  a.play();
  d.play();
  c.play();
  d.play();

}
