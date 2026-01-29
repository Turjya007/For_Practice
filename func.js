function taker(a)
{
    var b = a % 2;
    return b;
}

function checker(c)
{
    var d = taker(c);

    if(d === 0)
    {
        console.log(c + " Number is jor");
    }

    else{console.log(c + " The number is bijhor");}
} 

checker(9);
checker(10);

