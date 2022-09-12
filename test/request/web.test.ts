import { describe, expect, test } from 'vitest'
import { getJSONReq } from '../../packages/request/index'
describe('web request', () => {
  test('getJSONReq', () => {
    getJSONReq('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=7').then((res) => {
      expect(res).haveOwnProperty('images', 'tooltips')
    })
  })
  test('getJSONReq abort', () => {
    // eslint-disable-next-line prefer-const
    let ac = null as unknown as AbortController
    getJSONReq('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=7', { ac })
    setTimeout(() => {
      expect(ac).haveOwnProperty('signal')
    }, 100)
  })
})
