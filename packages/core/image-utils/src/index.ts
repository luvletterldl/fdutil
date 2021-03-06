import { atDomEnv, getRandomId } from '@fdutil/shared'

/**
 * Generate a unique id canvas dom element, append to Dom
 * @returns canvas ref and canvas id
 */
function newCanvasCtx(width: number, height: number) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const randomId = getRandomId()
  canvas.setAttribute('id', randomId)
  canvas.style.display = 'none'
  document.body.appendChild(canvas)
  return {
    canvasCtx: canvas.getContext('2d'),
    id: randomId,
  }
}

/**
 * remove canvas dom element
 * @param id canvas dom element id
 */
function removeCanvasCtx(id: string) {
  const canvas = document.getElementById(id)
  if (canvas)
    document.body.removeChild(canvas)
}

/**
 * get img info
 * @param src
 */
function getImgInfo(src: string): Promise<{ width: number; height: number; img: HTMLImageElement }> {
  const img = new window.Image()
  img.crossOrigin = ''
  img.src = src
  return new Promise((resolve, reject) => {
    img.onload = () => {
      const { width, height } = img
      resolve({ width, height, img })
    }
    img.onerror = (err) => {
      console.error('load img error', err)
      reject(err)
    }
  })
}

/**
 * 获取图片的不透明的偏移量坐标信息
 * @param imgSrc url of image
 * @returns x: number y: number w: number h: number
 */
export async function getImgOpaqueOffsets(imgSrc: string) {
  if (atDomEnv()) {
    const { width, height, img } = await getImgInfo(imgSrc)
    const { canvasCtx, id } = newCanvasCtx(width, height)
    canvasCtx!.drawImage(img, 0, 0, width, height)
    const imgData = canvasCtx!.getImageData(0, 0, width, height).data
    let l = width; let r = 0; let t = height; let b = 0
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        const pos = (i + width * j) * 4
        if (imgData[pos] > 0 || imgData[pos + 1] > 0 || imgData[pos + 2] || imgData[pos + 3] > 0) {
          b = Math.max(j, b)
          r = Math.max(i, r)
          t = Math.min(j, t)
          l = Math.min(i, l)
        }
      }
    }
    l++; r++; t++; b++
    removeCanvasCtx(id)
    return {
      x: l,
      y: t,
      w: r - l,
      h: b - t,
    }
  }
}

/** 获取原始图片地址 */
export function getImgOriginUrls(url: string) {
  return url.replace(/\s+/gm, '').match(/https?:\/\/(?:(?!http:\/\/|https:\/\/|\.png|.jpg|.webp|.gif|.ico|.icon|.svg|.jpeg|.HEIC).)*\.(?:png|jpg|webp|gif|ico|icon|svg|jpeg|.HEIC)/g) ?? []
}
