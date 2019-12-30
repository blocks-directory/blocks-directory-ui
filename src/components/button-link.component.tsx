import React from 'react'
import { Link, GatsbyLinkProps } from 'gatsby'
import ButtonBase, { ButtonBaseProps } from '@material-ui/core/ButtonBase'

type ButtonLinkProps = Omit<ButtonBaseProps, 'href' | 'classes'> & GatsbyLinkProps<any>

export const ButtonLink = React.forwardRef<ButtonLinkProps, any>(
  ({ ...props }: ButtonLinkProps, ref) => (
    <ButtonBase ref={ref} {...props as any} component={Link} />
  ),
)
