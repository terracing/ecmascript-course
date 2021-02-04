function newFunction(name, age, country) {
    var name = name || 'Omar'
    var age = age || 36
    var country = country || 'MX'
    console.log(name, age, country)
}

// ES6
function newFunctionES6(name = 'Omar', age = 36, country = 'MX') {
    console.log(name, age, country)
}

newFunction()
newFunctionES6('Piscine','8','MX')

let hello = 'Hello'
let world = 'world'

let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

// ES6
let epicPhraseES6 = `${hello} ${world}`
console.log(epicPhraseES6)