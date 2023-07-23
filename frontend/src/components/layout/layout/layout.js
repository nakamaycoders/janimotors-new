import React from 'react'
import {Nav} from '../Nav'
import {Navbar} from '../Navbar'

const Layout = (props) => {
    return(
        <>
      <Nav/>
      <Navbar/>
      {props.children}
  </>
    )
}
export default Layout