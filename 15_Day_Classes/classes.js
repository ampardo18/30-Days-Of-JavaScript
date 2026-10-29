//Day 15: Classes

class Animal{
    constructor(name, age, color, legs){
        this.name = name
        this.age = age,
        this.color = color,
        this.legs = legs
    }

    getFullAnimalInfo(){
        return `My name is ${this.name} and I am ${this.age} year(s) old who has ${this.legs} legs and is colored ${this.color}`
    }
}

const animal = new Animal('Milo', 2, 'black', 4)
console.log(animal.getFullAnimalInfo())

class Dog extends Animal{
    constructor(name, age, color, legs, gender, breed, size){
        super(name, age, color, legs),
        this.gender = gender,
        this.breed = breed,
        this.size = size
    }

    getFullAnimalInfo(){
        return `My name is ${this.name} and I am ${this.age} year(s) old and is colored ${this.color}. I am a ${this.size} ${this.gender} ${this.breed}.`
    }
}

class Cat extends Animal{
    constructor(name, age, color, legs, gender, breed, size, socialized){
        super(name, age, color, legs),
        this.gender = gender,
        this.breed = breed,
        this.size = size,
        this.socialized = socialized
    }

    getFullAnimalInfo(){
        return `My name is ${this.name} and I am ${this.age} year(s) old and is colored ${this.color}. I am a ${this.size} ${this.gender} ${this.breed} who is ${this.socialized ? 'socialized' : 'not socialized'}`
    }
}

const newDog = new Dog('Milo', 2, 'black', 4, 'male', 'mini daschaund', 'small')
const newCat = new Cat('Milo', 2, 'black', 4, 'male', 'tabby', 'small', true)
console.log(newDog.getFullAnimalInfo())
console.log(newCat.getFullAnimalInfo())

class Statistics{
    constructor(numArr){
        this.numArr = numArr
    }
    
    getCount(){
        return this.numArr.length
    }

    getSum(){
        let sum = 0
        for(let i = 0; i < this.numArr.length; i++){
            sum += this.numArr[i]
        }
        return sum 
    }
    getMin(){
        return this.numArr.toSorted((a, b) => a - b)[0]
    }
    getMax(){
        return this.numArr.toSorted((a, b) => a - b)[this.numArr.length - 1]
    }
    getRange(){
        return this.getMax() - this.getMin()
    }
    getMean(){
        return Math.floor(this.getSum() / this.numArr.length)
    }
    getMedian(){
        let sorted = this.numArr.toSorted((a, b) => a - b)
        let midpoint = Math.floor(this.numArr.length / 2)
        return this.numArr.length % 2 !== 0 ? sorted[midpoint] : (sorted[midpoint - 1] + sorted[midpoint]) / 2
    }
    getMode(){
        const frequencyMap = new Map()
        for (const number of this.numArr){
            frequencyMap.set(number, (frequencyMap.get(number) || 0) + 1)
        }
        const sortedMap = new Map([... frequencyMap.entries()].sort((a,b) => b[1] - a[1]))
        const [key, value] = sortedMap.entries().next().value
        return `(${key}, ${value})`
    }

    describe(){
        return `Count: ${this.getCount()}\nSum: ${this.getSum()}\nMin: ${this.getMin()}\nMax: ${this.getMax()}\nRange: ${this.getRange()}\nMean: ${this.getMean()}\nMedian: ${this.getMedian()}\nMode: ${this.getMode()}`
    }

}
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const stats = new Statistics(ages)
console.log(stats.describe())

class PersonAccount{
    constructor(firstname, lastname, incomes, expenses){
        this.firstname = firstname, 
        this.lastname = lastname,
        this.incomes = incomes,
        this.expenses = expenses
    }
    totalIncome(){
        let sum = 0
        for (const amount of this.incomes.keys()){
            sum += amount
        }
        return sum
    }
    totalExpenses(){
        let sum = 0
        for (const amount of this.expenses.keys()){
            sum += amount
        }
        return sum
    }
    addIncome(amount, description){
        this.incomes.set(amount, description)
    }
    addExpenses(amount, description){
        this.expenses.set(amount, description)
    }
    accountBalance(){
        return this.totalIncome() - this.totalExpenses()
    }

}
const incomes = new Map([[100000, 'SWE'], [2000, 'AI Trainer'], [5000, 'Ceviche vendor']])
const expenses = new Map([[2100, 'Morgage'], [150, 'Electric bill'], [200, 'Internet bill']])
const myAccount = new PersonAccount('Milo', 'Pardo', incomes, expenses)
console.log(myAccount.totalIncome(), myAccount.totalExpenses())
console.log(myAccount.accountBalance())
myAccount.addExpenses(190, 'water bill')
myAccount.addIncome(3400, 'Tamale vendor')
console.log(myAccount.accountBalance())