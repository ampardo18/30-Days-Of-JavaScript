//Day 5: Arrays

let arr = []

arr.push('Dog')
arr.push('Cat')
arr.push('Bird')
arr.push('Worm')
arr.push('Snake')
arr.push('Rat')

console.log(arr.length)

console.log(arr[0], arr[Math.floor(arr.length / 2)], arr[arr.length - 1])

let mixedDataTypes = [true, 90, 'Meow', [1, 2, 3, 4], 9.81]
console.log(mixedDataTypes)

let ITCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(ITCompanies, ITCompanies.length)
console.log(ITCompanies[0], ITCompanies[Math.floor(ITCompanies.length / 2)], ITCompanies[ITCompanies.length - 1])

console.log(`${ITCompanies.slice(0,ITCompanies.length - 1).join(', ')}, and ${ITCompanies[ITCompanies.length - 1]} are big IT commpanies`)

const result = []
for (const company of ITCompanies){
    const count = company.toLowerCase().split('o').length - 1
    if (count <= 1){
        result.push(company)
    }
}
console.log(result)

console.log(ITCompanies.sort())

console.log(ITCompanies.reverse())

console.log(ITCompanies.slice(0, 3))

console.log(ITCompanies.slice(-3))

let midpoint = Math.floor(ITCompanies.length / 2)
let first = ITCompanies.slice(0, midpoint)
let second = ITCompanies.slice(midpoint + 1, ITCompanies.length)
console.log(first.concat(second))