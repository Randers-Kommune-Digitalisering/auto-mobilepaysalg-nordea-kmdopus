const Node = {
  "id": "e1970964296b3ae3",
  "type": "change",
  "z": "VueExample",
  "g": "b196cd19cebbc2c0",
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
  "x": 575,
  "y": 120,
  "wires": [
    [
      "101eef4f4038d708"
    ]
  ],
  "l": false
}

module.exports = Node;