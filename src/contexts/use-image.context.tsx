import React, { memo, useCallback, useState } from 'react'

interface UseImageState {
  loadedImages: string[]
  setImageLoaded: (newImage: string) => void
}

interface UseImageProps {
  children: JSX.Element
}

const UseImageContext = React.createContext({ } as UseImageState)

const UseImageProvider = memo(({ children }: UseImageProps) => {
  const [loadedImages, setLoadedImages] = useState<string[]>([])

  const setImageLoaded = useCallback((newImage: string) => {
    setLoadedImages([...loadedImages, newImage])
  }, [loadedImages])

  return (
    <UseImageContext.Provider value={{ loadedImages, setImageLoaded }}>
      {children}
    </UseImageContext.Provider>
  )
})

export { UseImageContext, UseImageProvider }
