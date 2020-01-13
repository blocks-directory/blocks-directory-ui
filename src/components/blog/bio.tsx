import React from 'react'

import { rhythm } from '../../utils/typography'
import { ExternalLink } from './link'

export const Bio = () => (
  <div
    style={{
      marginBottom: rhythm(1),
    }}
  >
    <p>
        We believe in reusable microservices. <br />
        Learn more at <ExternalLink href="https://blocks.directory">blocks.directory</ExternalLink>
    </p>
  </div>
)
