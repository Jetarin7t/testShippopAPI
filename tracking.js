var request = require("request");

var options = { method: 'POST',
  url: 'http://mkpservice.moaee.com/tracking/',
  headers: 
   { 'Postman-Token': 'd0dc0afd-8fad-4b11-97cb-6ab084446958',
     'cache-control': 'no-cache',
     Accept: 'application/json',
     'Content-Type': 'application/json' },
  body: { tracking_code: 'EY337053662TH' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
