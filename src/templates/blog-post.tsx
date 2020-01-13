import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { rhythm, scale } from '../utils/typography'
import { Bio, Layout, Seo, StyledLink } from '../components/blog'

const Date = styled.p`
  font-size: ${scale(-1 / 5).fontSize};
  line-height: ${scale(-1 / 5).lineHeight};
  display: block;
  margin-bottom: ${rhythm(1)};
`
const PostTitle = styled.h1`
  margin-top: ${rhythm(1)};
  margin-bottom: 0;
  font-size: ${scale(0.5).fontSize};
`
const Spacer = styled.hr`
  margin-bottom: ${rhythm(1)};
`
const NavigationWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const BlogPostTemplate = (props: any) => {
  const { pageContext: { previous, next }, data } = props
  const post = data.markdownRemark

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <PostTitle>
        {post.frontmatter.title}
      </PostTitle>
      <Date>
        {post.frontmatter.date}
      </Date>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Spacer />
      <Bio />
      <NavigationWrapper>
        <li>
          {previous && (
            <StyledLink to={`/blog/${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </StyledLink>
          )}
        </li>
        <li>
          {next && (
            <StyledLink to={`/blog/${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </StyledLink>
          )}
        </li>
      </NavigationWrapper>
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
