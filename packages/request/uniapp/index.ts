export function uniRequest<T>(url: string, options?: { method: 'GET' | 'POST'; header?: HeadersInit | undefined; body?: any }): Promise<T> {
  return new Promise((resolve, reject) => {
    uni.request({
      url,
      method: options?.method || 'GET',
      header: options?.header,
      data: options?.body,
      success: (res) => {
        if (res.statusCode === 200)
          resolve(res.data as any)

        else
          reject(res)
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}
