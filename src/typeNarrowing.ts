
// Type Narrowing in TypeScript

function printValues( value: string | number){
     if(typeof(value) === 'string'){
        return `value is ${value} string.`
     }else{
        return `value is ${value} number.`
     }
}

console.log(printValues("TypeScript"));
console.log(printValues(10));


// Common type guards
// typeof – checks primitive types.
// instanceof – checks class instances.
// in – checks whether an object has a property.
// Custom type predicates – define your own type checks.



// function getData(kind: string | number){
//     if(typeof kind === 'string'){
//         return `making ${kind} string data type`
//     }else{
//         return `making ${kind} number data type`
//     }
// }


// function serveData(msg? :'string'){
//     if(msg){
//         return `serving ${msg}`
//     }
//     return `serving default data`
// }


// function orderChai(size: 'small' | 'medium' |'large' | number){
//      if(size === "small"){
//         return 'small cutting chai'
//      }
//      if(size === "medium" || size === "large"){
//         return `make extra chai`
//      }

//      return`chai order ${size}`
// }


// class kulhadChai {
//     serve(){
//         return ` serving kulhad chai`
//     }
// }

// class cutting{
//     serve(){
//         return ` serving cutting chai`
//     }
// }

// function serve(chai:kulhadChai | cutting){
//     if(chai instanceof kulhadChai){
//         return chai.serve()
//     }
// }


type chaiOrder ={
    type:string
    sugar: number
}

function isChaiOrder(obj:any):obj is chaiOrder{
    return(
        typeof obj === "object"&&obj !== null && typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder (item : chaiOrder | string){
    if(isChaiOrder(item)){
        return`serving ${item.type} chaaai with ${item.sugar}`
    }
    return `Serving custom chai: ${item}`;
}


type MasalaChai = {
  type: "masala";
  spiceLevel: number;
};

type GingerChai = {
  type: "ginger";
  aroma: string;
};

type ElaichiChai = {
  type: "elaichi";
  amount: number;
};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return `Brewing Masala Chai with spice level ${order.spiceLevel}`;
    case "ginger":
      return `Brewing Ginger Chai with aroma ${order.aroma}`;
    case "elaichi":
      return `Brewing Elaichi Chai with ${order.amount} gms of cardamom`;
  }
}

function brew(order: MasalaChai | GingerChai) {
  if ("spiceLevel" in order) {
    // Confirms 'order' is of type MasalaChai
    return `Customizing spice level: ${order.spiceLevel}`;
  }
  return `Brewing ginger chai...`;
}