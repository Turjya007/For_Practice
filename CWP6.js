function anyArrows(arrows){
    for(let i=0; i<arrows.length; i++)
    {
        let a= arrows[i];
        if(!a.damaged)
        {
            return true
        }
    }

    return false
}

console.log(anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}]));