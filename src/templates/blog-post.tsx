import React from 'react'
import { graphql } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import { Bio, Layout, Seo, StyledLink } from '../components/blog'

const BlogPostTemplate = (props: any) => {
  const { pageContext: { previous, next }, data } = props
  const post = data.markdownRemark

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <h1
        style={{
          marginTop: rhythm(1),
          marginBottom: 0,
        }}
      >
        {post.frontmatter.title}
      </h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: 'block',
          marginBottom: rhythm(1),
        }}
      >
        {post.frontmatter.date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <Bio />
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginLeft: 0,
          justifyContent: 'space-between',
          listStyle: 'none',
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <StyledLink to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </StyledLink>
          )}
        </li>
        <li>
          {next && (
            <StyledLink to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </StyledLink>
          )}
        </li>
      </ul>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
