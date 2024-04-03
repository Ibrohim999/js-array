let str = prompt('luboy gap yozing')
let array = str.split('')
for (let i = 0; i < array.length; i++) {
    if (array[i]=='a') {
        array.splice(i,1)
    }
    if (array[i]=='i') {
        array.splice(i,1)
    }
    if (array[i]=='o') {
        array.splice(i,1)
    }
    if (array[i]=='u') {
        array.splice(i,1)
    }
    if (array[i]=='e') {
        array.splice(i,1)
    }
}
let string = array.join('')
console.log(string);