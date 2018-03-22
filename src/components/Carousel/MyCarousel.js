import React, { Component } from "react";

import {
  Carousel,
  CarouselInner,
  CarouselItem,
  CarouselControl
} from "mdbreact";


class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 4
    };
  }

  next() {
    const nextItem = this.state.activeItem + 1;
    if (nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    const prevItem = this.state.activeItem - 1;
    if (prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  }

  //------------------SVG Animations -----------------------------------

  // morph (){
  //   TweenMax.to("#start", 1, {morphSVG:{shape:"#end",shapeIndex: 12}, 
  // fill: "#ff0000",
  // ease:Bounce.easeOut})
  // }

  

  render() {
    return (
      <div>
        <Carousel
          activeItem={this.state.activeItem}
          next={this.next}
          className="z-depth-1"
        >
          <CarouselInner>
            <CarouselItem itemId="1">
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
            </CarouselItem>
            <CarouselItem itemId="2">
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg"
                alt="Second slide"
              />
            </CarouselItem>
            <CarouselItem itemId="3">
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg"
                alt="Third slide"
              />
            </CarouselItem>
            <CarouselItem itemId="4">
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg"
                alt="Mattonit's item"
              />
            </CarouselItem>
          </CarouselInner>

          <CarouselControl
            direction="prev"
            role="button"
            onClick={() => {
              this.prev();
            }}
          />
          <CarouselControl
            direction="next"
            role="button"
            onClick={() => {
              this.next();
            }}
          />
        </Carousel>


      </div>
    );
  }
}

export default MyCarousel;

