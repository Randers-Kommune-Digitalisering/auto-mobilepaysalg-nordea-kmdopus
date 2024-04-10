const Node = {
  "id": "d31a2609abca84b9",
  "type": "function",
  "z": "2bddb141f0269626",
  "g": "18af70370c538179",
  "name": "append",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 900,
  "y": 60,
  "wires": [
    [
      "a95d4212204b0c0d",
      "84a1f0b7fd392278"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  let transactions = flow.get("transactions");
  let addTransactions = flow.get("addTransactions");
  
  // Ensure transactions is an array
  transactions = Array.isArray(transactions) ? transactions : [];
  
  // Concatenate addTransactions to transactions
  transactions = transactions.concat(addTransactions);
  
  // Update the flow variable with the modified array
  flow.set("transactions", transactions);
  flow.set("addTransactions", {});
  
  return msg;
  
}

module.exports = Node;