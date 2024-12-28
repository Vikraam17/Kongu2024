submitForm("Form Submitted Sucessfully",dataBaseSharing);

function dataBaseSharing(){
  console.log("Data Store Successfully");
}

function submitForm(formMsg,dbs){
  setTimeout( ()=>{
  dbs();
  console.log(formMsg);
  },2000)
}


// submitForm("Form Submitted Sucessfully",dataBaseSharing);

// function dataBaseSharing(){
//   console.log("Data Store Successfully");
// }

// function submitForm(formMsg,dbs){
//   dbs();
//   console.log(formMsg);
// }