var crypto = require('crypto')
var base64url = require('base64-url')

function sign (text, secret) {
  return base64url.escape(crypto.createHmac('sha256', secret).update(text).digest('base64'))
}

exports.parse = function parse (request, secret) {
  var fragments = request.split('.', 2)

  // confirm the signature
  if (sign(fragments[1], secret) !== fragments[0]) {
    throw new Error('Bad Signed JSON signature!');
  }

  return JSON.parse(base64url.decode(fragments[1]))
}

exports.stringify = function stringify (data, secret) {
  var payload = base64url.encode(JSON.stringify(data))
  var signature = sign(payload, secret, 'base64')
  return [signature, payload].join('.')
}
