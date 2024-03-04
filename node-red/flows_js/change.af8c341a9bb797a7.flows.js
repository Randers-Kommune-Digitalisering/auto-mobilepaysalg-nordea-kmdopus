const Node = {
  "id": "af8c341a9bb797a7",
  "type": "change",
  "z": "VueExample",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "ruleRequested",
      "pt": "msg",
      "to": "req.params.ruleId ~> $number()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 470,
  "y": 540,
  "wires": [
    [
      "8e20408b0191e0bc"
    ]
  ]
}

module.exports = Node;