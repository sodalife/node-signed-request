# signed-request
[![](https://img.shields.io/npm/v/@sodalife/signed-request.svg)](https://www.npmjs.org/packages/@sodalife/signed-request)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Usage
```javascript
var parse = require('@sodalife/signed-request').parse

var payload = parse(signedRequest, process.env.CLIENT_SECRET)
console.log(payload)
```
