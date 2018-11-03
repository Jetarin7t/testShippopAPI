var request = require("request");

var options = { method: 'POST',
  url: 'http://mkpservice.moaee.com/pricelist/',
  headers: 
   { 'Postman-Token': 'f89f8342-d2e8-4095-9cdd-2ed525361303',
     'cache-control': 'no-cache',
     Accept: 'application/json',
     'Content-Type': 'application/json' },
  body: 
   { api_key: 'D92F63F965E1C',
     data: 
      [ { from: 
           { name: 'ชื่อผู้ส่ง - นามสกุล',
             address: '522 ซอยรัชดาภิเษก 26 ถนนรัชดาภิเษก  แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพมหานคร',
             district: '-',
             state: '-',
             province: '-',
             postcode: '10310',
             tel: '0929053355' },
          to: 
           { name: 'ชื่อผู้รับ นามสกุล',
             address: '522 ซอยรัชดาภิเษก 26 ถนนรัชดาภิเษก  แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพมหานคร',
             district: '-',
             state: '-',
             province: '-',
             postcode: '34190',
             tel: '0929053355' },
          parcel: { name: '-', weight: '1', width: '1', length: '1', height: '1' },
          showall: 'true' } ] },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
