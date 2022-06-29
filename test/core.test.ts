import { describe, expect, it, test } from 'vitest'
import { baseStorage, initLFInstance } from '../packages/core'

describe('core package', () => {
  it('error init lf', async () => {
    expect((await baseStorage('test data', 'test key')))
      .equal(null)
  })
})
test('inited if instance', () => {
  expect(initLFInstance('lfName')).toHaveProperty('INDEXEDDB')
  expect(initLFInstance('lfName')).toHaveProperty('WEBSQL')
  expect(initLFInstance('lfName')).toHaveProperty('LOCALSTORAGE')
})
