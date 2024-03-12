const Node = {
  "id": "8e20408b0191e0bc",
  "type": "function",
  "z": "VueExample",
  "name": "Update rule",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 670,
  "y": 540,
  "wires": [
    [
      "c189d6154203c86d",
      "07035a8ce30bf645"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var regler = global.get("konteringsregler");
  
  var index = regler.findIndex(x => x[4].ruleId == msg.ruleRequested);
  regler[ index ] = msg.payload;
  
  global.set("konteringsregler", regler);
  
  return msg;
}

module.exports = Node;