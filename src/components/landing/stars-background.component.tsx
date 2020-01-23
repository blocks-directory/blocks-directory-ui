import * as React from 'react'
import styled from 'styled-components'

import { useImage } from '../../hooks/use-image.hook'
import { OpacityAppear } from '../opacity-appear.component'

export const StarsBackground = styled(OpacityAppear)`
  background: url('/stars.svg') center 0 no-repeat;
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

export const Stars = () => {
  const [img] = useImage('/stars.svg')

  return <StarsBackground visible={!!img} />
}
