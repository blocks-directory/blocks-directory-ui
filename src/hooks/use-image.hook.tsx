import { useContext, useEffect, useState } from 'react'
import { UseImageContext } from '../contexts/use-image.context'

interface UseImageState {
  loaded: boolean
}

const defaultState = { loaded: false }

export const useImage = (url: string) => {
  const { loadedImages, setImageLoaded } = useContext(UseImageContext)
  const [{ loaded }, setState] = useState<UseImageState>({ loaded: loadedImages.indexOf(url) !== -1 })

  useEffect(
    () => {
      if (!url) {
        return () => {}
      }

      if (loadedImages.indexOf(url) !== -1) {
        setState({ loaded: true })
      }

      const img = document.createElement('img')

      function onload() {
        setState({ loaded: true })
        setImageLoaded(url)
      }

      function onerror() {
        setState({ loaded: false })
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

  return [loaded]
}
