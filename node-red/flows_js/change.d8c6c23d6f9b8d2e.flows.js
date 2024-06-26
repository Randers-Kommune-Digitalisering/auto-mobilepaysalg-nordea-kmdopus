const Node = {
  "id": "d8c6c23d6f9b8d2e",
  "type": "change",
  "z": "VueExample",
  "g": "95d2f19438cf5c53",
  "name": "file path",
  "rules": [
    {
      "t": "set",
      "p": "fileRequested",
      "pt": "msg",
      "to": "req.params.file",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "filepath",
      "pt": "msg",
      "to": "\"/data/response_log/\" & fileRequested",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 620,
  "y": 220,
  "wires": [
    [
      "fc6a5c5986e07401"
    ]
  ]
}

module.exports = Node;