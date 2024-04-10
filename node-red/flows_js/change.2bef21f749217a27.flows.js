const Node = {
  "id": "2bef21f749217a27",
  "type": "change",
  "z": "2bddb141f0269626",
  "g": "d6d5f4ec783b7505",
  "name": "Skriv mail",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "Indlæsningen af bankposteringer kræver din godkendelse",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "topic",
      "pt": "msg",
      "to": "Godkendelse af automatisk bankindlæsning (autogenereret mail)",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "adminAuthAttempt",
      "pt": "global",
      "to": "0",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1700,
  "y": 800,
  "wires": [
    [
      "c9b71d6eea7c0ed6"
    ]
  ]
}

module.exports = Node;