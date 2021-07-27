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
        console.log('hello')
    }
}

const jan:player = new player('jan', 23, '123')
console.log(jan)
jan.say()