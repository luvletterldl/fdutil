export function getJSONReq<T>(
  url: string,
  options?: { headers?: HeadersInit | undefined; ac?: AbortController | null },
) {
  let signal
  if (options?.ac === null) {
    options.ac = new AbortController()
    signal = options.ac.signal
  }
  return fetch(url, {
    method: 'GET',
    headers: options?.headers,
    signal,
  }).then((res) => {
    try {
      return res.json()
    }
    catch (e) {
      return e
    }
  }).catch((err) => {
    return err
  }) as Promise<T>
}

export function postJSONReq<T>(
  url: string,
  data: any,
  options?: { headers?: HeadersInit | undefined; ac?: AbortController | null },
) {
  let body
  let signal
  if (options?.ac === null) {
    options.ac = new AbortController()
    signal = options.ac.signal
  }
  try {
    body = JSON.stringify(data)
  }
  catch (e) {
    return e
  }
  return fetch(url, {
    method: 'POST',
    body,
    headers: options?.headers,
    signal,
  }).then((res) => {
    try {
      return res.json()
    }
    catch (e) {
      return e
    }
  }).catch((err) => {
    return err
  }) as Promise<T>
}
