import styled, { css } from 'styled-components'

interface ButtonProps {
  updating?: boolean
}

const spinnerCss = css`
  position: relative;
  color: transparent;

  &:before,
  &:after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    margin: -10px 0 0 -12px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 4px solid rgba(0,0,0,.15);
  }

  &:after {
    border: 4px solid;
    border-color: #fff transparent transparent;
    animation: button-spin .6s linear;
    animation-iteration-count: infinite;
  }

  @keyframes button-spin {
    from {
      transform:rotate(0);
    }
    to {
      transform:rotate(360deg);
    }
  }
`

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  letter-spacing: 2px;
  background: #0D8EFC;
  color: white;
  margin: 0;
  padding: 8px 25px;
  text-shadow: none;
  font-weight: bold;
  font-size: 16px;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 45px;
  box-shadow: 0px 6px 12px rgba(54, 176, 245, 0.16), 0px 16px 24px rgba(54, 123, 245, 0.16);
  text-transform: uppercase;
  transition: background-color 0.3s;
  ${(props) => (props.updating ? spinnerCss : '')}

  &:hover {
    background: #27A8FF;
    transition: background-color 300ms;
  }

  &[disabled] {
    background: #6d869c;
    box-shadow: 0px 6px 12px rgba(122, 158, 179, 0.16), 0px 16px 24px rgba(133, 146, 168, 0.16);
    cursor: auto;
  }
`
