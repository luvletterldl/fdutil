# @fdutils

front end developer toolkit

![issues](https://img.shields.io/github/issues/luvletterldl/fdutils)
![forks](https://img.shields.io/github/forks/luvletterldl/fdutils)
![stars](https://img.shields.io/github/stars/luvletterldl/fdutils)
![license](https://img.shields.io/github/license/luvletterldl/fdutils)
![download](https://img.shields.io/npm/dm/@fdutils/core)

## env
browser

## install
```bash
npm install @fdutils/core
```

## usage
```js
import { getImgOpaqueOffsets, isDeveloping, initLFInstance, baseStorage } from '@fdutils/core';

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
