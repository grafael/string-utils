# String utils

Utilities to handle strings.

### Version
1.0.1
### Installation

Use npm to install:

```sh
$ npm install -g string_utils
```
### Example
First import string_utils with require:
```javascript
const sutils = require('string_utils');
```
Getting array of words from string.
```javascript
sutils.words('lorem ipsum dolor');
//['lorem', 'ipsum', 'dolor']
```
Getting array of unique words from string.
```javascript
sutils.uniqueWords('lorem lorem ipsum');
//['lorem', 'ipsum']
```
Count words from string.
```javascript
sutils.countWords('lorem ipsum dolor');
//3
```
Getting array of characters from string.
```javascript
sutils.chars('lorem ipsum');
//['l','o','r','e','m',' ','i','p','s','u','m']
```
Getting array of unique chars from string.
```javascript
sutils.uniqueChars('lorem lorem ipsum');
//['l','o','r','e','m',' ','i','p','s','u']
```
Count chars from string.
```javascript
sutils.countChars('lorem ipsum');
//11
```

Check if the string is empty.
```javascript
sutils.isEmpty('lorem ipsum');
//false

sutils.isEmpty('');
//true

sutils.isEmpty(null);
//true
```
Check if string contains substring.
```javascript
sutils.contains('lorem ipsum dolor', 'lorem');
//true
```
Reverse string.
```javascript
sutils.reverse('lorem');
//merol
```
Replace all ocurrences of particular string.
```javascript
sutils.replaceAll('lorem lorem ipsum', 'lorem', 'ipsum');
//'ipsum ipsum ipsum'
```
Remove all ocurrences of particular string.
```javascript
sutils.removeAll('lorem lorem ipsum', 'lorem');
//'ipsum'
```
Distance between two strings using (Levenshtein distance) .
```javascript
let stringA = 'lorem ipsum dolor sit amet';
let stringB = 'lorem ipsum';

sutils.distance(stringA, stringB);
//15
```

License
----

MIT

**its Free Yeah!**