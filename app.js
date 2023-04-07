const crypto = require('crypto');
const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Reading keys from files.
const privateKey = fs.readFileSync('private.key');

app.use(express.json());

app.post('/verify', (req, res) => {
	const mac = req.body.mac;
	const password = req.body.password;

	// TODO need to verify mac and password
  if (mac === '00:00:00:00:00:00' && password === '1234') {
		const data = `${mac}.${password}`;
		const encmsg = crypto.privateEncrypt(privateKey, Buffer.from(data, "utf-8")).toString('base64');

		res.send({
			result: true,
			token: encmsg,
		});
	} else {
		res.send({
			result: false
		});
	}
})

app.listen(port, () => {
  console.log(`factoryveri listening on port ${port}`)
})