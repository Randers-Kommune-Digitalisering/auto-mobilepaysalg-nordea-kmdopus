const Node = {
  "id": "17d702b6277c4c03",
  "type": "change",
  "z": "5a8afc5afb89916f",
  "name": "INFO",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"issuer\":\"https://api.mobilepay.dk/merchant\",\"jwks_uri\":\"https://api.mobilepay.dk/merchant-authentication-openidconnect/.well-known/openid-configuration/jwks\",\"authorization_endpoint\":\"https://admin.mobilepay.dk/account/connect/authorize\",\"token_endpoint\":\"https://api.mobilepay.dk/merchant-authentication-openidconnect/connect/token\",\"end_session_endpoint\":\"https://admin.mobilepay.dk/account/connect/endsession\",\"revocation_endpoint\":\"https://api.mobilepay.dk/merchant-authentication-openidconnect/connect/revocation\",\"introspection_endpoint\":\"https://api.mobilepay.dk/merchant-authentication-openidconnect/connect/introspect\",\"backchannel_authentication_endpoint\":\"https://admin.mobilepay.dk/account/connect/ciba\",\"frontchannel_logout_supported\":true,\"frontchannel_logout_session_supported\":true,\"backchannel_logout_supported\":true,\"backchannel_logout_session_supported\":true,\"scopes_supported\":[\"openid\",\"invoice\",\"subscriptions\",\"transactionreporting\",\"merchantpayments\",\"webhooks\"],\"claims_supported\":[\"sub\",\"merchant_id\",\"merchant_vat\"],\"grant_types_supported\":[\"authorization_code\",\"client_credentials\",\"refresh_token\",\"hybrid\"],\"response_types_supported\":[\"code\",\"token\",\"id_token\",\"id_token token\",\"code id_token\",\"code token\",\"code id_token token\"],\"response_modes_supported\":[\"query\",\"form_post\"],\"token_endpoint_auth_methods_supported\":[\"client_secret_basic\",\"client_secret_post\"],\"id_token_signing_alg_values_supported\":[\"RS256\"],\"subject_types_supported\":[\"public\"],\"code_challenge_methods_supported\":[\"plain\",\"S256\"],\"request_parameter_supported\":true,\"request_object_signing_alg_values_supported\":[\"RS256\",\"RS384\",\"RS512\",\"PS256\",\"PS384\",\"PS512\",\"ES256\",\"ES384\",\"ES512\",\"HS256\",\"HS384\",\"HS512\"],\"authorization_response_iss_parameter_supported\":true,\"backchannel_token_delivery_modes_supported\":[\"poll\"],\"backchannel_user_code_parameter_supported\":true}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 150,
  "y": 560,
  "wires": [
    []
  ],
  "_order": 174
}

module.exports = Node;