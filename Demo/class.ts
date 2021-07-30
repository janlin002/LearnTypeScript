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
