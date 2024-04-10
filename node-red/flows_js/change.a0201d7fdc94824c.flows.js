const Node = {
  "id": "a0201d7fdc94824c",
  "type": "change",
  "z": "2bddb141f0269626",
  "g": "9f5e7f69a9319c00",
  "name": "💾",
  "rules": [
    {
      "t": "set",
      "p": "transactions",
      "pt": "flow",
      "to": "payload.response.transactions",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "list_http_code",
      "pt": "flow",
      "to": "payload.group_header.http_code",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 870,
  "y": 1020,
  "wires": [
    [
      "f2e76e0f25073c0c"
    ]
  ]
}

module.exports = Node;