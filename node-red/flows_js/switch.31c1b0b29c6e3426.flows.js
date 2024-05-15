const Node = {
  "id": "31c1b0b29c6e3426",
  "type": "switch",
  "z": "2bddb141f0269626",
  "g": "fa9c0eb18149dc68",
  "name": "Auth expired",
  "property": "list_http_code",
  "propertyType": "flow",
  "rules": [
    {
      "t": "eq",
      "v": "401",
      "vt": "num"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 250,
  "y": 840,
  "wires": [
    [
      "e4d850011ccad60f"
    ]
  ]
}

module.exports = Node;