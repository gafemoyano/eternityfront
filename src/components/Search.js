import React, {Component, PropTypes} from 'react'
import  { connect } from 'react-redux'
import { browserHistory, withRouter } from 'react-router'
import { setSearch } from '../actions/'
class Search extends Component{

  constructor(props) {
    super(props);
    this.state = {
      mobileMenuVisible: false,
      searchActive: this.props.isActive,
      device: '',
      searchValue: this.props.query
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.deactivateSearch);
  }

  deactivateSearch = (e) => {
    if(e.target !== this.refs.label && e.target !== this.refs.close && e.target !== this.refs.input && this.refs.input.value === '') {
      // this.setState({
      //   searchActive: false,
      // })
      browserHistory.push(`/browse`)
    }
  }

  activateSearch = () => {
    this.setState({
      searchActive: true
    }, () => {
      this.refs.input.focus()
    })
  }

  clearSearch = () => {
    this.setState({
      searchValue: null,
      searchActive: false,
    })
    this.refs.input.value = ''
    browserHistory.push(`/browse`)
  }

  updateSearch = (e) => {
    this.setState({
      searchValue: e.target.value,
    })
    if(this.state.searchValue !== null && this.state.searchValue !== '') {
      browserHistory.push(`/search/${e.target.value}`)
    }else{

      browserHistory.push(`/browse`)
    }
    this.props.setSearch(e.target.value)
  }
  handleChange = (e) => {
    this.props.setSearch(e.target.value)
  }
  render() {
    const labelStyle = {
      'display': !this.state.searchActive ? 'block' : 'none'
    };

    const closeSearchStyle = {
      'display': this.state.searchActive && this.props.query  ? 'block' : 'none'
    };

    var inputClass = `inactive ${this.state.searchActive ? 'active' : ''}`;

    return (
      <div className="search-input">
        <a
          href="#"
          id="search-en"
          onClick={this.activateSearch}
          style={labelStyle}
          ref="label">Search
        </a>
        <input
          type="text"
          id="inpsearch"
          className={inputClass}
          placeholder="Search..."
          onKeyUp={this.updateSearch}
          onChange={this.handleChange}
          ref="input"
          value={this.props.query}
        />
        <span
          href=""
          style={closeSearchStyle}
          id="closesearch"
          onClick={this.clearSearch}
          ref="close"x
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  query: state.search.query,
  isActive: state.search.isActive,
})

export default connect(mapStateToProps, {setSearch})(Search)
