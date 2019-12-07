import React from 'react'
import Link from 'next/link'
import ButtonBase, { ButtonBaseProps } from '@material-ui/core/ButtonBase'
import { LinkProps } from 'next/dist/client/link'

type ButtonLinkProps = Omit<ButtonBaseProps, 'href' | 'classes'> & Pick<LinkProps, 'href' | 'as' | 'prefetch'>

export const ButtonLink = React.forwardRef<ButtonLinkProps, any>(
  ({ href, as, prefetch, ...props }: ButtonLinkProps, ref) => (
    <Link href={href} as={as} prefetch={prefetch} passHref>
      <ButtonBase ref={ref} {...props as any} />
    </Link>
  ),
)
