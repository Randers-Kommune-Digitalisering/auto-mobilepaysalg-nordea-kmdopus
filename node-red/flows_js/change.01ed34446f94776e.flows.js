const Node = {
  "id": "01ed34446f94776e",
  "type": "change",
  "z": "0b526691b09a2646",
  "g": "3d885db7955a47b8",
  "name": "bypass",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[{\"amount\":\"1494.00\",\"artskonto\":\"79000000\",\"message\":\"Viborg Kommune\",\"narrative\":\"Cap Viborg Meddelnr. 07004198123249\",\"psp\":\"xg-0000003071-00001\",\"transaction_id\":\"P5908764988202309070000846208\",\"type_description\":\"CAP\"},{\"amount\":\"27890.00\",\"artskonto\":\"95990009\",\"message\":\"SYGEDAGP.tlf89405555\",\"narrative\":\"Cap SYGEDAGP. Meddelnr. 07004263823249\",\"transaction_id\":\"P5908764988202309070000846207\",\"type_description\":\"CAP\"},{\"amount\":\"-23360.00\",\"artskonto\":\"40000000\",\"counterparty_account\":\"0004640586\",\"narrative\":\"Cap Sygedagpenge\",\"psp\":\"xg-0000000006-00007\",\"transaction_id\":\"P5908764988202309070000846206\",\"type_description\":\"CAP\"}]",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 880,
  "y": 600,
  "wires": [
    [
      "4f8011a7610b2e97"
    ]
  ],
  "_order": 199
}

module.exports = Node;