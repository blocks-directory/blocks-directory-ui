import { useEffect, useState } from 'react'

interface UseImageState {
  image?: HTMLImageElement
  status: string
}

const defaultState = { image: undefined, status: 'loading' }

export const useImage = (url: string) => {
  const res = useState<UseImageState>(defaultState)
  const { image } = res[0]
  const { status } = res[0]

  const setState = res[1]

  useEffect(
    () => {
      if (!url) return () => {}
      const img = document.createElement('img')

      function onload() {
        setState({ image: img, status: 'loaded' })
      }

      function onerror() {
        setState({ image: undefined, status: 'failed' })
      }

      img.addEventListener('load', onload)
      img.addEventListener('error', onerror)
      img.src = url

      return () => {
        img.removeEventListener('load', onload)
        img.removeEventListener('error', onerror)
        setState(defaultState)
      }
    },
    [url],
  )

  // return array because it it better to use in case of several useImage hooks
  // const [background, backgroundStatus] = useImage(url1);
  // const [patter] = useImage(url2);
  return [image, status]
}
