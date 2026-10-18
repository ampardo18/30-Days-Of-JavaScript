//Day 2: Data Types

let var_1 = '30 Days Of JavaScript'
console.log(var_1)

console.log(var_1.length)

console.log(var_1.toUpperCase())

console.log(var_1.toLowerCase())

console.log(var_1.substring(3))

console.log(var_1.substring(0,2))

console.log(var_1.includes('Script'))

let arr = var_1.split(' ')
console.log(arr)

let company_string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let company_arr = company_string.split(', ')
console.log(company_arr)

console.log(var_1.replace('JavaScript', 'Python'))

console.log(var_1.charAt(15))

console.log(var_1.charCodeAt(11))

console.log(var_1.indexOf('a'))

console.log(var_1.lastIndexOf('a'))

let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))

console.log(sentence.lastIndexOf('because'))

let new_var = ' 30 Days Of JavaScript '
console.log(new_var.trim())

console.log(var_1.startsWith('30'))

console.log(var_1.endsWith('JavaScript'))

console.log(var_1.match(/a/g))

let part1 = '30 Day of'
console.log(part1.concat('JavaScript'))

console.log(var_1.repeat(2))

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

console.log(typeof parseInt('10') == typeof 10)

console.log(typeof parseFloat('9.8') == typeof 10)

let word1 = 'python',
    word2 = 'jargon'
console.log(word1.includes('on'), word2.includes('on'))

let randomNum1 = Math.random() * 101
console.log(Math.floor(randomNum1))

let randomNum2 = Math.random() * (100 - 50 + 1)  + 50
console.log(Math.floor(randomNum2))

let randomNum3 = Math.random() * 256
console.log(Math.floor(randomNum3))

console.log(`${1} ${1 ** 0 } ${1 ** 1} ${1 ** 2} ${1 ** 3}\n${2} ${2 ** 0 } ${2 ** 1} ${2 ** 2} ${2 ** 3}\n${3} ${3 ** 0 } ${3 ** 1} ${3 ** 2} ${3 ** 3}\n${4} ${4 ** 0 } ${4 ** 1} ${4 ** 2} ${4 ** 3}\n${5} ${5 ** 0 } ${5 ** 1} ${5 ** 2} ${5 ** 3}`)

let new_sen = 'You cannot end a sentence with because because because is a conjunction'
console.log(new_sen.substring(0,31) + new_sen.substring(55))

let love_sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(love_sentence.toLowerCase().split('love').length-1)

console.log(new_sen.match(/\bbecause\b/gi).length)

const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence2.replace(/[%$@#;&!?]/g, ''))

let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let numbers = income.match(/\d+/g)
let [num1, num2, num3] = numbers
console.log(`Total income: ${parseInt(num1) + parseInt(num2) + parseInt(num3)}`)

