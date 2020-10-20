import React, { Component, createRef } from "react";

import "./Slider.css";

class Slider extends Component {
  constructor(props) {
    super(props);
    const { sliderContent } = props;
    this.state = {
      slides: sliderContent,
      page: 1,
      events: {},
    };
    this.actSlidesRef = [createRef(), createRef(), createRef()];
    this.sliderMainRef = createRef();
    this.inputRef = createRef();
    this.swipeOption = {};
    this.isAnimating = false;
  }

  getSlidesImg() {
    const page = this.state.page - 1;
    const slidesLength = this.state.slides.length;
    return [
      page !== 0 ? this.state.slides[page - 1] : this.state.slides[slidesLength - 1],
      this.state.slides[page],
      page !== this.state.slides.length - 1 ? this.state.slides[page + 1] : this.state.slides[0]
    ];
  }

  setPage(value) {
    if (value === '') return;
    value = Number(value);
    value < 1 ? this.setState({ page: this.state.slides.length }) :
      (value > this.state.slides.length) ? this.setState({ page: 1 }) :
        this.setState({ page: value });
  }

  sliderMainTransitionClear(page) {
    this.sliderMainRef.current.style['transitionDuration'] = '';
    this.setPage(page);
    this.sliderMainRef.current.style['left'] = '-100%';
    this.isAnimating = false;
  }

  pageStep(conf) {
    this.inputRef.current.value = '';
    this.isAnimating = true;
    this.sliderMainRef.current.style['transitionDuration'] = '.5s';
    this.sliderMainRef.current.style['left'] = conf.left;
    setTimeout(() => this.sliderMainTransitionClear(this.state.page + conf.page), 500);
  }

  actSlidesTransitionClear() {
    this.actSlidesRef.forEach(item => item.current.style['transitionDuration'] = '');
    this.isAnimating = false;
  }

  actSlideChangePage(slide) {
    this.actSlidesRef[slide].current.style['transitionDuration'] = '.3s';
    this.actSlidesRef[1].current.style['transitionDuration'] = '.3s';
    this.actSlidesRef[slide].current.style['transform'] = `translate(${slide === 0 ? 100 : -100}%, 0)`;
    this.actSlidesRef[1].current.style['transform'] = `translate(${slide === 0 ? 100 : -100}%, 0)`;
    setTimeout(() => {
      if (slide === 0) this.actSlidesRef.slice(1).forEach(item => item.current.style['transform'] = '');
      else this.actSlidesRef.slice(0, 2).forEach(item => item.current.style['transform'] = '');
      this.actSlidesTransitionClear();
      this.setPage(slide === 0 ? this.state.page - 1 : this.state.page + 1);
      this.actSlidesRef[slide].current.style['transform'] = '';
      this.actSlidesRef[0].current.style['transform'] = '';
    }, 300);
  }

  setSwipeEvents() {
    this.sliderMainRef.current.onmousemove = (e) => this.handleMove(e.pageX);
    this.sliderMainRef.current.onmouseup = () => this.handleUp();
    this.sliderMainRef.current.onmouseout = () => this.sliderMainRef.current.onmouseup();
    this.sliderMainRef.current.ontouchmove = (e) => this.handleMove(e.targetTouches[0].clientX);
    this.sliderMainRef.current.ontouchend = () => this.handleUp();
  }

  clearSwipeEvents() {
    this.sliderMainRef.current.onmousemove = undefined;
    this.sliderMainRef.current.onmouseup = undefined;
    this.sliderMainRef.current.onmouseout = undefined;
    this.sliderMainRef.current.ontouchmove = undefined;
    this.sliderMainRef.current.ontouchend = undefined;
  }

  handleDown(coordX) {
    if (this.isAnimating) return;
    this.setSwipeEvents();
    this.sliderMainRef.current.style['cursor'] = 'grabbing';
    this.actSlidesRef[0].current.style['z-index'] = '1';
    this.actSlidesRef[2].current.style['z-index'] = '1';
    this.swipeOption.xStart = coordX;
  }

  selectPageBySwipe() {
    const diff = this.swipeOption.xStart - this.swipeOption.xEnd;
    if (diff < -100) this.actSlideChangePage(0);
    else if (diff > 100) this.actSlideChangePage(2);
    else {
      this.actSlidesRef.forEach(item => {
        item.current.style['transform'] = '';
        item.current.style['transitionDuration'] = '.3s';
      })
      setTimeout(() => this.actSlidesTransitionClear(), 300);
    }
  }

  handleUp() {
    if (this.isAnimating || !this.swipeOption.xStart || !this.swipeOption.xEnd) return;
    this.inputRef.current.value = '';
    this.isAnimating = true;
    this.clearSwipeEvents();
    this.selectPageBySwipe();
    this.sliderMainRef.current.style['cursor'] = '';
  }

  handleMove(coordX) {
    if (this.isAnimating) return;
    this.swipeOption.xEnd = coordX;
    const diff = this.swipeOption.xStart - this.swipeOption.xEnd;
    if (diff < 0) {
      this.actSlidesRef[0].current.style['transform'] = `translate(${-diff}px, 0)`;
      this.actSlidesRef[1].current.style['transform'] = `translate(${-diff / 2}px, 0)`;
      this.actSlidesRef[2].current.style['transform'] = '';
    } else {
      this.actSlidesRef[2].current.style['transform'] = `translate(${-diff}px, 0)`;
      this.actSlidesRef[1].current.style['transform'] = `translate(${-diff / 2}px, 0)`;
      this.actSlidesRef[0].current.style['transform'] = '';
    };
  }

  handleChangePageLeft() {
    if (!this.isAnimating) this.pageStep({ left: "0", page: -1 });
  }

  handleChangePageRight() {
    if (!this.isAnimating) this.pageStep({ left: "-200%", page: 1 });
  }

  render() {
    return (
      <div className="slider">
        <div className="slider-nav">
          <input type="number" min="1"
            max={this.state.slides.length}
            onChange={e => this.setPage(e.target.value)}
            placeholder={this.state.page} ref={this.inputRef} />
        </div>
        <div ref={this.sliderMainRef}
          onMouseDown={e => this.handleDown(e.pageX)}
          onTouchStart={e => this.handleDown(e.targetTouches[0].clientX)}
          className="slider-main">
          {this.getSlidesImg().map((item, index) => {
            return <div className="slide" key={`slide-${index}`} ref={this.actSlidesRef[index]} dangerouslySetInnerHTML={{ __html: item }}></div>
          })}
        </div>
      </div>
    );
  }
}

export default Slider;
