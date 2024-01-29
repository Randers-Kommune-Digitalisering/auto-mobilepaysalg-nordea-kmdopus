const Node = {
  "id": "54df45c38675bdda",
  "type": "function",
  "z": "5a8afc5afb89916f",
  "name": "crypto",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [
    {
      "var": "moment",
      "module": "moment"
    },
    {
      "var": "uuid",
      "module": "uuid"
    },
    {
      "var": "forge",
      "module": "node-forge"
    },
    {
      "var": "CryptoJS",
      "module": "crypto-js"
    }
  ],
  "x": 730,
  "y": 320,
  "wires": [
    []
  ],
  "_order": 175
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, moment, uuid, forge, CryptoJS) {
  function generateRandomByteArray(length) {
      const wordArray = CryptoJS.lib.WordArray.random(length);
  
      const byteArray = [];
      for (let i = 0; i < length; i++) {
          byteArray.push(wordArray.words[i] & 0xff);
      }
  
      return new Uint8Array(byteArray);
  }
  
  function generateRandomState() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const stateLength = 16; // You can adjust the length of the random state as needed
  
      let state = '';
      for (let i = 0; i < stateLength; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          state += characters.charAt(randomIndex);
      }
  
      return state;
  }
  
  function generateCodeChallenge(buffer) {
      const hash = CryptoJS.SHA256(buffer);
      const base64UrlEncoded = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(hash.toString()));
      
      return base64UrlEncoded;
  }
  
  function generateNonce() {
      const randomValue = generateRandomByteArray(16); // You can adjust the length as needed
  
      flow.set("nonce_value", CryptoJS.enc.Base64.stringify(randomValue));
  
      const hash = CryptoJS.SHA256(CryptoJS.enc.Base64.stringify(randomValue));
  
      return hash.toString(CryptoJS.enc.Base64);
  }
  
  flow.set("state", generateRandomState());
  flow.set("code_challenge", generateCodeChallenge(generateRandomByteArray(20)));
  flow.set("nonce", generateNonce());
  
  return msg;
}

module.exports = Node;