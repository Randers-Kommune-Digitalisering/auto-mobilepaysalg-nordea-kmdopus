const Node = {
  "id": "b33873bc5ca0dcfc",
  "type": "change",
  "z": "2bddb141f0269626",
  "g": "fa9c0eb18149dc68",
  "name": "params",
  "rules": [
    {
      "t": "set",
      "p": "method",
      "pt": "flow",
      "to": "GET",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "query_param",
      "pt": "flow",
      "to": "access_id",
      "tot": "global"
    },
    {
      "t": "set",
      "p": "step",
      "pt": "flow",
      "to": "3",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 620,
  "y": 880,
  "wires": [
    [
      "01601ddb7de735ae"
    ]
  ]
}

module.exports = Node;