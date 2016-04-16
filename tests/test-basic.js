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