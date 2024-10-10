let num = [5, 8, 2, 9, 3]

console.log(num)
console.log(num.length)
num.push(6)
console.log(num.sort())

for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}

for (i in num) {
    console.log("----")
    console.log(num[i])
}