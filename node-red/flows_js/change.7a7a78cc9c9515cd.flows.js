const Node = {
  "id": "7a7a78cc9c9515cd",
  "type": "change",
  "z": "0b526691b09a2646",
  "g": "fe8a8f3f224328c7",
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
      "p": "path",
      "pt": "flow",
      "to": "/corporate/premium/v3/accounts",
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
      "to": "sidste_bankdag",
      "tot": "global"
    },
    {
      "t": "set",
      "p": "query_param2",
      "pt": "flow",
      "to": "sidste_bankdag",
      "tot": "global"
    },
    {
      "t": "set",
      "p": "step",
      "pt": "global",
      "to": "5",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 260,
  "y": 140,
  "wires": [
    [
      "aae108b7e4ba1f0f"
    ]
  ],
  "_order": 177
}

module.exports = Node;