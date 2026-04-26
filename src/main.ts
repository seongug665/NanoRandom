import "./style/body.css";
import "./style/container.css";
import "./style/heading.css";
import "./style/text.css";
import "./style/group.css";
import "./style/card.css";

const characters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J', 
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T', 
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '@',
    '#',
    '&',
    '*'
];

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);

    const index = array[0] % characters.length;

    card.textContent = characters[index];
})