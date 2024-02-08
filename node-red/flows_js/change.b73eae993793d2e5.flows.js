const Node = {
  "id": "b73eae993793d2e5",
  "type": "change",
  "z": "5a8afc5afb89916f",
  "g": "753599c316bff70b",
  "name": "flow to msg",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "omposteringsarray",
      "tot": "flow"
    },
    {
      "t": "set",
      "p": "columns",
      "pt": "msg",
      "to": "omp_headers",
      "tot": "global"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 310,
  "y": 180,
  "wires": [
    [
      "30e3f4fcbebac0b8",
      "4e44b53afebfe668"
    ]
  ]
}

module.exports = Node;