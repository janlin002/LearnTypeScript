let jan:string = 'jan'
console.log(jan)

let bill:String = new String('bill');
console.log(bill)

let dinner:string = '今天晚餐吃火鍋';
let hotPot:string = '火鍋';

console.log(dinner.indexOf(hotPot)) // 5
console.log(dinner.lastIndexOf(hotPot)) // 5
console.log(dinner.substring(2)) // 晚餐吃火鍋
console.log(dinner.replace('火鍋', '牛排')) // 今天晚餐吃牛排