# signed-request

## Usage
```javascript
var parse = require('@sodalife/signed-request').parse

var payload = parse(signedRequest, process.env.CLIENT_SECRET)
console.log(payload)
```
