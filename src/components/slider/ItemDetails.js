import React from 'react'

var ItemDetails = React.createClass({

  componentDidMount() {
    this.checkScroll();
  },

  componentWillReceiveProps(nextProps) {
    if(this.props.activeSlide !== nextProps.activeSlide) {
      this.refs.detailsContent.classList.add("reflow");
      var self = this;
      setTimeout(function() {
        self.refs.detailsContent.classList.remove("reflow");
      }, 100)
    }
  },

  checkScroll() {
    if(document.body.scrollTop < document.body.scrollTop + this.refs.details.getBoundingClientRect().top - this.props.sliderHeight) {
      document.body.scrollTop= document.body.scrollTop + 10;
      setTimeout(this.checkScroll, 10)
    }
  },

  render: function() {
    var className = 'slider-item-details';
    if(this.props.activeSlide) {
      className += ' slider-item-details-active';
    } else {
      className += ' slider-item-details-inactive';
    }

    var test = this.props.sliderHeight / 4 - 12;

    var detailsStyle = {
      'transform': 'translateY(-' + test + 'px)'
    };

    return (
      <div className='slider-item-details-container' ref="details" style={detailsStyle}>
        <div className={className} ref="detailsContent">
          <div className='slider-details-left'>
            <h2>{this.props.activeSlide ? this.props.activeSlide.detail : ''}</h2>
            <span className="stars">{this.props.activeSlide ? Array(this.props.activeSlide.star || 0).join('â˜…')  : ''}</span>
            {
              this.props.activeSlide ?
                this.props.activeSlide.age ?
                  <span className="slider-details-age">{this.props.activeSlide ?
                    this.props.activeSlide.age : ''}</span> :
                  '' :
                ''
            }

            <span className="year">{ this.props.activeSlide ? this.props.activeSlide.year : '' }</span>
            <span className="slider-details-info">{this.props.activeSlide ? this.props.activeSlide.info : ''}</span>
          </div>
          <div className='slider-details-right'>
            {this.props.activeSlide ?  <img src={this.props.activeSlide.img} className='slider-details-image' role='presentation' /> : ''}
            <div className="slider-item-details-close" onClick={this.props.closeDetails}>Ã—</div>
            <div className="gradient"></div>
            <a href={this.props.activeSlide ? this.props.activeSlide.href : ''}><span className="play"></span></a>
          </div>
        </div>
      </div>
    );
  }
});
export default ItemDetails
