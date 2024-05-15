const Node = {
  "id": "3231fa1c8adfd843",
  "type": "function",
  "z": "2bddb141f0269626",
  "g": "60771de15a94c816",
  "name": "matching",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 480,
  "y": 180,
  "wires": [
    [
      "59158a3cb8c83408"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  let felterMedID = ["myShopNumber", "brandId"];
  let omposteringsbilag = [];
  let omp_headers = global.get("omp_headers").split(", ");
  
  let transactions = flow.get("transactions");
  transactions = Array.isArray(transactions) ? transactions.filter(transaction => transaction.type !== "Transfer") : [];
  
  
  
  // Scope: Check all konteringsregler, rule by rule
  for (let regel of global.get("konteringsregler")) {
      let totalAmount = 0.0;
  
      // For hver transaktion
      for (let payment of transactions) {
  
          // For hver salgstedstype
          for (let i = 0; i < felterMedID.length; i++) {
              let searchword = regel[i + 1].value !== undefined ? String(regel[i + 1].value).toLowerCase() : null;   // i + 1 fordi førse element i hver regel er navn-objektet
  
              let idPointer = regel[i + 1].name;
              let searchwordTarget = String(payment[idPointer]).toLowerCase();
  
              if (searchword !== null && searchword === searchwordTarget) {
                  totalAmount += parseFloat(payment.amount);
              }
          }
      }
  
      // Convert totalAmount to a formatted string
      totalAmount = totalAmount.toLocaleString('da-DK');
  
      // Check if totalAmount is greater than 0 before processing
      if (totalAmount > 0) {
          let bankdebkred = totalAmount < 0 ? 'Kredit' : 'Debet';
          let driftdebkred = bankdebkred === 'Debet' ? 'Kredit' : 'Debet';
          let psp = regel[3].PSP ? regel[3].PSP : '';
  
          flow.set("posteringsdata_til_drift", [regel[3].Artskonto, '', psp, '', '', driftdebkred, totalAmount, '', regel[3].Posteringstekst, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
          flow.set("posteringsdata_til_90510000", ['90510000', '', '', '', '', bankdebkred, totalAmount, '', regel[3].Posteringstekst, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
  
          let output_posteringsdata_til_drift = {};
          let output_posteringsdata_til_90510000 = {};
  
          for (let i = 0; i < omp_headers.length; i++) {
              output_posteringsdata_til_drift[omp_headers[i]] = flow.get("posteringsdata_til_drift")[i];
              output_posteringsdata_til_90510000[omp_headers[i]] = flow.get("posteringsdata_til_90510000")[i];
          }
  
          omposteringsbilag.push(output_posteringsdata_til_drift);
          omposteringsbilag.push(output_posteringsdata_til_90510000);
          output_posteringsdata_til_drift = {};
          output_posteringsdata_til_90510000 = {};
      }
  
  }
  
  flow.set("omposteringsarray", omposteringsbilag);
  
  flow.set("filename", "/data/output/" + global.get("dateOfOrigin") + ".csv")
  
  return msg;
}

module.exports = Node;