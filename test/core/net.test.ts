import { describe, expect, test } from 'vitest'
import { paramsToQuery } from '@fdutil/core'

describe('net moduel work!', () => {
  test('queryToQuery', () => {
    const params = {
      a: 1,
      b: 2,
      c: 3,
    }
    const url = '/example.com'
    const url1 = `${url}?`
    const query = '?a=1&b=2&c=3'
    expect(paramsToQuery(params, url)).toBe(url + query)
    expect(paramsToQuery(params, url1)).toBe(url + query)
  })
})
