module.exports =function(app,urlencodedParser){


  app.get('/', function(req, res){
      res.render('index');
  });

  app.get('/contact', function(req, res){
      res.render('contact', {qs: req.query});
  });

  app.post('/contact', urlencodedParser, function(req, res){
      console.log(req.body);
      res.render('contact-success', {data: req.body});
  });

  app.get('/questionnaire', function(req, res){
      res.render('questionnaire', {qs: req.query});
  });

  app.post('/questionnaire', urlencodedParser, function(req, res){
      console.log(req.body);
      res.render('questionnaire-success', {data: req.body});
  });

  app.get('/profile/:name', function(req, res){
      var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
      res.render('profile', {person: req.params.name, data: data});
  });

}