
//union 
let subs: number | string = '1M'

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

apiRequestStatus ="success"

// apiRequestStatus = "loading" error

let direction : 'left' | 'Straight'  | 'right' ='left'

direction = 'right'


const orders = ['12','34','20','21']

let currentOrder :string | undefined

for(let order of orders){
    if(order === '20'){
        currentOrder = order
    }
    currentOrder ="19"
}

console.log(currentOrder);
