import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MyCarousel from "../Carousel/MyCarousel";
import svgReddit from '../svgFiles/svgReddit'

import SvgTest from '../svgFiles/SvgTest'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "7tzazd",
      sampleData: {
        id: 7,
        post:
          "I know a fair amount of procedural PHP and I decided I might at least learn the basics of object oriented php as well, if nothing else just to compare and see what it's like."
      }
    };
  }

  testEndpoint() {
    console.log(this.state.fakeData);
    axios.get("/api/test").then(res => {
      console.log(res);
    });
  }

  //--------svg react option to try and add svg to innter html------------
  // createMarkup() {
  //   return {__html: SvgWithXlink};
  // }  
  //  MyComponent() {
  //   return <div dangerouslySetInnerHTML={this.createMarkup()} />;
  // }
  //----------------------------------------------------------------------

  render() {
    return (
      <div>
        <h1>svgReddit should be below this</h1>
        <svg><SvgTest /></svg>
      
 
      </div>
    );
  }
}

export default Home;
