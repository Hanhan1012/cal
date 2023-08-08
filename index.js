
let operator = '';
let value1 = '';
let value2 = '';
document.addEventListener("DOMContentLoaded", function(){
    let input=document.querySelector(".input");
    let output= document.querySelector(".output");
    let clear = document.querySelector("#clear-btn");
    let decimal = document.querySelector(".decimal");
    let oper = document.querySelectorAll(".operator");
    let equal= document.querySelector(".equal");
    let nums=document.querySelectorAll(".nums");

    nums.forEach((nums) => nums.addEventListener("click", function(e){
        Numbers(e.target.textContent)
        output.textContent = value2;
    }))

    oper.forEach((op) => op.addEventListener("click", function(e){
        hoperator(e.target.textContent)
        input.textContent = value1 + " " + operator;
        output.textContent = value2;
    }))

    clear.addEventListener('click', function(){        value1 = '';
    
        value1 = '';
        value2 = '';
        operator = '';
        input.textContent = value2;
        output.textContent = value2;
    })
    

    equal.addEventListener("click", function(){
        if(value2 != '' && value1 != ''){
            calculate()
            input.textContent = '';
            if(value1.length <= 5){
                output.textContent = value1;
            } else{
                output.textContent = value1.slice(0,5) ;
            }
        }
    })

    decimal.addEventListener("click", function(){
        addDecimal();
    })
})

function Numbers(num){
    if(value2.length <= 5){
        value2 += num; 
    }
}

function hoperator(op){
    operator = op;
    value1 = value2;
    value2 = '';
}

function calculate(){
       value1 = Number(value1);
       value2 = Number(value2);

    if(operator === "+"){
        value1 +=value2;
    } else if(operator === "-"){
        value1 -= value2;
    } else if(operator === "x"){
        value1 *= value2;
    } else{
        value1 /= value2;
    }

    value1 = roundNumber(value1);
   value1 = value1.toString();
    value2 = value2.toString();
}

function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}

function addDecimal(){
    if(!value2.includes(".")){
        value2 += '.';
    }
}
