function greet (name, owner) {
  let a,b;
  a=name; b=owner;

  if(a==b)
  {
    return 'Hello boss'
  }

  else
  {
    return 'Hello guest';
  }
}

console.log(greet('Turjya', 'Rafi'));
console.log(greet('Turjya', 'Turjya'));