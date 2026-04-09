// Function ek block of code hota hai jo ek specific kaam karta hai, aur use baar-baar reuse kar sakte hain.
// matlab: ek baar likho, baar - baar use karo

// matlab: ek baar likho, baar - baar use karo 

function number(){
  console.log(2+2);
  console.log("hello");
}


//caling the function  
// aghar tum 3 baar call karo function ko toh  ho 3 baar code chalge..
number()
number()
number ()


//parameters: vo variable hota jo hum function banate time likhte hain.
//matlab: function ke ander jo input lene ke liya name likhte ho ,wo parameter hota hai..
function greet(name){     //name is the parameter
    console.log(" hello my friend :"+name)
}


// function call  karte time apko name dena hogav 
greet("abhishek rawat")     // abhishek rawat is a argument:


// function number(a b c ){
//     let a =10 
//     let b= 20
//     let c =40
//     let sun( a * b * c);
//    console.log(sun);
// }

// number(a b c)

//return statement: return statement function ke ander hota hai, aur ye function ko value return karta hai.
// matlab: function ke ander jo value return karna hota hai, uske liya return statement use karte hain.

function add(a,b){
    return a + b;   // return statement
}   


let sum = add(10,20)   // 10 and 20 is a argument
console.log(sum);   // 30 
