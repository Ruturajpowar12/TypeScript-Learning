let responce:any ="42"

//Assertion
let numeric : number = (responce as String).length

type Book={
    name:String
};

let bookString = JSON.stringify({name:"JavaScript"})
let bookObject = JSON.parse(bookString) as Book
console.log(bookObject.name);  // type assertion

const inElement = document.getElementById("username") as HTMLInputElement

let value:any 

value ="code"
value=[1,2,3]
value= 2.5
value.toUppercase();

let value1 :unknown
value1="code"
value1=[1,2,3]
value1= 2.5
// value1.toUppercase(); //error
if(typeof value1 === "string"){
   value1.toUpperCase() 
}


try {  
} catch (error) {
  if(error instanceof Error){
    console.log(error.message);
  }
  console.log("Error",error);
}

//unknown always tell type of data
const data :unknown ="chai aur code"
const strData: string = data as string


type Role = "admin"|"user"|"superAdmin"
function redirectBasedOnRole(role:Role):void{
    if(role ==="admin"){
        console.log("Redirecting to admin ");
        return
    }
    if(role ==="user"){
        console.log("Redirecting to user");
        return
    }
    role
}

function neverReturn():never{
    while(true){}
}