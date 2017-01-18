 // app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes
			
        // sample api route
		
		    app.get('/api/nerds', function(req, res) {
			
			db = req.db;
			var collection = db.get('nerds');
			
			collection.find({},{"sort" : {'_id':-1}},function(err,nerds)
			{
				if(err)
				{
					res.send(err); 
				}
				else
				{
					res.send(nerds); // return all nerds	
				}
			});		
			
            
        }); 
		////////Finding Single Nerd for Edit///////
		
		app.post('/api/getOneNerd', function(req,res){
			var id = req.body.id;
			//console.log(id);
			db=req.db;
			var collection=db.get('nerds');
			var query={'_id':id};
				collection.findOne(query , function(err,nerd)
			{
				if(err)
				{
					res.send(err); 
				}
				else
				{
					console.log(nerd);
					res.send(nerd); // return 
				}
			});	
			
		});
		
		// route to handle delete goes here (app.delete)
		app.post('/api/deleteNerds', function(req,res){
			var id = req.body.id;
			var db = req.db;
			//console.log();
			var collection = db.get('nerds');
			collection.remove({_id:id},function(error,success){
				if (error)
					res.send(error);		
				else{
					res.send('deleted');
				}
			});
			
		});
		
        // route to handle creating goes here (app.post)
		//update can also be done if the id is present, update else create 
        app.post('/api/createNerds',function(req,res){
			
			name=req.body.name;
			occupation=req.body.occupation;
			var db=req.db;
			var collection = db.get('nerds');
			collection.insert({
				'name':name,
				'occupation':occupation
			}, function(error, success){
				if(error) 
				res.send(error);
				else{
					res.send('done');
				}
			});
			
		});
			
			
			//update Nerds Code
			
			
		app.post('/api/UpdateNerds',function(req,res){
			
			name=req.body.name;
			occupation=req.body.occupation;
			id=req.body.id;
			var db=req.db;
			var collection = db.get('nerds');
			collection.update({
				'_id':id
			},{$set:{'name':name,
					'occupation':occupation
			}},   
			function(error, success){
				if(error) 
				res.send(error);
				else{
					res.send('Updated');
				}
			});
			
		});	
		////////////////PayPal Payments ////////////////////	
			app.post('/api/PayPal',function (req,res){
				
				var Paypal = require('paypal-adaptive');
 
				var paypalSdk = new Paypal({
					userId:    'imranarshad_api1.leadconcept.com',
					password:  'EGVAK2J8GPPZ4M4C',
					signature: 'AFcWxV21C7fd0v3bYYYRCpSSRl31AgSetZ4FTD9qojoYQWoi8XlS--k5',
					sandbox:   true //defaults to false 
				});
				var requestData = {
					requestEnvelope: {
					errorLanguage:  'en_US',
					detailLevel:    'ReturnAll'
					},
					payKey: 'AP-1234567890'
				};


				paypalSdk.callApi('AdaptivePayments/PaymentDetails', requestData, function (err, response) {
						if (err) {
							// You can see the error 
							console.log(err);
							//And the original Paypal API response too 
							console.log(response);
						} else {
							// Successful response 
							console.log(response);
						}
					});
			});
        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };
