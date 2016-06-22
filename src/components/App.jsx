import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export const App = React.createClass({

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

  render() {
    return <div className="app-container">

      {this.renderHeader()}

      <div className="page bg-dark bg-white">
        <div className="text-center u-pv++ palm-pv">
          <h2>I build great web applications using modern tools</h2>

          <img src="/static/img/redux-logo.svg" className="u-100px" />
          <img src="/static/img/react-logo.svg" className="u-100px" />

        </div>

      </div>
      <div className="page bg-dark bg-color-4">
        <div className="u-pv++">

        </div>
      </div>
      <div className="page bg-dark bg-color-3">
        <div className="u-pv++">

        </div>
      </div>

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