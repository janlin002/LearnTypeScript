function join(a:string|number, b:string|number){
    return `${a} ${b}`
}

const result = join('hello', 'world')
console.log(result)