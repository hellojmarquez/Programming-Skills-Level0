import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const APP = express();
const PORT = 5000;

const users = [
	{
		nam: 'jon',
		pass: '123',
	},
	{
		nam: 'Kate Wong',
		pass: '@PASSujhp',
	},
];

let logTry = 3;
APP.use(express());
APP.use(cors());
APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(bodyParser.json());

APP.get('/', (req, res) => {
	return;
});
APP.post('/login', (req, res) => {
	if (req.method !== 'POST') return;
	const USER = req.body.user;
	const PASS = req.body.pass;

	if (logTry === 1)
		return res.status(401).send({ msg: 'System blocked', code: 401 });
	const USER_AUTH = users.filter(user => user.nam == USER);
	const PASS_AUTH = USER_AUTH.filter(user => user.pass == PASS);
	if (USER_AUTH.length == 0 || PASS_AUTH.length == 0) {
		logTry--;
		return res.status(401).send({
			msg: `User or password not found, tries remaining: ${logTry}`,
			code: 401,
			try: logTry,
		});
	}
	delete USER_AUTH[0].pass;
	res.status(200).send({ ...USER_AUTH[0], code: 200 });
});

APP.listen(PORT, () => {
	console.log(`running on port: ${PORT} `);
});
