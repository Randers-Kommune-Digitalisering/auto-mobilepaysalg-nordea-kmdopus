const Node = {
  "id": "bf20a6756431d283",
  "type": "change",
  "z": "5a8afc5afb89916f",
  "g": "e8ac061ee2e34438",
  "name": "set pagenumber = 1",
  "rules": [
    {
      "t": "set",
      "p": "pagenumber",
      "pt": "flow",
      "to": "1",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "transactions",
      "pt": "flow",
      "to": "{}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 470,
  "y": 60,
  "wires": [
    [
      "dd9eaa553d4003dd"
    ]
  ],
  "_order": 147
}

module.exports = Node;