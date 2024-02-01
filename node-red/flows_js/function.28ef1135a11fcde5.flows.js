const Node = {
  "id": "28ef1135a11fcde5",
  "type": "function",
  "z": "5a8afc5afb89916f",
  "g": "608c296403fab569",
  "name": "Matching",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 240,
  "y": 120,
  "wires": [
    [
      "b73eae993793d2e5"
    ]
  ],
  "_order": 140
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  let felterMedID = ["myShopNumber", "brandId"];
  let omposteringsbilag = [];
  let nomatch_list = [];
  let omp_headers = global.get("omp_headers").split(", ");
  
  let transactions = flow.get("transactions");
  transactions = Array.isArray(transactions) ? transactions.filter(transaction => transaction.type !== "Transfer") : [];
  
  // Scope: Tjek alle konteringsregler igennem, regel for regel
  for (let regel of global.get("konteringsregler")) {
      let salgssumSalgssted = 0;
  
      // For hver transaktion
      for (let payment of transactions) {
  
          // For hver salgstedstype
          for (let i = 0; i < felterMedID.length; i++) {
              let searchword = regel[i].value !== null ? String(regel[i].value).toLowerCase() : null;
              let idPointer = regel[i];
  
              if (searchword !== null) {
                  let match_searchword;
                  if (searchword == (payment[idPointer]).toLowerCase()) {
                      match_searchword = true;
                  } else {
                      match_searchword = false;
                  }
  
                  if (match_searchword) {
                      let beloeb = parseFloat(payment.amount.replace(/[^0-9.,-]/g, '').replace(',', '.'));
                      salgssumSalgssted += beloeb;
                  }
              }
          }
      }
  
      let bankdebkred = salgssumSalgssted < 0 ? 'Kredit' : 'Debet';
      let driftdebkred = bankdebkred === 'Debet' ? 'Kredit' : 'Debet';
      let psp = regel[3].PSP ? regel[3].PSP : '';
  
      flow.set("posteringsdata_til_drift", [regel[3].artskonto, '', psp, '', '', driftdebkred, salgssumSalgssted, '', regel[3].Posteringstekst, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
      flow.set("posteringsdata_til_90510000", ['90510000', '', '', '', '', bankdebkred, salgssumSalgssted, '', regel[3].Posteringstekst, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
  
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
  
  flow.set("omposteringsarray", omposteringsbilag);
  
  flow.set("filename", "/data/output/" + flow.get("time_of_origin") + ".csv")
  
  return msg;
}

module.exports = Node;