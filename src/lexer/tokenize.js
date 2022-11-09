const {
    isLetter,
    isWhitespace,
    isNumber,
    isParenthesis,
    isQuote
} = require('./identify');

const tokenize = () =>{
    //the token array to keep track of it 
    const token = [];
    //cursor will point the current position in input string
    let cursor = 0;
};

module.exports = {tokenize};