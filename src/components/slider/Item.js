import React from 'react'

const slideHoverScale = 170
const delayItemHover = 0

const Item = React.createClass({

  getInitialState(){
    return {
      hoverTimer: null,
      activeItem: null
    }
  },

  itemHovered() {

    if(this.props.isTouch) {
      return;
    }

    if(!this.props.detailsSlide) {
      var self = this;
      this.setState({
        hoverTimer: setTimeout(function(){
          if(self.state.hoverTimer) {
            self.props.setActiveSlide(self.props.index);
          }
        }, delayItemHover),
      });
    } else {
      this.props.setDetailsSlide(this.props.item, this.props.index);
    }
  },

  itemMouseOut() {

    if(this.props.isTouch) {
      return;
    }

    this.setState({
      hoverTimer: null,
      activeStyle: false
    });
    this.props.setActiveSlide(null);
  },


  openUrl() {
    if(!this.props.isTouch) {
      return;
    };
    this.refs.play.click();
  },

  componentWillReceiveProps(nextProps) {

    var self = this;
    if(nextProps.activeSlide !== nextProps.index) {
      if(this.state.sliderWidth !== nextProps.sliderWidth) {

        var itemWidth = self.refs.item.getBoundingClientRect().width;
        var itemsCount = parseInt(nextProps.sliderWidth / itemWidth, 10);

        this.setState({
          sliderWidth: nextProps.sliderWidth,
          visibleItems: itemsCount
        });

        self.props.setSliderHeight(itemWidth);
        self.props.setVisibleItems(itemsCount);
      }
    }
  },

  render: function() {
    var self = this;

    var itemClass = 'carousel-item';
    if(this.props.activeSlide === this.props.index) {
      itemClass += ' hovered';
    }

    var itemTransform = "translateY(-50%)";
    if(this.props.activeSlide !== null) {

      if(this.props.index < this.props.activeSlide) {
        if(this.state.visibleItems - 1 === this.props.activeSlide) {
          itemTransform  += ' translateX(-' + (slideHoverScale - 100) + '%)';
        } else if(this.props.activeSlide !== 0) {
          itemTransform += ' translateX(-' + (slideHoverScale - 100) / 2 + '%)';
        }
      } else if(this.props.index > this.props.activeSlide) {
        if(this.props.activeSlide === 0) {
          itemTransform  += ' translateX(' + (slideHoverScale - 100) + '%)';
        } else {
          if(this.props.activeSlide !== this.state.visibleItems - 1) {
            itemTransform  += ' translateX(' + (slideHoverScale - 100) / 2 + '%)';
          }
        }
      } else {
        if(this.props.index === 0) {
          itemTransform += " translateX(" + (slideHoverScale -100) / 2 + "%) scale(" + slideHoverScale / 100+ ")";
        } else if(this.props.index === this.state.visibleItems - 1) {
          itemTransform += " translateX(-" + (slideHoverScale - 100) / 2 + "%) scale(" + slideHoverScale / 100 + ")";
        } else {
          itemTransform += " scale(" + slideHoverScale / 100 + ")";
        }
      }
    }

    var itemStyle = {
      'transform': itemTransform,
    };

    if(this.props.selectedSlide === this.props.index && this.props.detailsSlide !== null) {
      itemClass += ' active'
    }

    var itemWrapperStyle = {
      'backgroundImage': 'url(' + this.props.item.img + ')',
    };

    return (
      <div className={itemClass} ref='item'
           style={itemStyle}
           onMouseEnter={self.itemHovered}
           onMouseLeave={self.itemMouseOut}
           onClick={self.openUrl}
      >
        <div className='item-wrapper' style={itemWrapperStyle}>
          <span className="item-overlay"></span>
          <a href={this.props.item.href} ref='play'><span className="play"></span></a>
          <div className="infoteaser">
            <span className="title">{this.props.item.title}</span>
            <span className="stars">{ Array(this.props.item.star || 0).join('★') }</span>
            {
              this.props.item.age ? <span className="age">{this.props.item.age}</span> : ''
            }
            <span className="year">{ this.props.item.year}</span>
                                <span className="info">
                                        {this.props.item.info}
                                </span>
          </div>
                            <span className="details-arrow" onClick={function() {self.props.setDetailsSlide(self.props.item, self.props.index)}}>
                                <span className="arrow"></span>
                            </span>
        </div>
      </div>
    );
  }
});

export default Item
