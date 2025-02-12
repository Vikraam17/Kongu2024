const obj = {
  name:"vikraam",
  lname:"v",
  phn:"9876543210"
}

const Number = [1,2,3,4,5,6]
const square= Number.map(num=>num*num)
console.log(square)

const even = Number.filter(num=>num%2===0)
console.log(even)

const sum = Number.reduce((add,num)=>(add+num),0)
console.log(sum)