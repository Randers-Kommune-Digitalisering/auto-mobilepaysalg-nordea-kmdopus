const Node = {
  "id": "dd9eaa553d4003dd",
  "type": "change",
  "z": "5a8afc5afb89916f",
  "g": "e8ac061ee2e34438",
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
      "to": "\"Bearer \"&$env(\"HOVEDNØGLE\")",
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
  "y": 100,
  "wires": [
    [
      "647a8e3f4b2e4f18"
    ]
  ],
  "_order": 130
}

module.exports = Node;