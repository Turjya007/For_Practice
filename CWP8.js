function combat(health, damage) {
  let newh = health-damage;
  if(newh<0)
  {
    return 0
  }

  else{
    return newh;
  }
}

console.log(combat(100,40));