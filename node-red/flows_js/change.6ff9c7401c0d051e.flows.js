const Node = {
  "id": "6ff9c7401c0d051e",
  "type": "change",
  "z": "5a8afc5afb89916f",
  "g": "f51cc7b4f0bee577",
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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1250,
  "y": 140,
  "wires": [
    [
      "f1aa1cc589875d84"
    ]
  ],
  "_order": 157
}

module.exports = Node;