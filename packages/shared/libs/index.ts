import { nanoid } from 'nanoid'

export function isEmptyObject(obj: Object) {
  // because Object.keys(new Date()).length === 0;
  // we have to do some additional check
  return obj // 👈 null and undefined check
  && Object.keys(obj).length === 0
  && Object.getPrototypeOf(obj) === Object.prototype
}

export function getRandomId() {
  return nanoid()
}

export function Jsonify(v: string) {
  try {
    return JSON.parse(v)
  }
  catch (_) {
    return v
  }
}
