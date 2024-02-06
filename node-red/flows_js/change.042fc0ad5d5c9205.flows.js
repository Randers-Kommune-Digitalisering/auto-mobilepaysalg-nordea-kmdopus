const Node = {
  "id": "042fc0ad5d5c9205",
  "type": "change",
  "z": "5a8afc5afb89916f",
  "g": "91ee0364118b77c6",
  "name": "set filename & payload",
  "rules": [
    {
      "t": "set",
      "p": "filename",
      "pt": "flow",
      "to": "\"/data/response_log/\"&$globalContext(\"dateOfOrigin\")&\".json\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "transactions",
      "tot": "flow"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 180,
  "y": 240,
  "wires": [
    [
      "71aad7fb08920426"
    ]
  ]
}

module.exports = Node;