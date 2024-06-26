const Node = {
  "id": "ad893c40a4b9d6f9",
  "type": "function",
  "z": "7367c6ffae9acd60",
  "g": "248b6faf1bd25dc8",
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
  "x": 420,
  "y": 80,
  "wires": [
    [
      "66b81c6ebf307b20"
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