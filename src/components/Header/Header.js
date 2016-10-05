import React, { Component } from 'react'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from  './HeaderMobile'
import '../../assets/css/header.css'

class Header extends Component {
  state = {
    mobileMenuVisible: window.innerWidth <= 800? true: false,
  }
  componentDidMount(){
    window.addEventListener('resize', this.handleResize)
  }
  handleResize = () => {
    console.log(window.innerWidth)
    const visibility = window.innerWidth <= 800? true: false
    this.setState({mobileMenuVisible: visibility})
  }


  render() {
    return (
      <header className="App-Header" ref={(c) => this._header = c}>
        { this.state.mobileMenuVisible ? <HeaderMobile /> :<HeaderDesktop />}
      </header>
    );
  }
}

export default Header
