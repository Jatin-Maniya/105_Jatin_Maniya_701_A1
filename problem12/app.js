function addToCart() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("Product Added to Cart")
            resolve()
        }, 1000);
    })
}

function makePayment() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("Payment Successful")
            resolve()
        }, 1000);
    })
}

function placeOrder() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("Order Placed Successfully")
            resolve()
        }, 1000);
    })
}

addToCart()
    .then(() => makePayment())
    .then(() => placeOrder())
    .then(() => console.log("Shopping Completed"))
    .catch((err)=>console.log(err))