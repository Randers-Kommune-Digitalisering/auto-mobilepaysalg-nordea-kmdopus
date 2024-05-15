const Node = {
  "id": "7a8bf046e92e089c",
  "type": "function",
  "z": "7367c6ffae9acd60",
  "g": "248b6faf1bd25dc8",
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
  "x": 360,
  "y": 120,
  "wires": [
    [
      "aa4964c543f35c2e"
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