const Node = {
  "id": "b6038d75cf47e017",
  "type": "change",
  "z": "2bddb141f0269626",
  "g": "fa9c0eb18149dc68",
  "name": "💾",
  "rules": [
    {
      "t": "set",
      "p": "exchange_code",
      "pt": "global",
      "to": "payload.response.code",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "request_status",
      "pt": "global",
      "to": "payload.response.status",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "adminAuthAttempt",
      "pt": "flow",
      "to": "$globalContext('adminAuthAttempt') + 1",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 990,
  "y": 880,
  "wires": [
    [
      "f85f9d2570988531"
    ]
  ]
}

module.exports = Node;