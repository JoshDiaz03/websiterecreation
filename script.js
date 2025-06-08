//email validation
function validateEmail(email) {
    if (email.includes("@") && email.includes(".")) {
         return true;
    } else {
        return false;
    }
}
console.log(validateEmail("joshdiaz@email.com"))
console.log(validateEmail("joshdiazemailcom"))

//onclick event
function greet(){
    alert("Form submitted succesful")
}

//search for locations
function searchLocations() {
    //check if your state has a store
    //list of valid locations
    let location = ["California", "Nevada", "Arizona", "Texas"]
    //typing your location
    //const userInput = prompt('Type in your state name in full:')
    const userInput = "Nevada"
    //checks your location has a store
    return location.includes(userInput)
}
console.log(searchLocations)




//Shopping cart
const cart = []
function addToCart() {
    cart.push({ item: 1, name: "cellphone", price: 1000.00 });
    cart.push({ item: 2, name: "laptop", price: 1500.00 })
    console.log(cart)
}


//card validation

cardIds = [1234, 4567, 7890, 1123, 3456]
function validateCard(inputId) {
    if (cardIds.includes(inputId)) {
        console.log("Card Accepted")
    }

    else {
        console.log("Card not valid")
    }
}


