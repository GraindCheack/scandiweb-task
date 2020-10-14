import React, {Component, createRef} from "react";
import "./Slider.css"
import arrowRight from "./arrowRight.svg"
import arrowLeft from "./arrowLeft.svg"

class Slider extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      slides: 
      [
        '<img src="./images/1.jpg" alt="1"/>',
        '<img src="./images/2.jpg" alt="2"/>',
        '<img src="./images/3.jpg" alt="3"/>',
        '<img src="./images/4.jpg" alt="4"/>',
        '<img src="./images/5.jpg" alt="5"/>',
      ],
      page: 1,
      events: {}
    };
    this.SliderRef = createRef();
  }

  getSlides() {
    const page = this.state.page - 1;
    const slidesLength = this.state.slides.length;
    return [
      page !== 0 ? this.state.slides[page - 1]: this.state.slides[slidesLength - 1],
      this.state.slides[page],
      page !== this.state.slides.length - 1 ? this.state.slides[page + 1]: this.state.slides[0]
    ];
  }

  setPage(value) {
    (value < 1) ? this.setState({page: this.state.slides.length}):
    (value > this.state.slides.length) ? this.setState({page: 1}): 
    this.setState({page: value});
  }

  render () {
    return (
      <div ref={this.SliderRef}
      className="slider">
        <div className="slider-nav">
          <div className="nav-arrow" onClick={e => this.setPage(this.state.page - 1)}><img src={arrowLeft} alt="Left"/></div>
          <input type="number" min="1" max={this.state.slides.length} onChange={e => this.setPage(e.target.value)}  value={this.state.page}/>
          <div className="nav-arrow" onClick={e => this.setPage(this.state.page + 1)}><img src={arrowRight} alt="Right"/></div>
        </div>
        <div className="slider-main" dangerouslySetInnerHTML={{
          __html: this.getSlides().map((item, index) => {
            return item
          })
        }}>
        </div>
      </div>
    );
  }
}

export default Slider;
