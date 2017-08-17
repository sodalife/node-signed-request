import test from 'ava'
import fixture from './helpers/fixture'

import { stringify } from '..'

test('stringify signed_request', (t) => {
  t.deepEqual(stringify(JSON.parse(fixture('sample/payload.json')), fixture('sample/secret.txt')), fixture('sample/signed_request.txt'))
})

test('stringify signed_request from facebook', (t) => {
  t.deepEqual(stringify(JSON.parse(fixture('facebook/payload.json')), fixture('facebook/secret.txt')), fixture('facebook/signed_request.txt'))
})
