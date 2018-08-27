let letterArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCaseLetterArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9];
let symbolsArr = ['_', '?', '!', '@', '#', '&', '+', '-', '*'];


export default class PasswordGenerator {
    constructor(length, isLetters, isUpper, isNums, isSymbols) {
        this.length = length;
        this.isLetters=isLetters;
        this.isUpper=isUpper;
        this.isNums=isNums;
        this.isSymbols = isSymbols
    }

    buildVarArr() {
        let varArr = [];
        if (this.isLetters) {varArr = varArr.concat(letterArr)}
        if (this.isUpper) {varArr = varArr.concat(upperCaseLetterArr)}
        if (this.isNums) {varArr = varArr.concat(numbersArr)}
        if (this.isSymbols) {varArr = varArr.concat(symbolsArr)}
        return varArr;
    }

    gen() {
        let arr = this.buildVarArr();
        let psw = [];
        while (psw.length < this.length) {
            let random = this.random(arr.length);
            psw.push(arr[random]);
        }
        return psw.join('');
    };

    random(max) {
        return Math.floor(Math.random() * max)
    }
}