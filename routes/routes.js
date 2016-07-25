//require the api script
var api = require('../servers/api.js')

var appRouter = function(app){

  //tells express to allow access control origins, then move to the next middleware;
  app.all('/', function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-with");
    next();
  });

  //send data to the api
  app.post('/', function(req, res){
    api(req, res);
  });

}
module.exports = appRouter;
