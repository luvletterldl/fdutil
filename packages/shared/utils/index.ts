import { nanoid } from 'nanoid'

/**
 * is developing runtime
 * @returns boolean
 */
export function isDeveloping() {
  return location.host.includes(':')
}

/** 判断对象是否是空对象 */
export function isEmptyObject(obj: Object) {
  // because Object.keys(new Date()).length === 0;
  // we have to do some additional check
  return obj // 👈 null and undefined check
  && Object.keys(obj).length === 0
  && Object.getPrototypeOf(obj) === Object.prototype
}

/**
 * generate random id
 * @returns string
 */
export function getRandomId() {
  return nanoid()
}

/**
 * promise at dom env
 */
export function promiseDomEnv() {
  if (!document)
    throw new Error('[fdutil error]: document is not defined, please use at browser, not node. dom is required')
}

/** get initStorageData */
export function initStorageData(key: string, defaultData: unknown, isSessionStorage = false) {
  const storage = isSessionStorage ? sessionStorage.getItem(key) : localStorage.getItem(key)
  return storage ? JSON.parse(storage) : defaultData
}

export function throwError(type: string, message: string) {
  throw new Error(`[fdutil]: ${type} ${message}`)
}

export function throwWarning(type: string, message: string) {
  console.warn(`[fdutil]: ${type} ${message}`)
}
