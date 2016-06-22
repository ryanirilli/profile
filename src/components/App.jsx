import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export const App = React.createClass({

  render() {
    return <div className="app-container">
      {this.renderHeader()}
      {this.renderIntroSection()}

      <div className="page bg-dark bg-color-4">
        <div className="u-pv++">

        </div>
      </div>
      <div className="page bg-dark bg-color-3">
        <div className="u-pv++">

        </div>
      </div>

    </div>
  },

  renderHeader() {
    return <div className="bg-light bg-color-1">
      <div className="section u-pb++">
        <div className="text-center">

          <div className="circle-img u-mt++">
            <img className="circle-img__img" src="/static/img/me.jpg" />
          </div>

          <h1 className="text-shadow u-mt-">
            Hi. I'm Ryan
          </h1>
          <p className="text-italic">
            Interaction Developer, Front End Engineer, Visual Designer
          </p>
        </div>
      </div>
    </div>
  },

  renderIntroSection() {
    return <div className="bg-white">
      <div className="text-center u-pv++ palm-pv">
        <h2 className="u-mb+">I build great web apps using modern tools</h2>
        <i className="icon-data" style={{fontSize: '100px'}}></i>
        {this.renderDottedLine()}
        <img src="/static/img/redux-logo.svg" className="u-100px" />
        <img src="/static/img/react-logo.svg" className="u-100px" />
        {this.renderDottedLine()}
        {this.renderDeviceIcons()}
      </div>
    </div>
  },

  renderDottedLine(width = '100px') {
    return <svg width={width} height="35px" viewBox="0 0 300 1" className="dotted-line">
      <line x1="10"
            x2="300"
            y1="0"
            y2="0"
            stroke="#004358"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="1, 20">
      </line>
    </svg>
  },

  renderDeviceIcons() {
    return <div className="ib">
      <i className="icon-display" style={{fontSize: '100px'}}></i>
      <i className="icon-phone" style={{fontSize: '50px'}}></i>
    </div>
  }
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);