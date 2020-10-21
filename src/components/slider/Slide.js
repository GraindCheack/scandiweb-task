import React, { Component } from "react";

class Slide extends Component {
  getElement(content, index) {
    const { tag, properties = null, children } = content;
    if (!tag) return null;
    const newProps = { key: `slide-${this.props.number}-${tag}-${index}`, ...properties };
    const newchildren = children ? (typeof children === 'string' ? children : children.map(item => this.getElement(item, ++index))) : null;
    return React.createElement(tag, newProps, newchildren);
  }

  render() {
    return (
      <div className="slide" ref={this.props.slideRef()}>
        {this.getElement(this.props.content, 0)}
      </div>
    );
  }
}

export default Slide;
