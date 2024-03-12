const Node = {
  "id": "218598c58c5d0b1f",
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
  "y": 660,
  "wires": [
    [
      "2150caccb4b6445d"
    ]
  ]
}

module.exports = Node;