import React, { Component } from "react";

class Slide extends Component {
  render() {
    const { slideRef, children } = this.props

    return (
      <div className="slide" ref={slideRef()}>
        {children}
      </div>
    );
  }
}

export default Slide;
