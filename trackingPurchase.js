var request = require("request");

var options = { method: 'POST',
  url: 'http://mkpservice.moaee.com/tracking_purchase/',
  headers: 
   { 'Postman-Token': 'c4c02962-3851-46c0-a25e-87d11b624fa2',
     'cache-control': 'no-cache',
     Accept: 'application/json',
     'Content-Type': 'application/json' },
  body: 
   { api_key: 'D92F63F965E1C',
     purchase_id: '102763',
     email: 'youremail@domain.com' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
