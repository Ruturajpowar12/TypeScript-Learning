//string
const name:string = "Ruturaj Powar"
let city: string = "Kolhapur"

//Number
const num : number = 1233;
const age: number = 22

//Boolean
let  isLogin : boolean = false
let isAdmin : boolean = true

//Array
const names : string[] = ["ruturaj","piyush","swarup"]
const rollNo : number[] = [101,201,34]

//any
let data: any = 10

data = "hello"
data =24

//Unknown   
//  //Accepts any value, but requires checking before using it as a specific type.
let value : unknown = "hello"

if(typeof value === "string"){
    console.log(value.toUpperCase());
    
}


//void
function greet(): void{
    console.log("hello void");
    
}

//Null and Undefined

let nullValue : null = null
let undefinedValue : undefined = undefined