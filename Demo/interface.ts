interface IPerson {
    name:string;
    age:number;
}

const jan:IPerson = {
    name: 'jan',
    age:18
}

console.log(jan) // { name: 'jan', age: 18 }

// 定義的變數比介面少了一些屬性是不允許的
// 多一些屬性也是不允許的

// 可選屬性

interface IPlayer{
    player1: string;
    player2: string;
    player3?: string;
}

const nbaTeam:IPlayer = {
    player1: 'james',
    player2: 'curry'
}
console.log(nbaTeam) // { player1: 'james', player2: 'curry' }