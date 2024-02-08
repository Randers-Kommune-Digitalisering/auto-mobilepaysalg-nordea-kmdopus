const Node = {
  "id": "9ead775bf866a577",
  "type": "function",
  "z": "5a8afc5afb89916f",
  "g": "e8ac061ee2e34438",
  "name": "set dates",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 240,
  "y": 60,
  "wires": [
    [
      "bf20a6756431d283"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  function formatToISOWithZeroMilliseconds(date) {
      const isoString = date.toISOString();
      return isoString.substring(0, isoString.length - 5) + "Z";
  }
  
  function formatDateToYYYYMMDD(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
  }
  
  function findDate(arg) {
      let startDate = new Date();
      let endDate = new Date();
      startDate.setHours(0, 0, 0, 0);
  
      if (startDate.getDay() === 1) {     // Hvis dags dato er mandag
          startDate.setDate(startDate.getDate() - 4);
      } else {
          startDate.setDate(startDate.getDate() - 2);
      }
      
      endDate.setDate(endDate.getDate() - 2);
      endDate.setHours(23, 59, 59, 0);
  
      if (arg === "start") {
          return formatToISOWithZeroMilliseconds(startDate);
      } else if (arg === "end") {
          return formatToISOWithZeroMilliseconds(endDate);
      }
  }
  
  global.set("startdate", findDate("start"));
  global.set("enddate", findDate("end"));
  global.set("dateOfOrigin", formatDateToYYYYMMDD(new Date()));
  return msg;
  
}

module.exports = Node;