import { describe, expect, it } from 'vitest'
import { baseStorage } from '../packages/core'

describe('core package', () => {
  it('error init lf', async () => {
    expect((await baseStorage('test data', 'test key')))
      .equal(null)
  })
})
