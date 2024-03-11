const Node = {
  "id": "2150caccb4b6445d",
  "type": "function",
  "z": "VueExample",
  "g": "d4af806691aedd75",
  "name": "Delete rule",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 230,
  "y": 440,
  "wires": [
    [
      "a2f78898cc418a1f",
      "a1a2f52704ef7557"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  var regler = global.get("konteringsregler");
  
  var index = regler.findIndex(x => x[4].ruleId == msg.ruleRequested);
  regler.splice(index, 1);
  
  global.set("konteringsregler", regler);
  
  return msg;
}

module.exports = Node;