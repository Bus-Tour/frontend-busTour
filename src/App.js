import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import { withAuth0 } from "@auth0/auth0-react"
export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}
export default withAuth0(App);