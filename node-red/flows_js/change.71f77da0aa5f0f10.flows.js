const Node = {
  "id": "71f77da0aa5f0f10",
  "type": "change",
  "z": "2bddb141f0269626",
  "g": "18af70370c538179",
  "name": "set msg",
  "rules": [
    {
      "t": "set",
      "p": "pagenumberForUrl",
      "pt": "flow",
      "to": "\"&pagenumber=\"&$flowContext(\"pagenumber\")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "\"https://api.mobilepay.dk/v3/reporting/transactions?pagesize=600&startdate=\"&$globalContext(\"startdate\")&\"&enddate=\"&$globalContext(\"enddate\")&\"&pagenumber=\"&$flowContext(\"pagenumber\")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "headers.Authorization",
      "pt": "msg",
      "to": "\"Bearer \"&$env(\"HOVEDKEY\")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "headers.Content-Type",
      "pt": "msg",
      "to": "application/json",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 560,
  "y": 60,
  "wires": [
    [
      "3c71061cf19d1f34"
    ]
  ]
}

module.exports = Node;