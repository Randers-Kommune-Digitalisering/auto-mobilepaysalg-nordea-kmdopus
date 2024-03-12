const Node = {
  "id": "e1970964296b3ae3",
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
  "y": 1220,
  "wires": [
    [
      "101eef4f4038d708"
    ]
  ],
  "l": false
}

module.exports = Node;