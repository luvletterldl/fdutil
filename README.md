# @fdutil

front end developer toolkit

![version](https://img.shields.io/npm/v/@fdutil/core)
![issues](https://img.shields.io/github/issues/luvletterldl/fdutil)
![forks](https://img.shields.io/github/forks/luvletterldl/fdutil)
![stars](https://img.shields.io/github/stars/luvletterldl/fdutil)
![license](https://img.shields.io/github/license/luvletterldl/fdutil)
![download](https://img.shields.io/npm/dm/@fdutil/core)

## env
browser

## install
```bash
npm install @fdutil/core
```

## usage
```ts
import { baseStorage, getImgOpaqueOffsets, getRandomId, initLFInstance, initStorageData, isDeveloping, isEmptyObject, promiseDomEnv } from '@fdutil/core'

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

if (isDeveloping())
  console.log('developing')

getImgOpaqueOffsets(imgUrl).then(({ x, y, w, h }) => {
  console.log('your img\'s opaque part offsets: ', x, y, w, h)
})

const randomId = getRandomId()

promiseDomEnv()

initStorageData('item', { default: true })
```

![Alt](https://repobeats.axiom.co/api/embed/4f934f1940ce17efbd27a43b39be583e8d8d45fd.svg "Repobeats analytics image")
