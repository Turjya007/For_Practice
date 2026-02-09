function slope(points)
{
    var a,b,c,d;

    a=points[3]-points[1];
    b=points[2]-points[0];
    c=a%b;
    if(b==0)
    {
        return 'undefined';
    }

    else if(a==0)
    {
        return '0'
    }

    else if(c == 0)
    {
        d=a/b;
        return `${d}`;
    }

    else
    {
        return `${a}/${b}`;
    }
}

console.log(slope([2, 3, 5, 7]));
console.log(slope([4, 2, 4, 9])); 