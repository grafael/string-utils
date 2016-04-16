'use strict';

const expect = require('chai').expect;
const sutils = require('../lib/string-utils');

describe('Testing words:', () => {

    it('Empty String', () => {
        expect(sutils.words('')).to.deep.equal([]);
    });

    it('Null String', () => {
        expect(sutils.words(null)).to.deep.equal([]);
    });

    it('Undefined String', () => {
        expect(sutils.words(undefined)).to.deep.equal([]);
    });

    it('Single word', () => {
        expect(sutils.words('single')).to.deep.equal(['single']);
    });

    it('Single word with trailling space', () => {
        expect(sutils.words('  single ')).to.deep.equal(['single']);
    });
});

describe('Testing chars:', () => {

    it('Empty String', () => {
        expect(sutils.chars('')).to.deep.equal([]);
    });

    it('Null String', () => {
        expect(sutils.chars(null)).to.deep.equal([]);
    });

    it('Undefined String', () => {
        expect(sutils.chars(undefined)).to.deep.equal([]);
    });

    it('Single word', () => {
        expect(sutils.chars('single')).to.deep.equal(['s','i','n','g','l','e']);
    });

    it('Single word with trailling space', () => {
        expect(sutils.chars('  single ')).to.deep.equal([' ',' ','s','i','n','g','l','e', ' ']);
    });
});

describe('Testing replaceAll:', () => {

    let string = 'aaaba';
    
    it('Simple replacement', () => {
        expect(sutils.replaceAll(string, 'b', 'x')).to.equal('aaaxa');
    });

    it('Replace by null', () => {
        expect(sutils.replaceAll(string, 'b', null)).to.equal('aaaa');
    });

    it('Replace by undefined', () => {
        expect(sutils.replaceAll(string, 'b', undefined)).to.equal('aaaa');
    });

    it('Replace by empty string', () => {
        expect(sutils.replaceAll(string, 'b', '')).to.equal('aaaa');
    });
    
});

describe('Testing removeAll:', () => {
    let string = ' ababa ababa \n\r';
    
    it('Simple remove', () => {
        expect(sutils.removeAll(string, 'b')).to.equal(' aaa aaa \n\r');
    });

    it('Remove white spaces', () => {
        expect(sutils.removeAll(string, ' ')).to.equal('ababaababa\n\r');
    });

    it('Remove \\n', () => {
        expect(sutils.removeAll(string, '\n')).to.equal(' ababa ababa \r');
    });

    it('Remove \\r', () => {
        expect(sutils.removeAll(string, '\r')).to.equal(' ababa ababa \n');
    });

    it('Remove from empty string', () => {
       expect(sutils.removeAll('', 'b')).to.equal('');
    });

});

describe('Test isEmpty:', () => {
    
    it('Empty string', () => {
        expect(sutils.isEmpty('')).to.equal(true);
    }); 

    it('String null', () => {
        expect(sutils.isEmpty(null)).to.equal(true);
    });

    it('String undefined', () => {
        expect(sutils.isEmpty(undefined)).to.equal(true);
    });

    it('String not empty', () => {
        expect(sutils.isEmpty('a')).to.equal(false);
    });

});

describe('Test contains:', () => {

    let string = ' ababa ababa ';

    it('Simple contains', () => {
        expect(sutils.contains(string, 'baba')).to.equal(true);
    });

    it('Simple not contains', () => {
        expect(sutils.contains(string, 'c')).to.equal(false);
    });

    it('String contains white space', () => {
        expect(sutils.contains(string, ' ')).to.equal(true);
    });

    it('String contains null', () => {
        expect(sutils.contains(string, null)).to.equal(false);
    });

    it('String contains undefined', () => {
        expect(sutils.contains(string, undefined)).to.equal(false);
    });

    it('String contains empty string', () => {
        expect(sutils.contains(string, '')).to.equal(true);
    });
});

