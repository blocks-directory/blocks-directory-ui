import * as React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

import { useImage } from '../../hooks/use-image.hook'

export const StarsBackground = styled.div`
  background: url('/stars.svg') center 0 no-repeat;
  transition: all 1000ms linear;
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

export const Stars = () => {
  const [img] = useImage('/stars.svg')
  const [props, set] = useSpring(() => ({
    opacity: 0,
    config: {
      duration: 1000,
    },
  }))

  if (img) {
    set({ opacity: 1 })

    return <animated.div style={props}><StarsBackground /></animated.div>
  }

  return null
}
