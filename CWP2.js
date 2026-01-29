function solution(str, ending){
    var a=str.slice(-ending.length);
    var b=ending

    if(ending.length==0)
    {
        return true;
    }

    else if(a==b)
    {
        return true;
    }

    else{
        return false;
    }
}

console.log(solution('abcde',''));