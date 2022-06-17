import localforage from 'localforage'

let lfInstance: LocalForage | null = null

/**
 *  设置或读取缓存信息, null: 删除，传参：更新，不传参：获取
 * @param key storage key
 * @param data storage data
 * @returns storage data | null
 */
export function baseStorage<T, K extends string>(key: K, data?: T): Promise<T | null> {
  if (!lfInstance) {
    console.error('[fdutil] please init localforage instance first!, invoke initLFInstance()')
    return Promise.resolve(null)
  }
  else {
    return data === null
      ? lfInstance!.removeItem(key) as unknown as Promise<null>
      : data === undefined ? lfInstance!.getItem(key) : lfInstance!.setItem(key, data)
  }
}

/**
 * init localForage instance
 * @param name localforage instance name
 * @returns localforage instance
 */
export function initLFInstance(name: string): LocalForage {
  if (lfInstance)
    console.error('[fdutil] localForage instance already exists')
  else
    lfInstance = localforage.createInstance({ name })

  return lfInstance
}
