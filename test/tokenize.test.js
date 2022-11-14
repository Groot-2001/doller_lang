const {tokenize} = require('../src/lexer/tokenize');

describe(tokenize,()=>{
    it("should return an array",()=>{
        expect(Array.isArray(tokenize(''))).toBe(true);
    });
    it("should be able to tokenize a pair of $params",()=>{
        const input = '$()$';
        const result = [
            {type :"params", value:'$('},
            {type :"params", value:')$'},
        ];
        expect(tokenize(input)).toEqual(result);
    });
});