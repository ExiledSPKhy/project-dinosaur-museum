/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleTicketData` variable below to gain access to tickets data. This data is pulled from the `data/tickets.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all tickets.
*/
const tickets = require("../data/tickets");
const exampleTicketData = require("../data/tickets");
// Do not change the line above.

/**
 * calculateTicketPrice()
 * ---------------------
 * Returns the ticket price based on the ticket information supplied to the function. The `ticketInfo` will be in the following shape. See below for more details on each key.
 * const ticketInfo = {
    ticketType: "general",
    entrantType: "child",
    extras: ["movie"],
  };// a list of objects with obects inside of them
 *
 * If either the `ticketInfo.ticketType` value or `ticketInfo.entrantType` value is incorrect, or any of the values inside of the `ticketInfo.extras` key is incorrect, an error message should be returned.
 *
 * @param {Object} ticketData - An object containing data about prices to enter the museum. See the `data/tickets.js` file for an example of the input.
 * @param {Object} ticketInfo - An object representing data for a single ticket.
 * @param {string} ticketInfo.ticketType - Represents the type of ticket. Could be any string except the value "extras".
 * @param {string} ticketInfo.entrantType - Represents the type of entrant. Prices change depending on the entrant.
 * @param {string[]} ticketInfo.extras - An array of strings where each string represent a different "extra" that can be added to the ticket. All strings should be keys under the `extras` key in `ticketData`.
 * @returns {number} The cost of the ticket in cents.
 *
 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "general",
      entrantType: "adult",
      extras: [],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> 3000
 *  
 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "membership",
      entrantType: "child",
      extras: ["movie"],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> 2500

 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "general" || "membership" === ticketType
      entrantType: "kid", // Incorrect
      extras: ["movie"],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> "Entrant type 'kid' cannot be found."
 */

    // const {
    //   movie: {movieDescription, moviePrices},
    //   education: {educationDescription, educationPrices },
    //   terrace: {  terraceDescription,  terracePrices },
    // } = tickets.extras;

       const{
         
       } =tickets.general
   console.log(tickets.priceInCents.child);
    //const{ticketType,entrantType,extras:[]} = ticketInfo

function calculateTicketPrice(ticketData, ticketInfo) {
  //create an array then sum it at the end 
  ticketSum = 0;
  
  function ticketTypeEntrantType(ticketInfo){

  if( ticketInfo.ticketType !== "general" && ticketInfo.ticketType !== "membership" ){
    return `Ticket type '${ticketInfo.ticketType}' cannot be found.` 
  }if (ticketInfo.ticketType === "general" && ticketInfo.entrantType === "child"){
    ticketSum += 2000;
  }if (ticketInfo.ticketType === "general" && ticketInfo.entrantType === "adult"){
    ticketSum += 3000;
  }if(ticketInfo.ticketType === "general" && ticketInfo.entrantType === "senior"){
    ticketSum += 2500;
  }if(ticketInfo.ticketType === "membership" && ticketInfo.entrantType === "child"){
    ticketSum += 1500;
  }if (ticketInfo.ticketType === "membership" && ticketInfo.entrantType === "adult"){
    ticketSum += 2800;
  }else if(ticketInfo.ticketType === "membership" && ticketInfo.entrantType === "senior"){
    ticketSum += 2300;
  }
}

  if(ticketInfo.extras === undefined){ 
    return;
  }
  if(!ticketInfo.extras[tickets.extras[movie]] && !ticketInfo.extras[tickets.extras[education]] && !ticketInfo.extras[tickets.extras[terrace]]){
      return `"Extra type 'incorrect-extra' cannot be found."`;
  }
    else if(ticketInfo.extras[tickets.extras[movie]] && ticketInfo.extras[tickets.extras[education]] && ticketInfo.extras[tickets.extras[terrace]]){
      ticketSum
    }



  if ( ticketInfo.entrantType !== "child" && ticketInfo.entrantType !== "adult" && ticketInfo.entrantType !== "senior"){
    return `Entrant type '${ticketInfo.entrantType}' cannot be found.`
  }

 
  

  
  
}calculateTicketPrice(exampleTicketData);

/**
 * purchaseTickets()
 * ---------------------
 * Returns a receipt based off of a number of purchase. Each "purchase" maintains the shape from `ticketInfo` in the previous function.
 *
 * Any errors that would occur as a result of incorrect ticket information should be surfaced in the same way it is in the previous function.
 * 
 * NOTE: Pay close attention to the format in the examples below and tests. You will need to have the same format to get the tests to pass.
 *
 * @param {Object} ticketData - An object containing data about prices to enter the museum. See the `data/tickets.js` file for an example of the input.
 * @param {Object[]} purchases - An array of objects. Each object represents a single ticket being purchased.
 * @param {string} purchases[].ticketType - Represents the type of ticket. Could be any string except the value "extras".
 * @param {string} purchases[].entrantType - Represents the type of entrant. Prices change depending on the entrant.
 * @param {string[]} purchases[].extras - An array of strings where each string represent a different "extra" that can be added to the ticket. All strings should be keys under the `extras` key in `ticketData`.
 * @returns {string} A full receipt, with each individual ticket bought and the total.
 *
 * EXAMPLE:
 *  const purchases = [
      {
        ticketType: "general",
        entrantType: "adult",
        extras: ["movie", "terrace"],
      },
      {
        ticketType: "general",
        entrantType: "senior",
        extras: ["terrace"],
      },
      {
        ticketType: "general",
        entrantType: "child",
        extras: ["education", "movie", "terrace"],
      },
      {
        ticketType: "general",
        entrantType: "child",
        extras: ["education", "movie", "terrace"],
      },
    ];
    purchaseTickets(tickets, purchases);
    //> "Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\nAdult General Admission: $50.00 (Movie Access, Terrace Access)\nSenior General Admission: $35.00 (Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\n-------------------------------------------\nTOTAL: $175.00"

 * EXAMPLE:
    const purchases = [
      {
        ticketType: "discount", // Incorrect
        entrantType: "adult",
        extras: ["movie", "terrace"],
      }
    ]
    purchaseTickets(tickets, purchases);
    //> "Ticket type 'discount' cannot be found."
 */
function purchaseTickets(ticketData, purchases) {}

// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};
