const car={
    color: 'red',
    weight: 344,
    shape: 'dynamic'
};

var txt='';

for(let el in car)
{
    txt += el;
}

console.log(txt);
console.log(Object.values(car));



const animal={
    breed : 'cow',
    quantity : 12,
    name : 'dairy',
    benefit : 'milk'
}

var upa = " ";
for(el in animal)
{
    upa = upa + el + " ";
}

console.log(upa);
console.log(Object.values(animal));