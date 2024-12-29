// array = [10,20,30];
// array.forEach((element,index)=>{
//   console.log(index,element);
// })

arr2 = {
  "firstName":"jai",
  "lastName":"kumar",
  "age":24
};
console.log(arr2);

// arr2.forEach(()=>{
//   console.log(key,value);
// })

Object.entries(arr2).forEach(([key,value]) => {
  console.log(value);
});

Object.keys(arr2).forEach(key => {
  console.log(key);
});

Object.values(arr2).forEach(value => {
  console.log(value);
});

for(let elem in arr2){
  console.log(elem)
}