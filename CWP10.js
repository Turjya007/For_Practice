var a=5;
for(let i=0; i<5; i++)
{
    for(let j=0; j<5; j++)
    {
        process.stdout.write("*");
    }
    console.log();
}

for(let i=0;i<5;i++)
{
    for(let j=0; j<=i; j++)
    {
        process.stdout.write('*')
    }
    console.log();
}

for(let i=0; i<=a; i++)
{
    for(let j=a-1; j>=i; j--)
    {
        process.stdout.write(' ');
    }

    for(let k=1; k<=i; k++)
    {
        process.stdout.write("*");
    }

    console.log();
}

for(let i=0; i<=5; i++)
{
    for(let j=5; j>i; j--)
    {
        process.stdout.write("*");
    }
    console.log();
}



