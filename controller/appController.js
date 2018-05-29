exports.home = function(req, res) {

  var objMenu =  [{
    "id" : "1",
    "Title" : "Hola mundo!",
  }];
 res.send(objMenu);
};
