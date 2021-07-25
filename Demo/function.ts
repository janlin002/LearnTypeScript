// javascript
const count = (num1, num2) =>{
    return num1 + num2;
}

const result = count(1,2)
console.log(result) // 3

// typescript
function count(num1:number, num2:number):number{
    return num1+num2
}

const result:number = count(1,2)
console.log(result, '1')

// arrow function

const count:(num1:number, num2:number)=>number = (num1:number, num2:number):number=>{
    return num1+num2
}
const result = count(2,3)
console.log(result)

// 函式表示式
let count:(num1:number, num2:number)=>number = function(num1:number, num2:number):number{
    return num1+num2;
}
const result:number = count(1,2)
console.log(result)