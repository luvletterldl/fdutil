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
      query += `${key}=${params[key]}`
      if (index < Object.keys(params).length - 1)
        query += '&'
    })
    return url + query
  }
  else {
    return url
  }
}
