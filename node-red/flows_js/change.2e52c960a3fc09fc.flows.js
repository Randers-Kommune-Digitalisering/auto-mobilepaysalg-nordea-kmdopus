const Node = {
  "id": "2e52c960a3fc09fc",
  "type": "change",
  "z": "2bddb141f0269626",
  "g": "fa9c0eb18149dc68",
  "name": "Clean context",
  "rules": [
    {
      "t": "delete",
      "p": "_msgid",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "headers",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "statusCode",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "responseUrl",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "redirectList",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "retry",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "url",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "data",
      "pt": "flow"
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
    },
    {
      "t": "delete",
      "p": "path_suffix",
      "pt": "flow"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 340,
  "y": 920,
  "wires": [
    [
      "1f0cf3e7517a3a8f"
    ]
  ]
}

module.exports = Node;