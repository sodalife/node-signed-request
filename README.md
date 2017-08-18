# signed-request
[![](https://img.shields.io/npm/v/@sodalife/signed-request.svg)](https://www.npmjs.org/packages/@sodalife/signed-request)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Usage
- parse signed request to payload

		```javascript
		var parse = require('@sodalife/signed-request').parse

		var payload = parse(signedRequest, process.env.CLIENT_SECRET)
		console.log(payload)
		```
- stringify payload to signed request

		```javascript
		var stringify = require('@sodalife/signed-request').stringify

		var signedRequest = stringify(payload, process.env.CLIENT_SECRET)
		console.log(signedRequest)
		```
