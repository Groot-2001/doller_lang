
import { tokenize } from '../src/lexer/tokenize';

describe(tokenize,()=>{
    it("should return an array",()=>{
        expect(Array.isArray(tokenize(''))).toBe(true);
    });
});