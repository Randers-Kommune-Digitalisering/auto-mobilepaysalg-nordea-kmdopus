const Node = {
  "id": "af8c341a9bb797a7",
  "type": "change",
  "z": "VueExample",
  "g": "d4af806691aedd75",
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
  "x": 125,
  "y": 400,
  "wires": [
    [
      "8e20408b0191e0bc"
    ]
  ],
  "l": false
}

module.exports = Node;