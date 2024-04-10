const Node = {
  "id": "9afabe54d62ccec6",
  "type": "change",
  "z": "2bddb141f0269626",
  "g": "126393a2ddbce770",
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
  "x": 600,
  "y": 240,
  "wires": [
    [
      "a759194f2430a86b"
    ]
  ]
}

module.exports = Node;