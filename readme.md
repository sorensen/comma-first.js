comma-first
===========

[![Build Status](https://secure.travis-ci.org/sorensen/comma-first.png)](http://travis-ci.org/sorensen/comma-first) 
[![devDependency Status](https://david-dm.org/sorensen/comma-first.png)](https://david-dm.org/sorensen/comma-first#info=dependencies)
[![NPM version](https://badge.fury.io/js/comma-first.png)](http://badge.fury.io/js/comma-first)

Create a 2-space indented, comma-first JSON string of an object


Install
-------

With [npm](https://npmjs.org)

```
npm install comma-first
```


Usage
-----

```js
var commaFirst = require('comma-first')

var someObject = {
  array: [1, 2, 3, 4, 5]
, obj: {
    some: 'thing'
  , dark: 'side'
  }
, num: 20
}

console.log(commaFirst(someObject))
```

```json
{
  "array": [
    1
  , 2
  , 3
  , 4
  , 5
  ]
, "obj": {
    "some": "thing"
  , "dark": "side"
  }
, "num": 20
}
```


### File rewrite example

```js
var commaFirst = require('comma-first')
  , fs = require('fs')
  , pkg = require('./package.json')

var out = commaFirst(pkg)

fs.writeFileSync(__dirname + '/package.json', out, 'utf8')
```



License
-------

(The MIT License)
