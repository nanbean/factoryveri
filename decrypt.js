const crypto = require('crypto');
const fs = require('fs');

// Reading keys from files.
const publicKey = fs.readFileSync('public.key');

const data = fs.readFileSync('encrypted.txt', 'utf8');

const msg = crypto.publicDecrypt(publicKey, Buffer.from(data, 'base64'));
console.log(msg.toString());