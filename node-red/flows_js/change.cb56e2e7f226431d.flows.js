const Node = {
  "id": "cb56e2e7f226431d",
  "type": "change",
  "z": "VueExample",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\t    \"Content-Disposition\": \"attachment;filename=\" & req.params.file\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 335,
  "y": 1440,
  "wires": [
    [
      "d8c6c23d6f9b8d2e"
    ]
  ],
  "l": false
}

module.exports = Node;