import React from 'react'
import Item from './Item'
import SliderItemDetails from './ItemDetails'
import Tile from './Tile'
const nextPrevSpeed = 0.8

var Slider = React.createClass({

  getInitialState() {
    return {
      trackPosition: 0,
      activeSlide: null,
      goingNext: false,
      goingPrev: false,
      sliderHeight: 250,
      indexModifier: 0,
      preparePrev: false,
      mouseDown: false,
      detailsSlide: null,
      sliderHovered: false
    }
  },

  clone(obj) {
    if (obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj)
      return obj;

    if (obj instanceof Date)
      var temp = new obj.constructor(); //or new Date(obj);
    else
      var temp = obj.constructor();

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        obj['isActiveClone'] = null;
        temp[key] = this.clone(obj[key]);
        delete obj['isActiveClone'];
      }
    }

    return temp;
  },

  componentDidMount() {
    window.addEventListener('resize' , this.reInit);

    var items = this.clone(this.props.items).concat(this.clone(this.props.items));

    this.setState({
      items: items,
      isTouch: this.isTouchDevice()
    });

    var self = this;

    setTimeout(function() {
      self.reInit();

      var track = self.refs.track;
      //     track.addEventListener('touchstart', self.onMouseDown);
      //     track.addEventListener('touchend', self.onMouseUp);
      //     track.addEventListener('touchmove', self.onMouseMove);

    }, 0)
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.items
    });
  },

  isTouchDevice() {
    return (('ontouchstart' in window)
    || (navigator.MaxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0));
  },



  componentWillUnmount() {
    window.removeEventListener('resize', this.reInit);
  },

  reInit() {
    this.setState({
      isTouch: this.isTouchDevice(),
      sliderWidth: document.body.getBoundingClientRect().width
    });
  },

  setSliderHeight(newHeight) {
    this.setState({
      sliderHeight: newHeight * 1.1
    });
  },

  setSliderHover() {
    this.setState({
      sliderHovered: true
    })
  },

  removeSliderHover() {
    this.setState({
      sliderHovered: false
    })
  },

  setActiveSlide(slide) {
    this.setState({
      activeSlide: slide
    })
  },

  setDetailsSlide(slide, index) {
    this.setState({
      activeSlide: null,
      detailsSlide: slide,
      selectedSlide: index
    })
  },

  setVisibleItems(visibleItems) {
    this.setState({
      visibleItems: visibleItems
    })
  },

  closeDetails() {
    this.setState({
      detailsSlide: null
    })
  },

  goToNext() {

    if(this.state.goingNext) {
      return;
    }

    var self = this;

    this.setState({
      goingNext: true
    }, function() {

      var items = self.state.items;
      for(var i=0; i < self.state.visibleItems; i++) {
        items.push(items.shift());
      }

      var waitTime = nextPrevSpeed * 1000 + 10;

      setTimeout(function() {
        self.setState({
          goingNext: false,
          items: items,
          indexModifier: 1
        });
      }, waitTime);
    });
  },

  goToPrev() {
    if(this.state.goingPrev) {
      return;
    }

    var self = this;
    var items = self.state.items;
    for(var i=0; i < self.state.visibleItems; i++) {
      var items = this.state.items;
      var last = items[items.length - 1];
      items.pop(last);
      items.unshift(last);
    }

    this.setState({
      preparePrev: true,
      items: items,
      goingPrev: false
    }, function() {
      setTimeout(function(){
        self.setState({
          preparePrev: false,
          goingPrev: true
        }, function() {
          var waitTime = nextPrevSpeed * 1000 + 10;

          setTimeout(function() {
            self.setState({
              goingPrev: false,
              indexModifier: 1
            });
          }, waitTime);
        })
      }, 0)

    });
  },

  render: function() {
    if(!this.state.items) {
      return false;
    }

    var self = this;

    var items = this.state.items.map(function(elem, index) {
      return <Item
                   key={`item_${index - self.state.indexModifier}`}
                   item={elem}
                   setSliderHeight={self.setSliderHeight}
                   sliderWidth={self.state.sliderWidth}
                   setActiveSlide={self.setActiveSlide}
                   detailsSlide={self.state.detailsSlide}
                   selectedSlide={self.state.selectedSlide}
                   setDetailsSlide={self.setDetailsSlide}
                   activeSlide={self.state.activeSlide}
                   index={index - self.state.indexModifier}
                   setVisibleItems={self.setVisibleItems}
                   moving={self.state.goingNext || self.state.goingPrev}
                   isTouch={self.state.isTouch}
      />
    });

    var carouselStyle = {
      'height': this.state.sliderHeight + 'px'
    };

    var trackStyle;

    if(this.state.goingNext && !this.state.goingPrev) {
      trackStyle = {
        'transition': 'all ' + nextPrevSpeed + 's',
        'transform': 'translateX(-' + (100 + 100 / this.state.visibleItems) + '%)',
        'WebkitTransitionTimingFunction': 'cubic-bezier(0.5, 0, 0.1, 1)'
      };
    } else if(!this.state.goingNext && !this.state.goingPrev && this.state.preparePrev) {
      trackStyle = {
        'transition': 'none',
        'transform': 'translateX(-' + (100 + 100 / this.state.visibleItems) + '%)',
      };
    } else if(!this.state.goingNext && this.state.goingPrev && !this.state.preparePrev) {
      trackStyle = {
        'transition': 'all ' + nextPrevSpeed + 's',
        'transform': 'translateX(-' + 100 / this.state.visibleItems + '%)',
        'WebkitTransitionTimingFunction': 'cubic-bezier(0.5, 0, 0.1, 1)'
      }
    } else if(!this.state.goingNext){
      trackStyle = {
        'transform': this.state.indexModifier === 0? 'translateX(0%)' : 'translateX(-' + 100 / this.state.visibleItems + '%)',
        'transition': 'none',
      };
    }

    return (
      <div>
        <div className='slider-container' ref='container' style={carouselStyle}>
          <span className='slider-title'>{this.props.sliderTitle.toUpperCase()}</span>
          <div className='carousel'
               ref="carousel" style={carouselStyle}
               onMouseEnter={this.setSliderHover}
               onMouseLeave={this.removeSliderHover}
          >
            <div className='carousel-track' ref="track" style={trackStyle}>
                  {items}
            </div>

            {
              this.state.sliderHovered ? <div className='next' onClick={this.goToNext}></div> : ''
            }
            {
              this.state.indexModifier && this.state.sliderHovered ? <div className='prev' onClick={this.goToPrev}></div> : ''
            }
          </div>
        </div>
        {
          this.state.detailsSlide?
            <SliderItemDetails
              key={`item_details_${this.props.index}`}
              sliderHeight={this.state.sliderHeight}
              activeSlide={this.state.detailsSlide}
              closeDetails={this.closeDetails}
            /> : ''
        }
      </div>
    );
  }
});
export default Slider
