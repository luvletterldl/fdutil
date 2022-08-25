import { isEmptyObject } from '@fdutil/shared'

/**
 * params to query
 * @param params params
 * @param url base request url
 * @returns query url
 */
export function paramsToQuery(url: string, params?: { [key: string]: any }) {
  if (params && !isEmptyObject(params)) {
    let query = url.endsWith('?') ? '' : '?'
    Object.keys(params).forEach((key, index) => {
      if (params[key] !== undefined && params[key] !== null) {
        query += `${key}=${params[key]}`
        if (index < Object.keys(params).length - 1)
          query += '&'
      }
    })
    return url + query
  }
  else {
    return url
  }
}

/**
 * params to FormData
 * @param params params
 * @returns FormData
 */
export function paramsToFormData(params: { [key: string]: any }) {
  const formData = new FormData()
  if (params && !isEmptyObject(params)) {
    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined && params[key] !== null)
        formData.append(key, params[key])
    })
    return formData
  }
}
