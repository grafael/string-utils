'use strict';

const REGEX_EMPTY_LINES = /^\s*[\r\n]/gm;

function strings(string) {
    return string.split(' ');
}

function chars(string) {
    return string.split('');
}

function replaceAll(string, search, replacement) {
    return string.split(search).join(replacement);
}

function removeAllEmptyLines(string) {
    return string.replace(REGEX_EMPTY_LINES, '');
}

function removeAll(string, stringToRemove) {
    return replaceAll(string, stringToRemove, '');
}

function uniqueFilter(value, index, self) {
    return self.indexOf(value) === index;
}

function uniqueStrings(string) {
    return strings(string).filter(uniqueFilter);
}

function uniqueChars(string) {
    return strings(string).filter(uniqueFilter);
}

function countWords(string) {
    return strings(string).length;
}

function countChars(string) {
    return chars(string).length;
}

function countUniqueWords(string) {
    return uniqueStrings(string).length;
}

function countUniqueChars(string) {
    return uniqueChars(string).length;
}

function reverseString(string) {
    return string.split('').reverse().join('');
}

function isEmpty(string) {
    return !string;
}

function contains(string, substring) {
    return string.indexOf(substring) > -1;
}

//Levenshtein distance
function distance(s, t) {

    if (s === t) {
        return 0;
    }
    if (s.length === 0){
        return t.length;  
    } 
    if (t.length === 0){
        return s.length;
    }

    var v0 = new Array(t.length + 1);
    var v1 = new Array(t.length + 1);

    for (let i = 0; i < v0.length; i++){
        v0[i] = i;
    }

    for (let i = 0; i < s.length; i++){
        v1[0] = i + 1;

        for (let j = 0; j < t.length; j++){
            let cost = (s[i] === t[j]) ? 0 : 1;
            v1[j + 1] = Math.min.apply(null, [v1[j] + 1, v0[j + 1] + 1, v0[j] + cost]);
        }

        for (let j = 0; j < v0.length; j++){
            v0[j] = v1[j];
        }
    }

    return v1[t.length];
}


module.exports = {
    strings: strings,
    chars: chars,
    isEmpty: isEmpty,
    contains: contains,
    distance: distance,
    reverseString: reverseString,
    replaceAll: replaceAll,
    removeAll: removeAll,
    removeAllEmptyLines: removeAllEmptyLines,
    uniqueStrings: uniqueStrings,
    countWords: countWords,
    countChars: countChars,
    countUniqueWords: countUniqueWords,
    countUniqueChars: countUniqueChars
};