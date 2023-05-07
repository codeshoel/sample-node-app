// Modules  -   Encapsulated Code (only minimum)
// CommonJs(Node uses commonjs under the hood) -   Every file is module (by default)
const SayHi = require('./5-utils')
const names = require('./4-names')
const data = require('./6-alternavtive-flavor')

require('./7-mind-grinade')

SayHi('Gabriel')
SayHi(names.jane)
SayHi(names.john)




