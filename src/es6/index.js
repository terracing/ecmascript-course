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

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" + "Sed cursus id tellus ac sodales. Quisque semper dignissim libero, at varius urna semper eget. Morbi egestas sollicitudin turpis, ac condimentum mauris finibus nec.\n" + "Aliquam nec est mauris. Nullam ante quam, sagittis sit amet diam vel, tincidunt hendrerit nisl. Nullam malesuada dui eu nibh sodales, sit amet mollis sapien tristique. Pellentesque feugiat semper tortor in convallis.'

let loremES6 = `Duis non fringilla nisl. Quisque quis elementum ex. Vivamus interdum libero eget leo dignissim, eu aliquam lorem pharetra. 
Nunc vel arcu nulla. Morbi commodo elementum nunc. Etiam rhoncus metus neque, at suscipit dolor euismod pretium. Ut eleifend metus erat, id viverra nibh porta vitae. 
Aliquam efficitur lobortis magna, quis lacinia turpis venenatis vel. In aliquet, elit sed fringilla convallis, sem felis semper nunc, ac sodales lacus urna non lacus. Suspendisse egestas lorem ac rhoncus eleifend.`

console.log(lorem)
console.log(loremES6)

let person = {
    'name': 'Omar',
    'age': 36,
    'country': 'MX'
}

console.log(person.name, person.age)

let {name,age,country} = person
console.log(name, country)

let team1 = ['Daniel','Jaime','Ernesto','Nestor']
let team2 = ['Elena','Ana','Claudia','Camila']

let education = ['Omar', ...team1, ...team2]
console.log(education)

{
    var globalVar = 'Global Var'
}

{
    let globalLet = 'Global Let'
    console.log(globalLet)
}

console.log(globalVar)

/* let don't work outside of your scope */
console.log(globalLet)
