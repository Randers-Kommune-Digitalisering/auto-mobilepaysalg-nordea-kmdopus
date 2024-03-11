const Node = {
  "id": "218598c58c5d0b1f",
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
  "y": 440,
  "wires": [
    [
      "2150caccb4b6445d"
    ]
  ],
  "l": false
}

module.exports = Node;