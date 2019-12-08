import React from 'react'
import App from 'next/app'
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'
import fetch from 'isomorphic-unfetch'

import { ThemeProvider } from '../contexts'
import { envConfig } from '../configs'

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: envConfig.apolloUri,
    fetch,
  }),
})

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      // eslint-disable-next-line no-unused-expressions
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ApolloProvider client={client}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default MyApp
