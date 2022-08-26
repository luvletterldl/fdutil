import { throwError } from '@fdutil/shared'
import { computed, defineComponent, h } from 'vue-demi'
import type { UsePlaceholderImgOptions } from '.'

export const PlaceholderImg = defineComponent<UsePlaceholderImgOptions>({
  name: 'PlaceholderImg',
  props: ['w', 'h', 'wh', 'text', 'bghex', 'texthex'] as unknown as undefined,
  setup(props) {
    const url = computed(() => {
      let u = 'https://via.placeholder.com/'
      if (props.w && props.h)
        u += `${props.w}x${props.h}`
      else if (props.wh)
        u += `${props.wh}`
      else
        throwError('PlaceholderImg: ', '[w, h] or [wh], must have one.')

      if (props.bghex) {
        u += u.endsWith('/') ? props.bghex : `/${props.bghex}`
        if (!props.texthex)
          u += '/333333'
      }
      if (props.texthex) {
        if (!props.bghex)
          u += url.value.endsWith('/') ? 'CCCCCC' : '/CCCCCC'
        else
          u += `/${props.texthex}`
      }
      if (props.text)
        u += `?text=${props.text.replace(/\s+/g, '+')}`
      return u
    })

    return () => {
      return h('img', { src: url })
    }
  },
})
