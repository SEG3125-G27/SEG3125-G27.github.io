// module.exports =function(app,urlencodedParser){


//   app.get('/', function(req, res){
//       res.render('index');
//   });

//   app.get('/contact', function(req, res){
//       res.render('contact', {qs: req.query});
//   });

//   app.post('/contact', urlencodedParser, function(req, res){
//       console.log(req.body);
//       res.render('contact-success', {data: req.body});
//   });

//   app.get('/questionnaire', function(req, res){
//       res.render('questionnaire', {qs: req.query});
//   });

//   app.post('/questionnaire', urlencodedParser, function(req, res){
//       console.log(req.body);
//       res.render('questionnaire-success', {data: req.body});
//   });

//   app.get('/profile/:name', function(req, res){
//       var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
//       res.render('profile', {person: req.params.name, data: data});
//   });

// }

// required packages
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var fs = require('fs');

// read the data file
function readData(fileName){
    let dataRead = fs.readFileSync('./data/' + fileName + '.json');
    let infoRead = JSON.parse(dataRead);
    return infoRead;
}

// read the data file
function writeData(info, fileName){
    data = JSON.stringify(info);
    fs.writeFileSync('./data/' + fileName + '.json', data);
}

// update the data file, I use "name" to be equal to fruit, or animal or color
// to match with the file names
// I assume we always just add 1 to a single item
function combineCounts(name, value){
    // console.log(value);
    info = readData(name);
     // will be useful for text entry, since the item typed in might not be in the list
    var found = 0;
    for (var i=0; i<info.length; i++){
        if (info[i][name] === value){
            info[i].count = parseInt(info[i].count) + 1;
            found = 1;
        }
    }
    if (found === 0){
        info.push({[name] : value, count: 1});
    }
    writeData(info, name);
}

// This is the controler per se, with the get/post
module.exports = function(app){

    // when a user goes to localhost:3000/analysis
    // serve a template (ejs file) which will include the data from the data files
    app.get('/analysis', function(req, res){
        var appealing = readData("appealing");
        var bestDesignPage = readData("bestDesignPage");
        var comments = readData("comments");
        var firstname = readData("firstname");
        var Genre = readData("Genre");
        var lastname = readData("lastname");
        var lastRead = readData("lastRead");
        var likeShoppingCart = readData("likeShoppingCart");
        var primaryLanguage = readData("primaryLanguage");
        var recentPurchase = readData("recentPurchase");
        res.render('showResults', {results: [appealing, bestDesignPage, comments, firstname, Genre, lastname, lastRead, likeShoppingCart, primaryLanguage, recentPurchase]});
        console.log([appealing, bestDesignPage, comments, firstname, Genre, lastname, lastRead, likeShoppingCart, primaryLanguage, recentPurchase]);
    });

    // when a user goes to localhost:3000/niceSurvey
    // serve a static html (the survey itself to fill in)
    // app.get('/questionnaire', function(req, res){
    //     res.sendFile(__dirname+'/views/questionnaire');
    // });

    app.get('/questionnaire', function(req, res){
        res.render('questionnaire', {qs: req.query});
    });

    // when a user types SUBMIT in localhost:3000/niceSurvey 
    // the action.js code will POST, and what is sent in the POST
    // will be recuperated here, parsed and used to update the data files
    app.post('/questionnaire', urlencodedParser, function(req, res){
        console.log(req.body);
        var json = req.body;
        for (var key in json){
            console.log(key + ": " + json[key]);
            // in the case of checkboxes, the user might check more than one
            if ((key === "Genre") && (json[key].length === 2)){
                for (var item in json[key]){
                    combineCounts(key, json[key][item]);
                }
            }
            else {
                combineCounts(key, json[key]);
            }
        }
        // mystery line... (if I take it out, the SUBMIT button does change)
        // if anyone can figure this out, let me know!
        // res.sendFile(__dirname + "/views/questionnaire.html");
        res.render('questionnaire-success', {data: req.body});
    });

    // app.post('/questionnaire', urlencodedParser, function(req, res){
    //     console.log(req.body);
    //     res.render('questionnaire-success', {data: req.body});
    // });
    

};
