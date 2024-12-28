var pi =3.14;
var a=5; // Global scope
console.log(pi);
console.log(a); 
{
  let a=10; // Local Scope
  let b=10;
  console.log(a);
  console.log(b);
}
console.log(a);

// var always global scope
