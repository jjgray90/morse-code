const morseCode =
{
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
    " ": "###",
    0: '-----',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.'
};

const getResultFromInput = () => {
    const inputText = document.getElementById("myText").value;
    const textArray = inputText.toLowerCase().split("");
    const convertArray = textArray.map(getMorseFromArray);
    return document.getElementById("result").innerHTML = convertArray.join(" ");
};

const getMorseFromArray = (arrayInput) => morseCode[arrayInput];