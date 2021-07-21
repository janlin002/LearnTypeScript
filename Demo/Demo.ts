// 一班參數函式
function pubgGun(gun: string):string{
    return '我撿到了一把'+ gun;
}

let gun:string = '大盤雞'

const result = pubgGun(gun);
console.log(result)

// 可選參數(可自己決定要不要傳參數) ?
function pubg(gun1: string, gun2?: string):string{
    let whatIHave = '我撿到了一把'+gun1;
    if(gun2  !== undefined){
        whatIHave = whatIHave + '和一把'+gun2
    }
    return whatIHave;
}

let gun1 = '大盤雞'
let gun2 = 'M416'
console.log(pubg(gun1))
console.log(pubg(gun1, gun2))

// 預設值 =
function pubgGun(gun: string = 'M16A'):string{
    return '我撿到了一把'+ gun;
}

const result = pubgGun();
console.log(result)