import { describe, expect, test } from 'vitest'
import { paramsToQuery } from '../../packages/core/net'

describe('net moduel work!', () => {
  test('queryToQuery', () => {
    const params = {
      a: 1,
      b: 2,
      c: 3,
    }
    const specialParams = {
      a: undefined,
      b: null,
      c: 1
    }
    const url = '/example.com'
    const url1 = `${url}?`
    const query = '?a=1&b=2&c=3'
    expect(paramsToQuery(url, params)).toBe(url + query)
    expect(paramsToQuery(url1, params)).toBe(url + query)
    expect(paramsToQuery(url)).toBe(url)
    expect(paramsToQuery(url, specialParams)).toBe(url + '?c=1')
  })
})
