
let yourName = prompt(' Welkom! wat is jouw naam?');

alert('Hallo ' + yourName);

let guess = prompt('Voer een nummer in tussen 0 en 25 om te beginnen', '')




function getRandomnum(max) {
    return Math.floor(Math.random() * max);
}

const result = getRandomnum(26);
console.log(result);




while (result != guess) {
    alert('Helaas, niet goed geraden! Wil je het opnieuw proberen?')
    let guess = prompt('Voer een nummer in tussen 0 en 25 om te beginnen', '')
};

