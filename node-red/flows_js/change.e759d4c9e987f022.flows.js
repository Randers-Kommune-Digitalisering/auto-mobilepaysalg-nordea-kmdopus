const Node = {
  "id": "e759d4c9e987f022",
  "type": "change",
  "z": "2bddb141f0269626",
  "g": "18af70370c538179",
  "name": "set page = 1",
  "rules": [
    {
      "t": "set",
      "p": "pagenumber",
      "pt": "flow",
      "to": "1",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "transactions",
      "pt": "flow",
      "to": "{}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 390,
  "y": 60,
  "wires": [
    [
      "71f77da0aa5f0f10"
    ]
  ]
}

module.exports = Node;