import { describe, expect, test } from 'vitest'
import { baseStorage, getStorageData, initLFInstance } from '../../packages/core'

describe('core package', () => {
  test('error init lf', async () => {
    expect(() => baseStorage('test data', 'test key')).toThrowError('localforage please init localforage instance first')
  })
  test('getInitStorageData', () => {
    expect(getStorageData('test', { a: 1 })).toEqual({ a: 1 })
  })
})
test('inited if instance', () => {
  expect(initLFInstance('lfName')).toHaveProperty('INDEXEDDB')
  expect(initLFInstance('lfName')).toHaveProperty('WEBSQL')
  expect(initLFInstance('lfName')).toHaveProperty('LOCALSTORAGE')
})
