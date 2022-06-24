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
