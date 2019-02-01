var request = require("request");

var options = { method: 'POST',
  url: 'https://reazon.eu.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"bAXVejCl0B19XQIKuL3rQTgEIQzYhp5A","client_secret":"oc09KEUis8ht4ZMBHeJ8-njiqzz6avjsYaTahlZYcpQ1p_wufZdeEXJ0_KyjgUWF","audience":"https://api.reazon.nl/","grant_type":"client_credentials"}' };

request(options, function (error, response, body) {

  console.log.statuscode;
  if(!error && response.statuscode == 200)
    console.log(body);
    console.log.statuscode;

  if (error) throw new Error(error);
    console.log(body);
});


