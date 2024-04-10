const Node = {
  "id": "79198b54b4a4dad1",
  "type": "function",
  "z": "2bddb141f0269626",
  "g": "18af70370c538179",
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
      "e759d4c9e987f022"
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