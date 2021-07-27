// 構造函數聲明法
let reg1:RegExp = new RegExp('jan')
console.log(reg1)

// 字面量聲明
let reg2:RegExp = /jan/
console.log(reg2)

//test
let reg3:RegExp = /jan/;
let web:string = 'jan lin';
let result:boolean = reg3.test(web);
console.log(result, 'result')

//exec
let reg4:RegExp = /jan/;
let web2:string = 'jan lin';
let final = reg4.exec(web2);
console.log(final ,'final') // [ 'jan', index: 0, input: 'jan lin', groups: undefined ]
