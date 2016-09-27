import React from 'react'

var Search = React.createClass({

  getInitialState() {
    return {
      mobileMenuVisible: false,
      searchActive: this.props.device === 'desktop' ? false : true,
      device: '',
      searchValue: null
    }
  },

  componentDidMount() {
    document.addEventListener('click', this.deactivateSearch);
  },

  deactivateSearch(e) {
    if(e.target !== this.refs.label && e.target !== this.refs.close && e.target !== this.refs.input && this.refs.input.value === '') {
      this.setState({
        searchActive: false,
      })
    }
  },

  activateSearch() {
    var self = this;
    this.setState({
      searchActive: true
    }, function() {
      self.refs.input.focus();
    })
  },

  clearSearch() {
    this.setState({
      searchValue: null
    });
    this.refs.input.value = '';
  },

  updateSearch(e) {
    var self = this;
    this.setState({
      searchValue: e.target.value
    }, function() {
      if(self.state.searchValue !== null && self.state.searchValue !== '') {
        browserHistory.replace('/robertUI/search/' + self.state.searchValue);
      } else {
        browserHistory.replace('/roberUI/');
      }
    });
  },

  render: function () {

    var labelStyle = {
      'display': !this.state.searchActive ? 'block' : 'none'
    };

    var closeSearchStyle = {
      'display': this.state.searchActive && this.state.searchValue  ? 'block' : 'none'
    };

    var inputClass = c(
      'inactive',
      this.state.searchActive ? 'active' : ''
    );

    return (
      <div className="search-input">
        <a href="#" id="search-en" onClick={this.activateSearch} style={labelStyle} ref="label">Search</a>
        <input type="text" id="inpsearch" className={inputClass} placeholder="Search..." onKeyUp = {this.updateSearch} ref="input"/>
        <span href="" style={closeSearchStyle} id="closesearch" onClick={this.clearSearch} ref="close">x</span>
      </div>
    );
  },
});

export default Search
