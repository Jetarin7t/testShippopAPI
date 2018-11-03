var request = require("request");

var options = { method: 'POST',
  url: 'http://mkpservice.moaee.com/confirm/',
  headers: 
   { 'Postman-Token': 'c400dbae-68f2-41f6-ba61-73fb8263b1c7',
     'cache-control': 'no-cache',
     Accept: 'application/json',
     'Content-Type': 'application/json' },
  body: { api_key: 'D92F63F965E1C', purchase_id: '102763' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
