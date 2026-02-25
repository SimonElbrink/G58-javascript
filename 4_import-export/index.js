//import getAllBookings from "./BookingAPI.js"; // Defualt Import

import {getAllBookings, bookBookingById } from "./BookingAPI.js"; // Named Import

console.log(getAllBookings());

console.log(bookBookingById("b14f10cc-6475-4314-a696-4a29d702a8ea"));

/*
"type": "module" in package.json:
Tells Node.js to treat .js files as ES modules.
Enables import/export syntax instead of require()/module.exports.
*/
