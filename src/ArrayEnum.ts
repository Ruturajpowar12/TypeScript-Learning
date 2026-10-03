const chaiFlavours: string[] = ["masala","adrak"]
const chaiPrice : number[] = [12,2,0]

const rating:Array<number>=[12,43,5.3]

type Chai ={
    name: string;
    price:number
}

const menu :Chai[] =[
    {name:"masala",price:12},
    {name:"adrak",price:12},
]

// readonly only defined not update and manipulation
const cities : readonly string[]=["kolhapur","solapur"];
// cities.push("pune")  error

const table : number[][] =[
    [ 1,2,3],
    [4,5,6],
    [7.8,9]    
]
// console.log(table);

//tuples

let chaituple : [string,number]

chaituple = ["masala",32.1];
// chaituple = [20,"masala"];// error : maintain order

let userInfo :[string, number,boolean?]
//? is optional parameter
userInfo= ["ram",34]
userInfo= ["sham",34,true]

const newtuple : readonly [string,number] =["ram",23]; //not update

const chaiItems :[name:string,price:number]=[
    "masala",39
]



