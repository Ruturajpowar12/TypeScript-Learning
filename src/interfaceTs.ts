type chaiOrder = {
 type:string;
 sugar:number;
 strong:boolean
}

function makeChai(order:chaiOrder){
    console.log(`chai ${order.type}`);
    
}
function serveChai(order:chaiOrder){
    console.log(`chai ${order.type}`);
    
}

type TeaRecipe ={
    water:number;
    milk: number
}

class MasalaChai implements TeaRecipe{
    water = 100;
    milk = 50;
}

interface CupSize {
    size:"small"|"large"
}

class chai implements CupSize{

size: "small" | "large" = "large";

}

type Response  {ok: true} | {ok:false}
class myRes implements Response{
    ok: boolean=true;
}

// type TeaType = "masala" | "Ginger" | "Elaichi"
// function orderChai(tea:TeaType) {
//    console.log(tea);
// }

// Nesting tyoes
// type t1 = {
//   name : string,
//   age : number
// }
// type t2 = {
//   address : string,
//   mobile : number
// }
// type example  = t1 & t2;
// const eg:example = {
//   name : "ram",
//   age : 21,
//   address : "kolhapur",
//   mobile : 99999990909
// }

type User = {
  username : string,
  password : string,
  bio? : string
}
const user:User = {
  username : "ram",
  password : "ram123",
}
console.log(user);