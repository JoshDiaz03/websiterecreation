//email validation
function validateEmail(email){
    if(email.includes ("@") && email.includes (".")){
        return true;
    } else {
        return false;
    }
}        
console.log(validateEmail("joshdiaz@email.com"))

//search for locations
function searchLocations(){
    let location = ["California", "Nevada", "Arizona", "Texas"]
    const userInput = prompt('Type in your state name in full:')
    
} 
console.log(location.includes(userInput))





//Shopping cart
const cart= []
function addToCart(){
cart.push({item:1, name: "cellphone", price: 1000.00});
cart.push({item: 2, name: "laptop", price: 1500.00})
}
console.log(cart)

//card validation

cardId = [1234,4567,7890]
function validateCard(inputId){
  
  if(cardId.includes(inputId))
    console.log("Card Accepted")
} else{
  console.log("Card not valid")
}