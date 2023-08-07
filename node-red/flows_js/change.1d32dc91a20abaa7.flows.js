const Node = {
  "id": "1d32dc91a20abaa7",
  "type": "change",
  "z": "6cc161e748b99815",
  "name": "Prod. env.",
  "rules": [
    {
      "t": "set",
      "p": "eidasPrivateKey",
      "pt": "global",
      "to": "PROD_EIDASPRIVATEKEY",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "X-IBM-Client-Id",
      "pt": "global",
      "to": "PRODUKTIONSKEY",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "X-IBM-Client-Secret",
      "pt": "global",
      "to": "PRODUKTIONSSECRET",
      "tot": "env",
      "dc": true
    },
    {
      "t": "delete",
      "p": "query_param",
      "pt": "flow"
    },
    {
      "t": "delete",
      "p": "query_param1",
      "pt": "flow"
    },
    {
      "t": "delete",
      "p": "query_param2",
      "pt": "flow"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 600,
  "y": 80,
  "wires": [
    [
      "28e89cae0a98b2c0",
      "d57cbca3b91dfc4b"
    ]
  ],
  "_order": 86
}

module.exports = Node;