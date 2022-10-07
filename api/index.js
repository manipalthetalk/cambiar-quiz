import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
const port = process.env.PORT ?? 5000;

const serverUrl = '';
const allowedOrigins = ['http://localhost:5000', serverUrl];
const options = {
	origin: allowedOrigins
};

const initData = async () => {
	fs.readFile('./_files/questions.json','utf8' ,(err, data) => {
		console.log(data);
	});

}

app.use(cors(options));
app.use(bodyParser.json());

app.route('/questions')
.get(async (req, res) => {

})

app.listen(port, () => {
	initData()
	console.log('Listening on http://localhost:5000/')
});
