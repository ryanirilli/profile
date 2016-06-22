import React from 'react';

export default React.createClass({
  render() {
    const style = {
      backgroundImage: `url(https://unsplash.it/${window.outerWidth}?image=${this.props.image || '1046'}&${this.props.blur ? 'blur' : ''}`
    };
    const { className, children } = this.props;
    return <div style={style} className={className}>
      {children}
    </div>
  }
});