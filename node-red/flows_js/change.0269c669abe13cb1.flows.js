const Node = {
  "id": "0269c669abe13cb1",
  "type": "change",
  "z": "5a8afc5afb89916f",
  "g": "e8ac061ee2e34438",
  "name": "💾",
  "rules": [
    {
      "t": "set",
      "p": "transactions",
      "pt": "flow",
      "to": "payload.transactions",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "nextPageNumber",
      "pt": "flow",
      "to": "payload.nextPageNumber",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 790,
  "y": 100,
  "wires": [
    [
      "f39870190694e62a",
      "08a49e9b043bea11"
    ]
  ],
  "_order": 134
}

module.exports = Node;