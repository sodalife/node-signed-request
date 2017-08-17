import fs from 'fs'
import test from 'ava'

import { parse } from '..'

let fixture = (filename) => fs.readFileSync(`${__dirname}/fixtures/${filename}`, 'utf8')

test('parse signed_request', (t) => {
  t.deepEqual(parse(fixture('signed_request.txt'), fixture('secret.txt')), JSON.parse(fixture('payload.json')))
})
