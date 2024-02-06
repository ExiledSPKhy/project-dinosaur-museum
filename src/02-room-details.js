/*
  Do not change the lines below. If you'd like to run code from this file, you may use the `exampleDinosaurData` and `exampleRoomData` variables below to gain access to each data set. This data is pulled from the relevant files in the `data/` directory.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.
*/
const exampleDinosaurData = require("../data/dinosaurs");
const exampleRoomData = require("../data/rooms");
// Do not change the lines above.

/**
 * getRoomByDinosaurName()
 * ---------------------
 * Return the name of the room where the given dinosaur can be found. If the dinosaur does not exist in the `dinosaurs` list or cannot be found in any room, return an error message that says so.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} dinosaurName - The name of the dinosaur.
 * @returns {string} The name of the room where the dinosaur can be found. Alternatively, an error message.
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Tyrannosaurus");
 *  //> "Roberts Room"
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Pterodactyl");
 *  //> "Dinosaur with name 'Pterodactyl' cannot be found."
 */
function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
  
  let dinoObj = dinosaurs.find(singleDino => singleDino.name === dinosaurName);

  if(!dinoObj){
    return `Dinosaur with name '${dinosaurName}' cannot be found.`;
  }
  //if the value/dinosaurName in the parameters does NOT fufill the conditions set in the "dinoObj" function we created on line 29, 
  //return a message indicatiog a Dinosaur with that name cannot be found.
  let dinoId = dinoObj.dinosaurId; 

  let roomNeed = rooms.find(singleRoom => singleRoom.dinosaurs.includes(dinoId));
//find the single element in the room array that includes the dinoId
 return roomNeed ? roomNeed.name : `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`;
  //(New understanding!)  If room need is a falsy value (due to a posibility a single room with cannot be found) there is a message to indicate such
 // if it's the correct room(a room that includes the corrosponding dinoId), return the name of the room, 
  // if it is NOT a room a message indicates that the dinosaur with the specified name cannot be found in any rooms.
  
  }console.log(getRoomByDinosaurName(exampleDinosaurData, exampleRoomData, "Ouranosaurus"));
  
/**
 * getConnectedRoomNamesById()
 * ---------------------
 * Returns an array of strings, where each string is the name of a room connected to the given room. If a room ID cannot be found, an error message is returned.
 *
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} id - A unique room identifier.
 * @returns {string|string[]} An array of room names, or an error message.
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "aIA6tevTne");
 *  //> ["Ticket Center"]     rooms and roomId
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "A6QaYdyKra");
 *  //> [
      "Entrance Room",
      "Coat Check Room",
      "Ellis Family Hall",
      "Kit Hopkins Education Wing"
    ]
 */



    console.log("                                                                        ");



  function getConnectedRoomNamesById(rooms, id) {

      let roomsConnected = rooms.filter(room => room.connectsTo.includes(id));
    //illustrates the filter() method being utilized
    // to create an array of rooms that ALL satisfy the condition of including the "id"

                                      //Maps out each room in the new array created by filter 
        let connectedRoomNames = roomsConnected.map(room => room.name);
        //  loops through the array/list of rooms that include id and 
        // returns the names of those rooms
        return connectedRoomNames || `Room with ID of '${id}' could not be found.`;
      }// return the names of rooms connected OR return a statement declaring the issue
    


 console.log(getConnectedRoomNamesById(exampleRoomData, "A6QaYdyKra"))
  module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
