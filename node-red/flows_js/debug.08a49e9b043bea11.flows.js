const Node = {
  "id": "08a49e9b043bea11",
  "type": "debug",
  "z": "5a8afc5afb89916f",
  "g": "e8ac061ee2e34438",
  "name": "Request complete",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t   \"Message\": \"Data retrieved succesfully on request\",\t   \"Status Code\": msg.statusCode,\t   \"Antal transaktioner\": msg.payload.pageSize,\t   \"Timestamp\": $now()\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 995,
  "y": 60,
  "wires": [],
  "l": false
}

module.exports = Node;