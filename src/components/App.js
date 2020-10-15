import React, { Component } from "react";
import Slider from "./slider/Slider";
import Slider1Content from '../content/Slider1Content';
import Slider2Content from '../content/Slider2Content';

class App extends Component {
  render() {
    return (
      <div>
        <Slider sliderContent={Slider1Content}/>
        <Slider sliderContent={Slider2Content}/>
      </div>
    );
  }
}

export default App;