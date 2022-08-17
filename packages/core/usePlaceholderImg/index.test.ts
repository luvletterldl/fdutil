import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { PlaceholderImg } from './component'

describe('PlaceholderImg', () => {
  test('w h', () => {
    const wrapper = mount(PlaceholderImg, {
      props: {
        w: 300,
        h: 500,
      },
    })
    expect(wrapper.html()).contain('https://via.placeholder.com/300x500')
  })
  test('wh', () => {
    const wrapper = mount(PlaceholderImg, {
      props: {
        wh: 300,
      },
    })
    expect(wrapper.html()).contain('https://via.placeholder.com/300')
  })
})
