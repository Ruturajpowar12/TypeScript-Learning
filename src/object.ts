//objects in Ts

const data = {
    name:"Ruturaj",
    age:21,
    isStudent :true
}

// {
//     name:string;
//     age:number;
//     isStudent:boolean
// }
// Define the shape/structure of an object
type User = {
    name: string;
    email: string;
    isActive: boolean;
};

// Create an object using the User type
const newUser: User = {
    name: "Hitesh",
    email: "hitesh@lco.dev",
    isActive: true
};

type Tea ={
    name:string;
    price:number;
    ingredients:string[]
}

const specialChai: Tea = {
    name:"Special Chai",
    price:25,
    ingredients:["ginger","sugar","water"]
}


type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };
// Object with extra properties
let bigCup = { size: "500ml", material: "steel" };
// Allowed because bigCup contains at least the required 'size' property
smallCup = bigCup;


type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arabica" };
// TypeScript verifies that 'coffee' fulfills the minimum requirements of 'Brew'
const chaiBrew: Brew = coffee;


type Item={name:string ,quantity:number}
type Address={street:string ,pin:number}

type Order = {
    id:string;
    items:Item[];
    address:Address
}



type CardNumber = {
    cardNumber: string;
};
type CardDate = {
    cardDate: string;
};
// Combining multiple types into one
type CardDetails = CardNumber & CardDate & {
    cvv: number;
};
const paymentInfo: CardDetails = {
    cardNumber: "1234-5678-9012-3456",
    cardDate: "12/28",
    cvv: 789
};