function equal(a,b){
    if (a===b) {
        return "this numbers are equals"
    }else{
        return "this numbers is not equals"
    }
}

console.log(equal(10,7))



function temp(c){
    if (typeof c == "number") {
        return (c-32)*5/9
    }else{
        return "false"
    }
}

console.log(temp(70))




function calculator(x,y,operator){
    if (typeof(x)==="number" && typeof(y)==="number") {
        if (operator==="*") {
            return x*y
        }else if (operator==="/") {
            return x/y
        }else if (operator==="+") {
            return x+y
        }else if (operator==="-") {
            return x-y
        } else {
            return "operator is not correct entered"
        }
    }else{
        return "numbers are not correct entered"
    }
}

console.log(calculator(10,5,"*"))