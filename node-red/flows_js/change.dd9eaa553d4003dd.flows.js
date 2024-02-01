const Node = {
  "id": "dd9eaa553d4003dd",
  "type": "change",
  "z": "5a8afc5afb89916f",
  "g": "e8ac061ee2e34438",
  "name": "set msg.headers",
  "rules": [
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
    },
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "\"https://api.mobilepay.dk/v3/reporting/transactions?pagesize=1000&startdate=\"&$globalContext(\"startdate\")&\"&enddate=\"&$globalContext(\"enddate\")\t",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 450,
  "y": 60,
  "wires": [
    [
      "647a8e3f4b2e4f18"
    ]
  ],
  "_order": 130
}

module.exports = Node;