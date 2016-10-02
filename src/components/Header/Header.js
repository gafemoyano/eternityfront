import React, { Component } from 'react'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from  './HeaderMobile'
import '../../assets/css/header.css'

class Header extends Component {
  state = {
    mobileMenuVisible: false,
  }
  componentDidMount(){
    window.addEventListener('resize', this.handleResize)
  }
  handleResize = () => {
    const visibility = this._header.getBoundingClientRect().width < 799 ? true: false
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
