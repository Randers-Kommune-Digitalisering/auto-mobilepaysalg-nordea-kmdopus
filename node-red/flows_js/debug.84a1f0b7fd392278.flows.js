const Node = {
  "id": "84a1f0b7fd392278",
  "type": "debug",
  "z": "2bddb141f0269626",
  "g": "18af70370c538179",
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