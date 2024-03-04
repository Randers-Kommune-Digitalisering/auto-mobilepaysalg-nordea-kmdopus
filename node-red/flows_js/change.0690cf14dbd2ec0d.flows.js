const Node = {
  "id": "0690cf14dbd2ec0d",
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
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "( $globalContext(\"konteringsregler\") )\t[ $[4].ruleId = $$.ruleRequested ]",
      "tot": "jsonata",
      "dc": true
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $exists() ? payload : []",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 440,
  "y": 360,
  "wires": [
    [
      "38fba4a63c7168aa",
      "11a6b09f7be3c9c2"
    ]
  ]
}

module.exports = Node;