//functions in TypeScript

function student(id:number,name:string){
    console.log(`student id ${id} of student ${name}`);
}
student(12,"Ruturaj")

//return function
function employee():number{
    return 25;
}

//union return
function makeOrder(order:string): string | null {
    if(!order){
        return null
    }
    return order
}

//void no return
function logChai():void{
    console.log("Chai is Ready");   
}

//optional parameter function
// function shop (product:string , quantity?:number){
// console.log(product);

// }

//default parameter function
function shop (product:string , quantity:number =12){
console.log(product);
console.log(quantity);

}


function createChai(order:{
    type:string;
    sugar:number;
    size:"small" | "large"
}):number{
    return 4
}