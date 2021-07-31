class player {
    name: string
    age: number
    private brakes: string
    constructor(name:string, age:number, brakes:string){
        this.name = name,
        this.age = age
        this.brakes = brakes
    }
    say():void{
        console.log('hello', 'jan')
    }
}

const jan:player = new player('jan', 23, '123')
console.log(jan , 'jan2')
jan.say()

class NewPlayer extends player{
    say():void{ 
        return super.say() //繼承父組件
    }
}

const bill:NewPlayer = new NewPlayer('bill', 18, '123');
console.log(bill)
bill.say()


// 基本的class 操作
class callMyName {
    public name:string;
    constructor(name:string){
        this.name = name
    }
    sayLoveMe(){
        console.log('說愛我')
    }
}

const david:callMyName = new callMyName('jan');
david.name = 'jan'
david.sayLoveMe()

// 繼承
class SheSayLoveMe extends callMyName{
    sayLove(){
        console.log(this.name)
    }
}
const aGirl:SheSayLoveMe = new SheSayLoveMe('vianna');
aGirl.sayLove();

// 測試新寫法
class newMethod{
    constructor(public name:string){

    }
}
const test = new newMethod('jan');

console.log(test.name, 'test')

// 測試寫法的父子傳遞
class Son extends newMethod{
    constructor(public age:number){
        super('bill') //繼承父組建的name
    }
}
const eric = new Son(18);
console.log(eric.name, eric.age, 'eric')

// get set 增加存取的安全性

let password = 'iloveyoubabe';
class passwordCheck {
    private _password:string;
    get getPass():string{
        return this._password
    }
    set getPass(password:string){
        if(password&&password === 'iloveyoubabe'){
            this._password = password;
        }else {
            console.log('外人勿入')
        }
    }
}

const passChecker:passwordCheck = new passwordCheck();
passChecker.getPass = 'jan';
if (passChecker.getPass) {
    console.log(passChecker.getPass); //Una Lin
}

// 基本的class
// 寫法一
class Person {
    name:string;
    age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age
    }
}

// const amy:Person = new Person('amy', 18);
// console.log(amy.age)


// 寫法二
class Person {
    // name:string;
    // age:number;
    constructor(public name:string,public age:number){
        // this.name = name;
        // this.age = age
    }
}

const amy:Person = new Person('amy', 18);
console.log(amy)

// 父子傳遞
class MySon {
    name:string;
    age:number; 
    girlFriend:boolean;
    constructor(name:string, age:number, girlFriend:boolean){
        this.name = name;
        this.age = age;
        this.girlFriend = girlFriend
    }
    say(){
        console.log('我是你兒子')
    }
}

const allen:MySon = new MySon('Allen', 23, true);
console.log(allen, 'allen')
allen.say()

class MyFather extends MySon{
    say(){
        super.say()
    }
}

const kobe:MyFather = new MyFather('blackmamba', 45, true)
console.log(kobe, 'kobe')
kobe.say()

// get set

let dogName = 'tuotuo';
class tuotuo{
    private name: string;
    constructor(name:string){
        this.name = name;
    }
    get getName():string{
        return this.name;
    }
    set getName(newName:string){
        if(dogName && dogName === 'tuotuo'){
            this.name = newName
        }else {
            console.log('搞錯人摟')
        }
    }
}

const dog:tuotuo = new tuotuo('tuo');
dog.getName = dogName