const Node = {
  "id": "250f7dc5f988e352",
  "type": "change",
  "z": "2bddb141f0269626",
  "name": "set msg",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "\"https://api.vipps.no/settlement/v1/ledgers\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 240,
  "y": 660,
  "wires": [
    [
      "63738d6cd82d7610"
    ]
  ]
}

module.exports = Node;