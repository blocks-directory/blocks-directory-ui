import React, { memo, useEffect, useState } from 'react'

interface InitialLoadState {
  initialLoadComplete: boolean
}

interface InitialLoad {
  children: JSX.Element
}

const InitialLoadContext = React.createContext({ } as InitialLoadState)

const InitialLoadProvider = memo(({ children }: InitialLoad) => {
  const [initialLoadComplete, setInitialLoadComplete] = useState(false)

  useEffect(() => {
    setInitialLoadComplete(true)
  }, [])

  return (
    <InitialLoadContext.Provider value={{ initialLoadComplete }}>
      {children}
    </InitialLoadContext.Provider>
  )
})

export { InitialLoadContext, InitialLoadProvider }
