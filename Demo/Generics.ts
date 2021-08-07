function join(a:string|number, b:string|number){
    return `${a} ${b}`
}

const result = join('hello', 'world');
const result2 = join(12, 14)
const result3 = join('hello', 2)
// console.log(result)
// console.log(result2)
// console.log(result3)

function invite<jan>(a:jan, b:jan){
    return a;
}

const hello = invite<number>(1,2);
console.log(hello)


// 泛型array類型
function arrayItem<ANY>(a:ANY[]){
    return a
}

const arrResult = arrayItem<number>([1]);

console.log(arrResult, 'arrResult')