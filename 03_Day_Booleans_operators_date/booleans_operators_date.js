const time = new Date()
const year = time.getFullYear()
const month = time.getMonth() + 1
const todayDate = time.getDate()
const dayNum = time.getDay()
const hour = time.getHours()
const minute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
const secsElapsed = time.getTime()
console.log(time, year, month, todayDate, dayNum, hour, minute, secsElapsed)

let name = 'Milo'
if (name.length >= 7){
    console.log('Your name is long')
}
else{
    console.log('Your name is short')
}

let firstname = 'Milo'
let lastname = 'Ayala'

if (firstname.length > lastname.length){
    console.log(`Your first name ${firstname} is shorter than your family name ${lastname}`)

}
else{
     console.log(`Your first name ${firstname} is longer than your family name ${lastname}`)
}

let myAge = 250
let yourAge = 22
console.log(`I am ${myAge - yourAge} years older than you.`)

const day = time.getDate()
console.log(`${year}-${month}-${day} ${hour}:${minute}`)
console.log(`${day}-${month}-${year} ${hour}:${minute}`)
console.log(`${day}/${month}/${year} ${hour}:${minute}`)