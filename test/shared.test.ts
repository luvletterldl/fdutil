import { describe, expect, it } from 'vitest'
import { initStorageData, isEmptyObject } from '../packages/shared'

describe('shared package', () => {
  it('is empty', async () => {
    expect(isEmptyObject({}) === true)
  })

  it('isn\'t empty object', () => {
    expect(isEmptyObject({ a: 1 }) === false)
  })

  it('init storage data', () => {
    expect(initStorageData('test', { a: 1 })).toEqual({ a: 1 })
  })
})
