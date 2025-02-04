const fetchData =new Promise((resolve,reject)=>{
  const api=true;
  if(api){
    resolve("Fetch Data")
  }
  else{
    reject("Error")
  }
})

fetchData.then((msg)=>console.log(msg))
.catch((error)=>console.log(error))

