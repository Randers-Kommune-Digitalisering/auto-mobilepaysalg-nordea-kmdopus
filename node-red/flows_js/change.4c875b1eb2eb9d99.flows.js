const Node = {
  "id": "4c875b1eb2eb9d99",
  "type": "change",
  "z": "5a8afc5afb89916f",
  "g": "f51cc7b4f0bee577",
  "name": "params",
  "rules": [
    {
      "t": "set",
      "p": "method",
      "pt": "flow",
      "to": "GET",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "path",
      "pt": "flow",
      "to": "/account/connect/authorize",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "response_type",
      "pt": "flow",
      "to": "code%20id_token",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "response_mode",
      "pt": "flow",
      "to": "form_post",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "client_id",
      "pt": "flow",
      "to": "",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "redirect_url",
      "pt": "flow",
      "to": "",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "scope",
      "pt": "flow",
      "to": "transactionreporting",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "merchant_vat",
      "pt": "flow",
      "to": "DK29189668",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "step",
      "pt": "global",
      "to": "1",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 620,
  "y": 60,
  "wires": [
    []
  ],
  "_order": 147
}

module.exports = Node;