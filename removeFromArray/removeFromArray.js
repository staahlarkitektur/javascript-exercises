
const removeFromArray = function (...args) { //I had no idea that ...args was a thing. It takes unspecified amounts of arguments.
   const array = args[0]; //the first argument is always the array
   const newArray = [];
   array.forEach((item) => {
     if (!args.includes(item)) {
       newArray.push(item);
     }
   });
   return newArray;
 };
module.exports = removeFromArray