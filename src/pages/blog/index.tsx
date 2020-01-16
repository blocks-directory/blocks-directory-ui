/* eslint-disable react/no-danger */
import React from 'react'
import { graphql } from 'gatsby'

import { rhythm } from '../../utils/typography'
import { StyledLink, Seo, Layout, Bio } from '../../components/blog'

const BlogIndex = (props: any) => {
  const { data } = props

  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <Seo title="All posts" />
      <Bio />
      {posts.map(({ node }: any) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <StyledLink style={{ boxShadow: 'none' }} to={`/blog${node.fields.slug}`}>
                {title}
              </StyledLink>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
