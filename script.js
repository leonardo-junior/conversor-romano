const decToRoman = document.querySelector('.dTr');
const botDecToRoman = document.querySelector('.botDTR');
const resultRoman = document.querySelector('.resultRom');
const romanToDecimal = document.querySelector('.rTd');
const botRomanToDec = document.querySelector('.botRTD');
const resultDec = document.querySelector('.resultDec');

botDecToRoman.onclick = function () {
    debugger;
    let num = Number(decToRoman.value);
    let resp = '';
    while (num > 0) {
        if (num <= 3999 && num >= 1000) {
            num -= 1000;
            resp += 'M';
        } else if (num <= 999 && num >= 900) {
            num -= 900;
            resp += 'CM';
        } else if (num <= 899 && num >= 500) {
            num -= 500;
            resp += 'D';
        } else if (num <= 499 && num >= 400) {
            num -= 400;
            resp += 'CD';
        } else if (num <= 399 && num >= 100) {
            num -= 100;
            resp += 'C';
        } else if (num <= 99 && num >= 90) {
            num -= 90;
            resp += 'XC';
        } else if (num <= 89 && num >= 50) {
            num -= 50;
            resp += 'L';
        } else if (num <= 49 && num >= 40) {
            num -= 40;
            resp += 'XL';
        } else if (num <= 39 && num >= 10) {
            num -= 10;
            resp += 'X';
        } else if (num == 9) {
            num -= 9;
            resp += 'IX';
        } else if (num < 9 && num >= 5) {
            num -= 5;
            resp += 'V';
        } else if (num == 4) {
            num -= 4;
            resp += 'IV';
        } else if (num < 3 || num > 0) {
            num -= 1;
            resp += 'I';
        }

    } resultRoman.innerHTML = resp;
};
botRomanToDec.onclick = function () {
    let romanToDec = romanToDecimal.value.toUpperCase();
    let decimalFinal = 0;
    let numCount = '';
    for (let count = 0; count < romanToDec.length; count++) {
        // let currentLetter = romanToDec[count];
        // let nextLetter = romanToDec[count + 1];
        if (romanToDec[count] == "I") {
            numCount = romanToDec[count] + romanToDec[count + 1];
            if (numCount == "IV") {
                decimalFinal -= 1;
            } else if (numCount == "IX") {
                decimalFinal -= 1;
            } else {
                decimalFinal += 1;
            }

        } else if (romanToDec[count] == "V") {
            decimalFinal += 5;

        } else if (romanToDec[count] == "X") {
            numCount = romanToDec[count] + romanToDec[count + 1];
            if (numCount == "XL") {
                decimalFinal -= 10;
            } else if (numCount == "XC") {
                decimalFinal -= 10;
            } else {
                decimalFinal += 10;
            }
        } else if (romanToDec[count] == "L") {
            decimalFinal += 50;

        } else if (romanToDec[count] == "C") {
            numCount = romanToDec[count] + romanToDec[count + 1];
            if (numCount == "CD") {
                decimalFinal -= 100;
            } else if (numCount == "CM") {
                decimalFinal -= 100;
            } else {
                decimalFinal += 100;
            }
        } else if (romanToDec[count] == "D") {
            decimalFinal += 500;

        } else if (romanToDec[count] == "M") {
            decimalFinal += 1000;
        }
    }
    resultDec.innerHTML = decimalFinal;
};