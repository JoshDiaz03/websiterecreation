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
    console.log(location.includes(userInput))
} 
//get feedback from form
 let feedback = [];

function addFeedback(message) {
  feedback.push(message);
  return feedback;
}

//calculate total
const prices = [19.99, 29.99, 49.99];

function getTotalPrice(prices) {
  const total = prices.reduce((total, price) => total + price, 0);
  return total * 1.1; 
}

console.log(getTotalPrice(prices).toFixed(2))