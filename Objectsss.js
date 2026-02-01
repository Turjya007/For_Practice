function maker(color,brand,stock)
{
    return{
        c:color,
        b:brand,
        s:stock,
        ss:()=>{
            console.log(`Say Hello Dude`);
        }
    }
}
console.log(maker("Red","Lambo",12));
console.log(maker("Green","Jesko",10));
console.log(maker("Purple","Chevy",9));

//constructor function

class creator {
    constructor(breed, colour, names) {
        this.breed = breed;
        this.colour = colour;
        this.names = names;
        this.feature = () => {
            console.log('This is barking'); 0;
        };
    }
}

let animal= new creator('Jerfy','Brown','Sheperd');

console.log(animal);