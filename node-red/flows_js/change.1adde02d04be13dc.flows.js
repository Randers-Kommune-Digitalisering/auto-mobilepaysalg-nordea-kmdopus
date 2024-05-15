const Node = {
  "id": "1adde02d04be13dc",
  "type": "change",
  "z": "2bddb141f0269626",
  "g": "18af70370c538179",
  "name": "💾",
  "rules": [
    {
      "t": "set",
      "p": "addTransactions",
      "pt": "flow",
      "to": "payload.transactions",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "nextPageNumber",
      "pt": "flow",
      "to": "payload.nextPageNumber",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 770,
  "y": 60,
  "wires": [
    [
      "d31a2609abca84b9"
    ]
  ]
}

module.exports = Node;