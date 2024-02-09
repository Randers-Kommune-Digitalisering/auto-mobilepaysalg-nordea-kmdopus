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
  "libs": [
    {
      "var": "dayjs",
      "module": "dayjs"
    }
  ],
  "x": 240,
  "y": 60,
  "wires": [
    [
      "bf20a6756431d283"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, dayjs) {
  // Function to find start or end date
  function findDate(arg) {
      let startDate = dayjs().startOf('day');
      let endDate = dayjs().endOf('day').subtract(2, 'day');
  
      if (startDate.day() === 1) { // If today is Monday
          startDate = startDate.subtract(4, 'day');
      } else {
          startDate = startDate.subtract(2, 'day');
      }
  
      if (arg === "start") {
          return startDate.toISOString();
      } else if (arg === "end") {
          return endDate.toISOString();
      }
  }
  
  // Set global variables
  global.set("startdate", findDate("start"));
  global.set("enddate", findDate("end"));
  global.set("dateOfOrigin", dayjs().format('YYYY-MM-DD'));
  
  return msg;
  
}

module.exports = Node;