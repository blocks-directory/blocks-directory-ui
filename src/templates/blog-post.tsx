/* eslint-disable react/no-danger */
import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Disqus from 'disqus-react'

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
export const StyledExternalLink = styled.a`
  color: #1093EB;
`

const BlogPostTemplate = (props: any) => {
  const { pageContext: { previous, next }, data, location } = props
  const post = data.markdownRemark

  const disqusConfig = useMemo(() => ({
    url: 'https://blocks.directory/',
    identifier: post.id,
    title: post.excerpt,
  }), [post])

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
      <p>
        <StyledExternalLink
          href={`https://mobile.twitter.com/search?q=${encodeURIComponent(location.href)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Discuss on Twitter
        </StyledExternalLink>
      </p>
      <Disqus.DiscussionEmbed shortname="blocks-directory" config={disqusConfig} />
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
