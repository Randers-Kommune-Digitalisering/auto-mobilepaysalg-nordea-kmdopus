const Node = {
  "id": "59158a3cb8c83408",
  "type": "change",
  "z": "2bddb141f0269626",
  "g": "60771de15a94c816",
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
  "x": 630,
  "y": 180,
  "wires": [
    [
      "baca872288691776"
    ]
  ]
}

module.exports = Node;