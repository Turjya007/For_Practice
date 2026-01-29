function mouthSize(animal)
 {
    a=animal.toLowerCase();
    b='alligator';

    if(a==b)
    {
        return 'small';
    }

    else
    {
        return 'wide';
    }
}

console.log(mouthSize('alligator'));
console.log(mouthSize('Puppet'));