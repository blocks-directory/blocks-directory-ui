import styled from 'styled-components'

interface OpacityAppearProps {
  visible: boolean
}

export const OpacityAppear = styled.div<OpacityAppearProps>`
  transition: all 500ms linear;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`
