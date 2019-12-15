import React from 'react'
import { InputAdornment, TextField } from '@material-ui/core'
import { Search } from 'react-feather'
import styled from 'styled-components'

export interface SearchBarProps {
  value?: string
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

const StyledTextField = styled(TextField)`
  fieldset {
    border-style: none;
  }
  .MuiOutlinedInput-adornedStart {
    padding-left: 12px;
  }
  .MuiOutlinedInput-inputMarginDense {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .MuiInputBase-input {
    font-size: 18px;
  }
  background: white;
`

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <StyledTextField
      variant="outlined"
      margin="dense"
      fullWidth
      value={value}
      onChange={onChange}
      style={{
        borderRadius: '10px',
        fontSize: '18px',
      }}
      placeholder="Search services"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search color="#9A9DAD" size={28} />
          </InputAdornment>
        ),
      }}
    />
  )
}
