//1
function areBothSame(a, b){
    return (a == b) ? true : false;
}

//2
function areBothEqual(a, b){
    return (a === b) ? true : false;
}

//3
function areAllFourEqual(a, b, c, d){
    return (a === b) ? ((b === c) ? ((c === d) ? true : false) : false) : false;
}


//4
function areAllFourSame(a, b, c, d){
    return (a == b) ? ((b == c) ? ((c == d) ? true : false) : false) : false;
}

//5
function areAllFourSameOrEqual(a, b, c, d){
    if (a == b && b == c && c == d){
        if (a === b && b === c && c === d){
            return "equal";
        }else return "same";
    }else return null;
}

console.log(areAllFourSameOrEqual())
