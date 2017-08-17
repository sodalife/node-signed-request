var crypto = require('crypto')
var base64url = require('./base64url')

function sign (text, secret, encoding) {
  return crypto.createHmac('sha256', secret).update(text).digest().toString(encoding || 'utf8')
}

exports.parse = function parse (signedRequest, secret, encoding) {
  var fragments = signedRequest.split('.', 2)

  // decode the data
  var signature = base64url.decode(fragments[0], encoding)

  // confirm the signature
  if (sign(fragments[1], secret, encoding) !== signature) {
    throw new Error('Bad Signed JSON signature!');
  }

  return JSON.parse(base64url.decode(fragments[1]), encoding)
}

exports.stringify = function stringify (data, secret, encoding) {
  var payload = base64url.encode(JSON.stringify(data), encoding)
  var signature = sign(payload, secret, encoding)
  return [base64url.encode(signature, encoding), payload].join('.')
}
