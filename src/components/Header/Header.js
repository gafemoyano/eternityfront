import React, { Component } from 'react'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from  './HeaderMobile'
import '../../assets/css/header.css'

class Header extends Component {
  state = {
    mobileMenuVisible: false,
  }

  render() {
    return (
      <header className="App-Header">
        <HeaderDesktop />
      </header>
    );
  }
}

export default Header
