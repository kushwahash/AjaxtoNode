const bodyParser = require('body-parser');
module.exports = function (app) {
	app.use(bodyParser.json({
		limit: '50mb'
	}));

	app.use(bodyParser.urlencoded({
		extended: true
	}));


	app.get('/service/getHello', function (req, res) {
		res.setHeader('Content-Type', 'application/json');
		var response = {
			code: 200,
			message: "Take hellos"
		}
		res.send(response);

	});

	app.post("/service/doCalculation", (req, res) => {
		res.setHeader('Content-Type', 'application/json');
		var response = {
			code: 200,
			message: "Sum Output",
			output: req.body.inputY + req.body.inputX
		}
		res.send(response);

	});
}