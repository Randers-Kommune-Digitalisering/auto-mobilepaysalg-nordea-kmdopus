const Node = {
  "id": "db3dc6da3e3f8126",
  "type": "change",
  "z": "97cc6bce53027f96",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "rules",
      "pt": "msg",
      "to": "$.payload ~> |$|\t{\t    \"value\": \t        type = \"number\" ?\t            value ~> $number() \t        :\t        type = \"bool\" ?\t            value = \"true\" ? true : false\t        :\t            value\t    \t}\t|",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 390,
  "y": 140,
  "wires": [
    [
      "35ba1ef03eb6f044"
    ]
  ],
  "_order": 97
}

module.exports = Node;