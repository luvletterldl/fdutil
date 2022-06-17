# @fdutil

front end developer toolkit

![issues](https://img.shields.io/github/issues/luvletterldl/fdutil)
![forks](https://img.shields.io/github/forks/luvletterldl/fdutil)
![stars](https://img.shields.io/github/stars/luvletterldl/fdutil)
![license](https://img.shields.io/github/license/luvletterldl/fdutil)
![download](https://img.shields.io/npm/dm/@fdutil/core)

## env
browser

## install
```bash
npm install @fdutil/core localforage
```

## usage
```js
import { getImgOpaqueOffsets, isDeveloping, initLFInstance, baseStorage } from '@fdutil/core';

interface UserInfoInterface {
  name: string,
  age: number,
  // ...
}

enum StorageKeys {
  USER = 'user'
  // ...
}

const AppKey = 'your app key';
initLFInstance(AppKey);

baseStorage<StorageKeys, UserInfoInterface>(storageKey, { name: 'Jeff', age: 18 });

if (isDeveloping()) {
  console.log('developing');
}

getImgOpaqueOffsets(imgUrl).then(({ x, y, w, h }) => {
  console.log("your img's opaque part offsets: ", x, y, w, h);
})

```
