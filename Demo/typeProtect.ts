interface Fire{
    killPeople :boolean,
    say():void;
}
interface Water{
    killPeople :boolean,
    skill():void
}

// function superman(animal:Fire| Water){
//     animal.say()
// }

function superWoman(aniaml:Fire|Water){
    if(aniaml.killPeople){
        (aniaml as Fire).say()
    }else {
        (aniaml as Water).skill()
    }
}

// in

interface Demo01 {
    have:boolean,
    isHave():void
}

interface Demo02 {
    have:boolean,
    UnHave():void
}

function showDemo(DemoType:Demo01|Demo02){
    if('isHave' in DemoType){
        DemoType.isHave()
    }else {
        DemoType.UnHave()
    }
}

// typeof

function add(first: string | number, second: string | number) {
    return first + second;
}

function add2(first: string | number, second: string | number) {
    if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
    }
    return first + second;
}

// instanceof

class NumberObj {
count: number;
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
}
return 0;
}