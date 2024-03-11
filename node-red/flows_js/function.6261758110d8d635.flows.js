const Node = {
  "id": "6261758110d8d635",
  "type": "function",
  "z": "5a8afc5afb89916f",
  "g": "e8ac061ee2e34438",
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
      "f39870190694e62a",
      "08a49e9b043bea11"
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