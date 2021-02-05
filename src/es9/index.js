/* Spread Operator */
const obj = {
    name: 'Omar',
    age: 36,
    country: 'MX'
}

let {name, ...all} = obj

console.log(name, all)

/* Porpagation Properties */
const anotherObj = {
    ...obj,
    travel: 'USA'
}

console.log(anotherObj)

/* Promise Finally */
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('Test error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

/* Regex */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('a21kk2017-04-20')
if(match){
    const year = match[1]
    const  month = match[2]
    const day = match[3]

    console.log(day, month, year)
} else {
    console.log('Don\'t match')
}
