var unrest = require("unirest")
var req = unrest ("GET", "http://localhost:3000/data?_limit=10")
var req1 = unrest("GET","http://localhost:3000/data");
req.headers({
"cache-control": "no-cache",
})
req. end(function (res){ 
if (res.error) throw new Error(res.error)
console.log(res.body)});


req1.end(function (res) {
  if (res.error) throw new Error(res,error)
  console.log("ddedededededfk vz vozjv nk vo gzr joiz hf z v h h nv h lboedededededede")
  console.log(res.body.filter((data) => data.attributes.title.en.startsWith("m")))
})