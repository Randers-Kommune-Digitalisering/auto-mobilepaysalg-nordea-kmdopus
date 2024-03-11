const Node = {
  "id": "0690cf14dbd2ec0d",
  "type": "change",
  "z": "VueExample",
  "name": "Find rule",
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
  "x": 420,
  "y": 360,
  "wires": [
    [
      "38fba4a63c7168aa"
    ]
  ]
}

module.exports = Node;