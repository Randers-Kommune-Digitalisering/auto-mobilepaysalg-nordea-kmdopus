const Node = {
  "id": "36644c1bb8f3e239",
  "type": "function",
  "z": "2bddb141f0269626",
  "g": "6bdc935c9bb94ddd",
  "name": "restructure data",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [
    {
      "var": "csv",
      "module": "csv-parser"
    }
  ],
  "x": 340,
  "y": 380,
  "wires": [
    [
      "74cd5d01463c0f4f"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, csv) {
  const headers = ["name", "myShopNumber", "brandId", "Posteringstekst", "Artskonto", "PSP"]
  const rules = JSON.parse(msg.payload) || [];
  const extractedValues = [];
  
  extractedValues.push(headers);
  
  for (let i = 0; i < rules.length; i++) {
      const csvEntry = [];
  
      for (let j = 0; j < rules[i].length; j++)
          switch (j) {
              case 3:
                  csvEntry.push(rules[i][j].Posteringstekst);
                  csvEntry.push(rules[i][j].Artskonto);
                  csvEntry.push(rules[i][j].PSP);
                  break;
              case 4:
                  break;
              default:
                  csvEntry.push(rules[i][j].value || "");
                  break;
          }
  
      extractedValues.push(csvEntry);
  }
  
  msg.payload = extractedValues;
  
  return msg;
  
}

module.exports = Node;