const Node = {
  "id": "da13a3395ded5e11",
  "type": "change",
  "z": "2bddb141f0269626",
  "g": "9f5e7f69a9319c00",
  "name": "params, hovedkonto",
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
      "p": "path",
      "pt": "flow",
      "to": "/corporate/premium/v4/accounts",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "path_suffix",
      "pt": "flow",
      "to": "/transactions",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "query_param",
      "pt": "flow",
      "to": "HOVEDKONTO",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "query_param1",
      "pt": "flow",
      "to": "2024-02-13",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "query_param2",
      "pt": "flow",
      "to": "2024-02-13",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "step",
      "pt": "flow",
      "to": "5",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 460,
  "y": 1020,
  "wires": [
    [
      "632cc65c2df51983"
    ]
  ]
}

module.exports = Node;