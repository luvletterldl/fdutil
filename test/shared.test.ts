import { describe, expect, it } from 'vitest'
import { isEmptyObject } from '../packages/shared'

describe('shared package', () => {
  it('is empty', async () => {
    expect(isEmptyObject({}) === true)
  })

  it('isn\'t empty object', () => {
    expect(isEmptyObject({ a: 1 }) === false)
  })
})
