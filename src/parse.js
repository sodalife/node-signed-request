var crypto = require('crypto')
var base64url = require('base64-url')

function sign (payload, secret) {
  return crypto.createHmac('sha256', secret).update(payload).digest().toString('utf8')
}

module.exports = function parse(signedRequest, secret) {
  var fragments = signedRequest.split('.', 2)

  // decode the data
  var signature = base64url.decode(fragments[0])

  // confirm the signature
  if (sign(fragments[1], secret) !== signature) {
    throw new Error('Bad Signed JSON signature!');
  }

  return JSON.parse(base64url.decode(fragments[1]))
}
