let name = 'Omar'
let age = 36

obj = { name: name, age: age}
objES6 = {name, age}

console.log(obj)
console.log(objES6)

/* Arrow functions */
const names = [
    {name: 'Omar', age: 36},
    {name: 'Piscine', age: 8}
]

let listOfNames = names.map(function(item){
    console.log(item.name)
})

let listOfNamesES6 = names.map(item => {
    console.log(item.name)
})

/* Promise */
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!')
        } else {
            reject('Ups!!')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hello'))
    .catch(error => console.log(error))