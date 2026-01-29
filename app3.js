//fizz buzz

function fizbuz(arr)
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]%2==0 && arr[i]%3==0)
        {
            console.log(`${arr[i]} is a fizz-buzz value`);
        }

        else if(arr[i]%2==0)
        {
            console.log(`${arr[i]} is a fizz value`);
        }

        else if(arr[i]%3==0)
        {
            console.log(`${arr[i]} is a buzz value`);
        }

        else{console.log(arr[i]);}
    }
}

fizbuz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);