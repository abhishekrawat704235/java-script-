// if(false){
//     console.log("this is true");
// } else {
//     console.log("this is false");
// }



//practice queation 1 . write a code to check if someone is old enough to drive. The legal driving age is 18.

// if(age >= 18){
//     console.log("you are can drive");
// }
//  else if(age >= 18){
//     console.log("allow you to drive");
// }
// else{
//     console.log("you are not old enough to drive"); 
// }








                        // trully and falsy values


//it is a trully value because it is not 0
// if(5){
//     console.log(' truthy');
// }






                        // trully and falsy values


//it is a trully value because it is not 0
// if(5){
//     console.log(' truthy');
// }








                        // trully and falsy values


//it is a trully value because it is not 0
// if(5){
//     console.log(' truthy');
// }


//  console.log(!0);// it is a trully value because it is not 0
//  console.log(0); // it is a falsy value because it is 0






//shortcut for if statement
// 1. ternnary operator : it is a shortcut for if statement and it is used to write if statement in one line. it is also called as conditional operator. it is represented by ? and :
//  because of this operator we can write if statement in one line aur isko value ke sath use kar sakte hai...
  
                       //trully  values                    // falsy values
const result = 1-1? 'abhishek yah ? if satement hai' : 'aur bhai yah else hai';
console.log(result);


// 2.guard also known as logical AND operator : it is a shortcut for if statement and it is used to write if statement in one line. it is also called as conditional operator. it is represented by && and ||
//  because of this operator we can write if statement in one line aur isko value ke sath use kar sakte hai...


false && console.log('this is true'); // it is a falsy value because it is false
true && console.log('this is true'); // it is a trully value because it is true

const message = 5 && " bhai yah trully value hai"; // it is a trully value because it is true
console.log(message);


// 3. default also known as logical OR operator : it is a shortcut for if statement and it is used to write if statement in one line. it is also called as conditional operator. it is represented by && and ||
//  because of this operator we can write if statement in one line aur isko value ke sath use kar sakte hai...

const crunncey = "null"  || "bhai yah falsy value hai" ; // it is a trully value because it is true
console.log(crunncey);





//6a. Create a variable called 'hour' and save the current hour of the day
// (use 24-hour format and save it as a number between 0 and 23).
// · If hour is between 6 and 12, display 'Good morning!' in the console
// · If hour is between 13 and 17, display 'Good afternoon!' in the console
// · Otherwise, display 'Good night!' in the console
//answer 6a
let name = "abhishek";
let hours =13;
if (6 <= hours && hours <= 12){
    console.log("good morning " + name);

}
else if(13 <= hours && hours <= 17){
    console.log("good afternoon " + name);
}

else{
    console.log("good night " + name);
}



//answer2
const age = 20; 
const DISCOUNT = age >= 6  || "bhai discount nahi milega"; // it is a trully value because it is true
console.log(DISCOUNT);



//Q2. Setup: we'll improve the Cart Quantity project. First, make a copy of the project from exercise 5k (if you didn't do 5k, check the solutions). 
// 6k. Let's say the cart has a maximum quantity of 10. 
// Before updating the quantity, check if the quantity will be greater than 10: ·
// If it will, display a popup saying 'The cart is full' and don't update the quantity. 
// · Otherwise, update the quantity and console.log() it as usual
 //answer 6k
function addtocart(){
let quantity = 12   ;
let newQuantity =1 ;

if (quantity + newQuantity > 10) {
  alert("The cart is full");
} else {
  quantity += newQuantity;
  console.log("This is the quantity in the cart: " + quantity);
}
}


//answer5k
let cartQuantity = 0;

function updateCart(change) {

  // ❌ Check 1: upar limit (max 10)
  if (cartQuantity + change > 10) {
    alert("The cart is full");
    return; // yahin stop
  }
  
  

  // ❌ Check 2: neeche limit (min 0)
  if (cartQuantity + change < 0) {
    alert("Not enough items in the cart");
    return; // yahin stop
  }

  // ✅ Safe hai → update karo
  cartQuantity += change;
  console.log(`Cart quantity: ${cartQuantity}`);
}  

  