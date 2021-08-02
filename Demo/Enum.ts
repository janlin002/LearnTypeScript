enum Status {
    MESSAGE,
    SPA,
    THAI
}

function getStatus(status:any){
    switch(status){
        case Status.MESSAGE:
            return 'message'
        case Status.SPA:
            return 'spa'
        case Status.THAI:
            return 'thai'
    }
}

// getStatus(Status.SPA);
// getStatus(1)

// console.log(Status.MESSAGE)
// console.log(Status.SPA)
// console.log(Status.THAI)

// const result = getStatus(Status.SPA);
const result = getStatus(1);

console.log(result)

console.log(`我要去${result}`);