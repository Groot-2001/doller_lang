const {
    isLetter,
    isWhitespace,
    isNumber,
    isParenthesis,
    isQuote
} = require('./identify');

const tokenize = (input) =>{
    //the token array to keep track of it 
    const token = [];
    //cursor will point the current position in input string
    let cursor = 0;
    //loop
    while(cursor < input.length){
        cursor++;
    }
    return token;
};

module.exports = {tokenize};