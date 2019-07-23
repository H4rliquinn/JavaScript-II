// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let outside=1;
console.log("Outside",outside);
function castle(num){
  console.log("Passed In", num+1);
  let inside=3;
  console.log("Created Inside", inside);
  return inside+1;
}
returned=castle(outside);
console.log("Pushed Outside",returned);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
// const counter = () => {
//   // Return a function that when invoked increments and returns a counter variable.
//   let count=0;
//   return function(){
//     count++;
//     console.log(count);
//   }
// };
// // Example usage: 
// const newCounter = counter();

// newCounter(); // 1
// newCounter(); // 2
// newCounter(); // 3

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
    let count=0;
    console.log("New Counter", count);
  return {
      // `increment` should increment a counter variable in closure scope and return it.
    increment: ()=>{
      count++;
      console.log(count);
    },
      // `decrement` should decrement the counter variable and return it.
    decrement: ()=>{
      count--;
      console.log(count);
    }    
  }
};
  const addsub = counterFactory();
  addsub.increment();
  addsub.increment();
  addsub.increment();
  addsub.decrement();
  addsub.decrement();
  addsub.decrement();

//IFFE
((phrase)=>console.log("!!!"+phrase+"!!!!"))("But why?");

