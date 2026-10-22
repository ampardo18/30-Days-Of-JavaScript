//Day 4: Conditionals

grade = 90
switch (true) {
    case grade >= 90 && grade <= 100:
        console.log('A')
        break
    case grade >= 80 && grade <= 89:
        console.log('B')
        break
    case grade >= 70 && grade <= 79:
        console.log('C')
        break
    case grade >= 60 && grade <= 69:
        console.log('D')
        break
    case grade <= 59:
        console.log('F')
        break
    default:
        console.log('Invalid grade')
}

month = 'May'
autumn = ['September', 'October', 'November']
winter = ['December', 'January', 'February']
spring = ['March', 'April', 'May']
summer = ['June', 'July', 'August']
switch (true) {
    case autumn.includes(month):
        console.log('Fall')
        break
    case winter.includes(month):
        console.log('Winter')
        break
    case spring.includes(month):
        console.log('Spring')
        break
    case summer.includes(month):
        console.log('Summer')
        break
    default:
        console.log('Invalid month')
}
