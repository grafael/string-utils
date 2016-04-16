'use strict';

const expect = require('chai').expect;
const sutils = require('../lib/string-utils');

describe('Testing words', () => {
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

describe('Testing chars', () => {
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
        expect(sutils.chars('  single ')).to.deep.equal(['s','i','n','g','l','e']);
    });
});

describe('Testing replaceAll', () => {

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

describe('Testing removeAll', () => {
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

});