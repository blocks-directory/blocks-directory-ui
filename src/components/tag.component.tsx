import styled from 'styled-components'
import { Chip } from '@material-ui/core'

export const Tag = styled(Chip)`
  margin-right: 10px;
  font-size: 16px;
  line-height: 20px;
  height: 36px;
  border-radius: 10px;
  background: #F3F4F5;
  color: #000000;
  .MuiChip-label {
    padding: 0 18px;
  }
`
