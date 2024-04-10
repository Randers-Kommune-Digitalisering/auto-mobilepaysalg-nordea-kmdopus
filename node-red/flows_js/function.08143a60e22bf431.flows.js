const Node = {
  "id": "08143a60e22bf431",
  "type": "function",
  "z": "2bddb141f0269626",
  "g": "6bdc935c9bb94ddd",
  "name": "restructure data",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [
    {
      "var": "csv",
      "module": "csv-parser"
    }
  ],
  "x": 400,
  "y": 340,
  "wires": [
    [
      "52442bef0282d354"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, csv) {
  let omp_headers = ["Artskonto", "Omkostningssted", "PSP-element", "Profitcenter", "Ordre", "Debet/kredit", "Beløb", "Næste agent", "Tekst", "Betalingsart", "Påligningsår", "Betalingsmodtagernr.", "Betalingsmodtagernr.kode", "Ydelsesmodtagernr.", "Ydelsesmodtagernr.kode", "Ydelsesperiode fra", "Ydelsesperiode til", "Oplysningspligtnr.", "Oplysningspligtmodtagernr.kode", "Oplysningspligtkode", "Netværk", "Operation", "Mængde", "Mængdeenhed", "Referencenøgle"];
  global.set("omp_headers", omp_headers.join(', '));
  
  const jsonData = msg.payload.map((data, index) => {
      const cleanedData = Object.fromEntries(
          Object.entries(data).map(([key, value]) => [key, String(value)])
      );
  
      const {
          name,
          myShopNumber,
          brandId,
          Posteringstekst,
          Artskonto,
          PSP
      } = cleanedData;
  
      return [
          { name: "name", value: name },
          { name: "myShopNumber", value: myShopNumber},
          { name: "brandId", value: brandId },
          { Posteringstekst, Artskonto, PSP },
          { ruleId: index }
      ];
  });
  
  const rules = jsonData || [];
  
  msg.payload = rules;
  global.set("konteringsregler", rules);
  
  return msg;
  
}

module.exports = Node;