/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const dinosaurs = require("../data/dinosaurs");
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**p
 * getLongestDinosaur()
 * ---------------------
 * Returns an object with the longest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getLongestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
function getLongestDinosaur(dinosaurs) {
                       //creates a copy, as to not manipulate the orginal array 
  let sortedDinos = dinosaurs.slice().sort((a,b) => a.lengthInMeters - b.lengthInMeters)
   let longestDinoinMeters = sortedDinos[sortedDinos.length - 1];
   const {name,lengthInMeters} = longestDinoinMeters
   let lengthInfeet = lengthInMeters * 3.281;
   return {[name]: lengthInfeet};

  
}
console.log(getLongestDinosaur(exampleDinosaurData));

/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
function getDinosaurDescription(dinosaurs, id) {
  let findDino = dinosaurs.find(x => x.dinosaurId === id);
    if(findDino){
    const { name, pronunciation,info } = findDino
    console.log(`${name} ${pronunciation} ${info}`);
    // return `${name} ${pronunciation} ${info}`;

  }else{
    // return `A dinosaur with an ID of '${id}' cannot be found.`;
    console.log(`A dinosaur with an ID of '${id}' cannot be found.`);
  };
  }
  getDinosaurDescription(exampleDinosaurData,"U9vuZmgKwUr")





/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
//  */


function getDinosaursAliveMya(dinosaurs, mya, key) {
  let arr = []; 

  //The function initializes an empty array arr to store the results.
  
  for (let dino of dinosaurs) {
      let oneDateBool = dino.mya.length === 1 && (dino.mya[0] === mya || dino.mya[0] - 1 === mya);
      let twoDatesBool = dino.mya.length === 2 && mya >= dino.mya[1] && mya <= dino.mya[0];
      
      //It iterates over each dinosaur in the dinosaurs array.

      //It checks two conditions (oneDateBool and twoDatesBool) 
      //related to the mya value and the dinosaur's geological time range.

      if (oneDateBool) {
        pushToArray(arr, key, dino)
      } 
      else if (twoDatesBool) {
        pushToArray(arr, key, dino)
      }
  }//If either condition is true, it calls the pushToArray helper function.
  return arr;
}

/// Helper Function
function pushToArray(arr, key, dino){
  if (!key || !(key in dino)) {//The helper function checks whether key is falsy(evaluates to false in a boolean or if key is not a property of the dino object.
    arr.push(dino.dinosaurId);//If true, it pushes the dinosaurId property of the dino object to the arr
   } 
  else {
    arr.push(dino[key]);//If false, it pushes the value of the specified key from the dino object to the arr.
   }
}
console.log(getDinosaursAliveMya(exampleDinosaurData));

module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};