describe('Test distance (Levenshtein distance):', () => {

    let stringA = 'lorem ipsum dolor sit amet';
    let stringB = 'lorem ipsum';

    it('Simple distance (A,B)', () => {
        expect(sutils.distance(stringA, stringB)).to.equal(15);
    });

    it('Simple distance (B,A)', () => {
        expect(sutils.distance(stringB, stringA)).to.equal(15);
    });

    it('Distance from empty string', () => {
        expect(sutils.distance(stringA, '')).to.equal(26);
    });

    it('Distance from null', () => {
        expect(sutils.distance(stringA, null)).to.equal(26);
    });

    it('Distance from undefined', () => {
        expect(sutils.distance(stringA, undefined)).to.equal(26);
    });

    it('Distance from both null', () => {
        expect(sutils.distance(null, null)).to.equal(0);
    });
    
});

describe('Test reverseString:', () => {

    let string = 'lorem ipsum dolor ';
    let reversed = ' rolod muspi merol';

    it('Simple reverse', () => {
        expect(sutils.reverseString(string)).to.equal(reversed);
    });

    it('Reverse empty string', () => {
        expect(sutils.reverseString('')).to.equal('');
    });

    it('Reverse null string', () => {
        expect(sutils.reverseString(null)).to.equal(null);
    });

    it('Reverse undefined string', () => {
        expect(sutils.reverseString(undefined)).to.equal(undefined);
    });
});

describe('Test unique words:', () => {
    
    let string = 'aba aba bba bba bba aaa  ';

    it('Simple unique words', () => {
        expect(sutils.uniqueWords(string)).to.deep.equal(['aba', 'bba', 'aaa']);
    });

    it('Simple words from empty string', () => {
        expect(sutils.uniqueWords('')).to.deep.equal([]);
    });

    it('Simple words from null string', () => {
        expect(sutils.uniqueWords(null)).to.deep.equal([]);
    });

    it('Simple words from undefined string', () => {
        expect(sutils.uniqueWords(undefined)).to.deep.equal([]);
    });

    it('Simple words from only white spaces', () => {
        expect(sutils.uniqueWords('       ')).to.deep.equal([]);
    });

});

describe('Test unique chars:', () => {
    
    let string = 'aba aba ';

    //Space is not counted
    it('Simple unique chars', () => {
        expect(sutils.uniqueChars(string)).to.deep.equal(['a', 'b', ' ']);
    });

    it('Simple chars from empty string', () => {
        expect(sutils.uniqueChars('')).to.deep.equal([]);
    });

    it('Simple chars from null string', () => {
        expect(sutils.uniqueChars(null)).to.deep.equal([]);
    });

    it('Simple chars from undefined string', () => {
        expect(sutils.uniqueChars(undefined)).to.deep.equal([]);
    });

    it('Simple chars from only white spaces', () => {
        expect(sutils.uniqueChars('       ')).to.deep.equal([' ']);
    });

});

describe('Test count words', () => {
    
    let string = 'lorem ipsum dolor ';

    it('Simple count', () => {
        expect(sutils.countWords(string)).to.equal(3);
    });

    it('Count empty string', () => {
        expect(sutils.countWords('')).to.equal(0);
    });

    it('Count null string', () => {
        expect(sutils.countWords(null)).to.equal(0);
    });

    it('Count undefined string', () => {
        expect(sutils.countWords(undefined)).to.equal(0);
    });

    it('Count string with only spaces', () => {
        expect(sutils.countWords('     ')).to.equal(0);
    });

});

describe('Test count chars', () => {
    
    let string = 'lorem ipsum dolor ';

    it('Simple count', () => {
        expect(sutils.countChars(string)).to.equal(18);
    });

    it('Count empty string', () => {
        expect(sutils.countChars('')).to.equal(0);
    });

    it('Count null string', () => {
        expect(sutils.countChars(null)).to.equal(0);
    });

    it('Count undefined string', () => {
        expect(sutils.countChars(undefined)).to.equal(0);
    });

    it('Count string with only spaces', () => {
        expect(sutils.countChars('     ')).to.equal(5);
    });

});