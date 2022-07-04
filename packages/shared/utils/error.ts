export function throwError(type: string, message: string) {
  throw new Error(`[fdutil]: ${type} ${message}`)
}

export function throwWarning(type: string, message: string) {
  console.warn(`[fdutil]: ${type} ${message}`)
}
