'use strict';

var assert = require('assert')
  , info = require('./package.json')

describe('comma-first ' + info.version, function() {
  var commaFirst = require('./index')

  var testObj = {
    array: [1, 2, 3, 4, 5]
  , obj: {
      some: 'thing'
    , dark: 'side'
    }
  , num: 20
  }

  it('defaults', function() {

    var out = commaFirst(testObj)
    
    console.log(out)

    assert.equal(out, `{
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
}`)


  })

  // `cut-release` module keeps winning this battle
  //
  // it('package.json format', function() {
  //   var fs = require('fs')
  //   var str = commaFirst(info)
  //   fs.writeFileSync(__dirname + '/package.json', str, 'utf8')
  // })
})
