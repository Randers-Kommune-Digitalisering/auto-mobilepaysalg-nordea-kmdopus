const Node = {
  "id": "1b8cc635649a4519",
  "type": "function",
  "z": "7367c6ffae9acd60",
  "g": "e55824f191632e7c",
  "name": "generate global var",
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
  "x": 310,
  "y": 380,
  "wires": [
    [
      "8a3337373532e81f",
      "6d62d7ef33e37c00"
    ]
  ],
  "info": ""
}

Node.info = `
Format: ISO 8601
`

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