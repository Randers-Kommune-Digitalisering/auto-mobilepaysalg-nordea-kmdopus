const Node = {
  "id": "6f4acd89bb51aa56",
  "type": "change",
  "z": "2bddb141f0269626",
  "g": "fa9c0eb18149dc68",
  "name": "env. to msg",
  "rules": [
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "headers.Content-Type",
      "pt": "msg",
      "to": "Content-Type",
      "tot": "flow"
    },
    {
      "t": "set",
      "p": "headers.Signature",
      "pt": "msg",
      "to": "Signature",
      "tot": "flow"
    },
    {
      "t": "set",
      "p": "headers.Digest",
      "pt": "msg",
      "to": "Digest",
      "tot": "flow"
    },
    {
      "t": "set",
      "p": "headers.X-Nordea-Originating-Date",
      "pt": "msg",
      "to": "X-Nordea-Originating-Date",
      "tot": "flow"
    },
    {
      "t": "set",
      "p": "headers.X-Nordea-Originating-Host",
      "pt": "msg",
      "to": "X-Nordea-Originating-Host",
      "tot": "flow"
    },
    {
      "t": "set",
      "p": "headers.X-IBM-Client-Id",
      "pt": "msg",
      "to": "X-IBM-Client-Id",
      "tot": "flow"
    },
    {
      "t": "set",
      "p": "headers.X-IBM-Client-Secret",
      "pt": "msg",
      "to": "X-IBM-Client-Secret",
      "tot": "flow"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "data",
      "tot": "flow"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 810,
  "y": 800,
  "wires": [
    [
      "26e7a1f9f88df3ee"
    ]
  ]
}

module.exports = Node;