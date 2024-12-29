
async function funName() {
  // console.log("Hello")
  setTimeout(()=>{
    console.log('Hello')
  },2000);
  console.log(await 'Hello');
}

arrowFunName1 = async()=>{
  // console.log("KEC");
  setTimeout(()=>{
    console.log('KEC')
  },1000);
  console.log(await 'KEC');
}
// var fun = funName();
// var arrFun = arrowFunName1();



funName();
arrowFunName1();