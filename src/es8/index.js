const data = {
    frontend: 'Ernesto',
    backend: 'Jaime',
    design: 'Claudia'
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

const values = Object.values(data)
console.log(values)
console.log(values.length)

const string = 'Hello'
console.log(string.padStart(8,'hi '))
console.log(string.padEnd(12,'-_'))