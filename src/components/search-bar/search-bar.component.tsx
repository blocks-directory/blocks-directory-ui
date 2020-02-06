import React from 'react'
import { InputAdornment, TextField } from '@material-ui/core'
import { Search } from 'react-feather'
import styled from 'styled-components'
import { OutlinedTextFieldProps } from '@material-ui/core/TextField/TextField'

export interface SearchBarProps extends Partial<OutlinedTextFieldProps> {
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

export const SearchBar = ({ value, onChange, ...rest }: SearchBarProps) => (
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
    {...rest}
  />
)
