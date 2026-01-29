function summer(a)
{
    var b=0;

    if(a.length==0)
    {
        return 0;
    }

    else{
        for(let i=0; i<a.length; i++)
        {
            b=b+a[i];
        }

        return b;
    }
}

console.log(summer([1,2,4,6]));
