import test from 'ava'
import fixture from './helpers/fixture'

import { parse } from '..'

test('parse signed_request', (t) => {
  t.deepEqual(parse(fixture('sample/signed_request.txt'), fixture('sample/secret.txt')), JSON.parse(fixture('sample/payload.json')))
})

test('parse signed_request of facebook', (t) => {
  t.deepEqual(parse(fixture('facebook/signed_request.txt'), fixture('facebook/secret.txt'), 'ascii'), JSON.parse(fixture('facebook/payload.json')))
})
