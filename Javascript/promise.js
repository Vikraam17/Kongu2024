function timeConsupmtion(t){
  time=999;
  return time <=t;
}

function isValidLocation(loc){
  location = 'Ooty';
  return location == loc;
}

function locationFinder(){
  loc = 'Ooty';
  time = 999;
  return new Promise((locFound,locNotFound)=>{
    setInterval(()=>{
      if(isValidLocation(loc) && timeConsupmtion(time)){
        locFound(" Location Found");
      }
      else{
        locNotFound("Location Not Found");  
      }
    },2000)
  })
}
// console.log(locationFinder());

locationFinder().then((ResolvedMsg)=>{
console.log(ResolvedMsg);
}).catch((rejectedMsg)=>{
console.log(rejectedMsg);
})




// // Location Finders for the Promise object
// // 1. Promise.all(iterable)
// // 2. Promise.allSettled(iterable)
// // 3. Promise
// // 4. Promise.any(iterable)

// function locationFinder(){
//     train =8;
//     return new Promise((resolved,rejected)=>{
//       if(train==8){
//         resolved("Train arraived at the station");
//       }
//       else{
//         rejected("Train not arraived at the station");  
//       }
//     })
// }
// // console.log(locationFinder());

// locationFinder().then((ResolvedMsg)=>{
//   console.log(ResolvedMsg);
// }).catch((rejectedMsg)=>{
//   console.log(rejectedMsg);
// })