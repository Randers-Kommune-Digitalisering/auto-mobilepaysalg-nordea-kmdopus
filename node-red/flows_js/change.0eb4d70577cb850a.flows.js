const Node = {
  "id": "0eb4d70577cb850a",
  "type": "change",
  "z": "2bddb141f0269626",
  "g": "fa9c0eb18149dc68",
  "name": "params",
  "rules": [
    {
      "t": "set",
      "p": "method",
      "pt": "flow",
      "to": "POST",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "path",
      "pt": "flow",
      "to": "/corporate/v2/authorize/token",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "content-type",
      "pt": "flow",
      "to": "application/x-www-form-urlencoded",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "data.grant_type",
      "pt": "flow",
      "to": "authorization_code",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "data.code",
      "pt": "flow",
      "to": "exchange_code",
      "tot": "global"
    },
    {
      "t": "set",
      "p": "step",
      "pt": "flow",
      "to": "4",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 620,
  "y": 920,
  "wires": [
    [
      "7a7b99685c649752"
    ]
  ]
}

module.exports = Node;