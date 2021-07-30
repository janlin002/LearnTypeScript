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

interface inviteGirl {
    (totalName:string, inviteName:string):boolean
}

let party:inviteGirl;

party = function(totalName:string, inviteName:string):boolean{
    let check = totalName.search(inviteName)
    return (check != -1)
}

console.log(party('amy, mary, lisa', 'mary'))

//練習
interface rule {
    name: string, 
    age: number,
    year: number
}

const jober = {
    name: 'jan',
    age:28,
    year: 3
}

const ruleCheck = (jober:rule) =>{
    jober.age<30 && jober.year > 2 && console.log(jober.name + '通過考核');
    jober.age>30 || jober.year < 2 && console.log(jober.name + '失去資格')
}

ruleCheck(jober)

//練習2
interface teacher {
    say():string;
}

const teacherSay:teacher = {
    say(){
        return '老師說話都沒在聽'
    }
}

console.log(teacherSay.say())


// teacherSay.say('老師說話都沒在聽');

// 練習 3
interface girl {
    name: string;
    age: number;
    tall: number;
    boyFriend: boolean;
  }
  
  const vianna: girl = {
    name: 'vianna',
    age: 18,
    tall: 165,
    boyFriend: false,
  };
  
  console.log(vianna.name);
  console.log(vianna.age);
  console.log(vianna.tall);
  console.log(vianna.boyFriend);