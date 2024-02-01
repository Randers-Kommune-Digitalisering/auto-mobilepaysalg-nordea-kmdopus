const Node = {
  "id": "b73eae993793d2e5",
  "type": "change",
  "z": "5a8afc5afb89916f",
  "g": "608c296403fab569",
  "name": "flow to msg",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "omposteringsarray",
      "tot": "global"
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
  "x": 430,
  "y": 120,
  "wires": [
    [
      "e19e623080066c4c"
    ]
  ],
  "_order": 139
}

module.exports = Node;