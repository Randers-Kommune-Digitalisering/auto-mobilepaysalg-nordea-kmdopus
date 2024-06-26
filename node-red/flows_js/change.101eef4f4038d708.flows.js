const Node = {
  "id": "101eef4f4038d708",
  "type": "change",
  "z": "VueExample",
  "g": "b196cd19cebbc2c0",
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
      "to": "\"/data/output/\" & fileRequested",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 620,
  "y": 80,
  "wires": [
    [
      "8b299b32044d3469"
    ]
  ]
}

module.exports = Node;