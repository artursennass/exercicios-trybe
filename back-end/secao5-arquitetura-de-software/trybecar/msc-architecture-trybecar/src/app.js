// src/app.js
const express = require('express');
const { passengerRoutes, driverRoutes } = require('./routers');

const app = express();
app.use(express.json());
app.use('/passengers', passengerRoutes);
app.use('/drivers', driverRoutes);

module.exports = app;

// const doesPassengerExist = async (passengerId) => {
//   const [[passenger]] = await connection.execute(
//     'SELECT * FROM passengers WHERE id = ?',
//     [passengerId],
//   );
//   if (passenger) return true;
//   return false;
// };

// const saveWaypoints = (waypoints, travelId) => {
//   if (waypoints && waypoints.length > 0) {
//     return waypoints.map(async (value) => connection.execute(
//       'INSERT INTO waypoints (address, stop_order, travel_id) VALUE (?, ?, ?)',
//       [value.address, value.stopOrder, travelId],
//     ));
//   }
//   return [];
// };