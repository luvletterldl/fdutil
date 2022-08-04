# @fdutil

front end developer toolkit

![build](https://img.shields.io/github/workflow/status/luvletterldl/fdutil/Release)
![version](https://img.shields.io/npm/v/@fdutil/core)
![issues](https://img.shields.io/github/issues/luvletterldl/fdutil)
![forks](https://img.shields.io/github/forks/luvletterldl/fdutil)
![stars](https://img.shields.io/github/stars/luvletterldl/fdutil)
![license](https://img.shields.io/github/license/luvletterldl/fdutil)
![download](https://img.shields.io/npm/dm/@fdutil/core)

# env
browser

# install
```bash
npm install @fdutil/core
yarn add @fdutil/core
pnpm install @fdutil/core
```

# usage

## core

### better storage
```ts
import { baseStorage, getStorageData, initLFInstance } from '@fdutil/core'

interface UserInfoInterface {
  name: string
  age: number
  // ...
}

enum StorageKeys {
  USER = 'user'
  // ...
}

const AppKey = 'your app key'
initLFInstance(AppKey)

baseStorage<StorageKeys, UserInfoInterface>(storageKey, { name: 'Jeff', age: 18 })
getStorageData('item', { default: true })
```

### image
```ts
import { getImgOpaqueOffsets, getImgOriginUrls } from '@fdutil/core'

getImgOpaqueOffsets(imgUrl).then(({ x, y, w, h }) => {
  console.log('your img\'s opaque part offsets: ', x, y, w, h)
})

const urls = getImgOriginUrls('sadhihttp://a.g*o 32 \^!.webp*.jpg)w \\nebpd https:// sahttps://% ^&   *.png(*&^')
console.log(urls) // ['http://a.g*o32^!.webp', 'https://%^&*.png']
```

### net
```ts
import { paramsToQuery } from '@fdutil/core'

const params = {
  a: 1,
  b: 2,
  c: 3,
}
const url = '/example.com'
paramsToQuery(url, params) // '/example.com?a=1&b=2&c=3'
```

![Alt](https://repobeats.axiom.co/api/embed/4f934f1940ce17efbd27a43b39be583e8d8d45fd.svg "Repobeats analytics image")

# License

MIT License © 2022 [Senar](https://github.com/luvletterldl)
