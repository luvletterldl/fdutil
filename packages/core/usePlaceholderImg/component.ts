import { throwError } from '@fdutil/shared'
import { defineComponent, h } from 'vue-demi'
import type { UsePlaceholderImgOptions } from '.'

export const PlaceholderImg = defineComponent<UsePlaceholderImgOptions>({
  name: 'PlaceholderImg',
  props: ['w', 'h', 'wh', 'text', 'bghex', 'texthex'] as unknown as undefined,
  setup(props) {
    let url = 'https://via.placeholder.com/'
    if (props.wh)
      url += `${props.wh}`
    else if (props.w && props.h)
      url += `${props.w}x${props.h}`
    else
      throwError('PlaceholderImg: ', '[w, h] or [wh], must have one.')

    if (props.bghex) {
      url += url.endsWith('/') ? props.bghex : `/${props.bghex}`
      if (!props.texthex)
        url += '/333333'
    }
    if (props.texthex) {
      if (!props.bghex)
        url += url.endsWith('/') ? 'CCCCCC' : '/CCCCCC'
      else
        url += `/${props.texthex}`
    }
    if (props.text)
      url += `?text=${props.text.replace(/\s+/g, '+')}`

    return () => {
      return h('img', { src: url })
    }
  },
})
