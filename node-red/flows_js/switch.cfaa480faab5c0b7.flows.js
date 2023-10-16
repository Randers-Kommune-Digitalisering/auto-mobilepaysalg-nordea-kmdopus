const Node = {
  "id": "cfaa480faab5c0b7",
  "type": "switch",
  "z": "0b526691b09a2646",
  "g": "f51cc7b4f0bee577",
  "name": "Hvis auth udløbet",
  "property": "list_http_code",
  "propertyType": "global",
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
  "x": 730,
  "y": 100,
  "wires": [
    [
      "0df363702703d9c9"
    ]
  ],
  "_order": 152
}

module.exports = Node;