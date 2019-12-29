import React from 'react'
import { Link, GatsbyLinkProps } from 'gatsby'
import ButtonBase, { ButtonBaseProps } from '@material-ui/core/ButtonBase'

type ButtonLinkProps = Omit<ButtonBaseProps, 'href' | 'classes'> & GatsbyLinkProps<any>

export const ButtonLink = React.forwardRef<ButtonLinkProps, any>(
  ({ to, ...props }: ButtonLinkProps, ref) => (
    <Link to={to}>
      <ButtonBase ref={ref} {...props as any} />
    </Link>
  ),
)
