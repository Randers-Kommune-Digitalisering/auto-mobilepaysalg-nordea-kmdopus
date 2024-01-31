const Node = {
  "id": "9ead775bf866a577",
  "type": "function",
  "z": "5a8afc5afb89916f",
  "g": "e8ac061ee2e34438",
  "name": "Sidste bankdag",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 260,
  "y": 60,
  "wires": [
    [
      "dd9eaa553d4003dd"
    ]
  ],
  "_order": 139
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  function formatToISOWithZeroMilliseconds(date) {
      const isoString = date.toISOString();
      return isoString.substring(0, isoString.length - 5) + "Z";
  }
  
  function findDate(arg) {
      let startDate = new Date();
      let endDate = new Date();
  
      if (startDate.getDay() === 1) {
          startDate.setDate(startDate.getDate() - 4); // Subtract 4 days for Monday
      } else {
          startDate.setDate(startDate.getDate() - 2); // Subtract 2 days for other weekdays
      }
  
      // Set end date to the same day as start date but with the time set to 23:59:59
      startDate.setHours(0, 0, 0, 0);
      endDate.setDate(startDate.getDate());
      endDate.setHours(23, 59, 59, 0);
  
      if (arg === "start") {
          return formatToISOWithZeroMilliseconds(startDate);
      } else if (arg === "end") {
          return formatToISOWithZeroMilliseconds(endDate);
      }
  }
  
  global.set("startdate", findDate("start"));
  global.set("enddate", findDate("end"));
  return msg;
  
}

module.exports = Node;