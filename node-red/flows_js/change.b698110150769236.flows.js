const Node = {
  "id": "b698110150769236",
  "type": "change",
  "z": "2bddb141f0269626",
  "g": "9f5e7f69a9319c00",
  "name": "💾",
  "rules": [
    {
      "t": "set",
      "p": "transactions",
      "pt": "flow",
      "to": "payload.response.transactions",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 870,
  "y": 1060,
  "wires": [
    [
      "e8bdcba5b1e438ba"
    ]
  ]
}

module.exports = Node;