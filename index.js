const passBox = document.getElementById("pass")
const passB = document.getElementById("passtwo")
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghigklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*_+~?-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let pass = "";
    let passtwo = "";
    pass += upperCase[Math.floor(Math.random() * upperCase.length)];
    passtwo += upperCase[Math.floor(Math.random() * upperCase.length)];
    pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    passtwo += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    pass += number[Math.floor(Math.random() * number.length)];
    passtwo += number[Math.floor(Math.random() * number.length)];
    pass += symbol[Math.floor(Math.random() * symbol.length)];
    passtwo += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > pass.length) {
        pass += allChars[Math.floor(Math.random() * allChars.length)];
        passtwo += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passBox.value = pass;
    passB.value = passtwo;
}