
// Identify the letters a to z , A to Z
const LETTER = /[a-zA-Z]/;
// Identify the letters whitespace like space , tabs etc.
const WHITESPACE = /\s+/;
// Identify the Numbers from 0 to 9
const NUMBER = /^[0-9]+$/;
// Identify the operators characters
const OPERATORS = ['+','-','*','/','%'];

// check the pattern of letter in character string
const isLetter = character => LETTER.test(character);
// check the pattern of whitespace in character string
const isWhitespace = character => WHITESPACE.test(character);
// check the pattern of Number in character string
const isNumber = character => NUMBER.test(character);

// check the pattern of character in character string
const isOpeningParenthesis = character => character === '$(';
const isClosingParenthesis = character => character === ')$';

const isParenthesis = character => 
    isOpeningParenthesis(character) || isClosingParenthesis(character);

const isQuote = character => character === '*';

const isOperator = character => OPERATORS.includes(character);

module.exports = {
    isLetter,
    isWhitespace,
    isNumber,
    isOpeningParenthesis,
    isClosingParenthesis,
    isParenthesis,
    isQuote,
    isOperator
}

