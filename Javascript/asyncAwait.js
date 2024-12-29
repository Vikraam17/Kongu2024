async function funName() {
  setTimeout(()=>{
    console.log("Hello");
  },1000);
  return await 'Hello';
}

arrowFunName1 = async()=>{
  setTimeout(()=>{
    console.log("KEC");
  },1000);
  return await 'KEC';
}

funName().then((data)=>{
  console.log(data);
});
console.log(arrowFunName1())

// async function funName() {
//   // console.log("Hello")
//   setTimeout(()=>{
//     console.log('Hello');
//   },2000);
//   console.log(await 'Hello');
// }

// arrowFunName1 = async()=>{
//   // console.log("KEC");
//   setTimeout(()=>{
//     console.log('KEC')
//   },1000);
//   console.log(await 'KEC');
// }
// // var fun = funName();
// // var arrFun = arrowFunName1();

// funName();
// arrowFunName1();