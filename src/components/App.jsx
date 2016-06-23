import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setIsHomepageToolsListOpen } from './../action-creators/app-action-creators';
import Drawer from './Drawer.jsx!';

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
    return <div className="bg-dark bg-color-1">
      <div className="section u-pb++">
        <div className="text-center">

          <div className="circle-img circle-img--bordered u-mt++">
            <img className="circle-img__img" src="/static/img/me.jpg" />
          </div>

          <h1 className="text-shadow u-mt-">
            Hi. I'm Ryan
          </h1>
          <p className="text-italic">
            Interaction Developer, Front End Engineer, Visual Designer
          </p>

          <ul className="list-bare list-inline links-no-underline medium-icons color-4">
            <li>
              <a href="https://github.com/ryanirilli" className="icon-github u-ph-"></a>
            </li>
            <li>
              <a href="https://medium.com/@ryanirilli" className="icon-medium u-ph-"></a>
            </li>
            <li>
              <a href="https://twitter.com/ryanirilli" className="icon-twitter u-ph-"></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ryanirilli" className="icon-linkedin u-ph-"></a>
            </li>
          </ul>


        </div>
      </div>
    </div>
  },

  renderIntroSection() {
    const { setIsHomepageToolsListOpen, isHomepageToolsListOpen } = this.props;
    return <div className="bg-white">
      <div className="text-center u-pv++ palm-pv">
        <h2 className="u-mb+">
          I build <span className="color-4">great</span> web apps using modern tools
        </h2>
        <i className="icon-data" style={{fontSize: '100px'}}></i>

        {this.renderDottedLine()}
        <img src="/static/img/redux-logo.svg" className="u-100px" />
        <img src="/static/img/react-logo.svg" className="u-100px" />
        {this.renderDottedLine()}
        {this.renderDeviceIcons()}

        <div className="text-center u-mt+">
          <button className="btn" onClick={() => setIsHomepageToolsListOpen(!isHomepageToolsListOpen)}>
            See the complete tools list
          </button>
        </div>

        <Drawer isOpen={this.props.isHomepageToolsListOpen} className="opacity-0 transition-opacity" afterOpenClass="opacity-10">

          <div className="section u-pt+">

            <div className="layout">
              <div className="layout__item u-1/3">
                <div className="text-center">
                  <img src="/static/img/js-logo.svg" className="u-100px" />
                  <p>
                    Node is at the backbone of my work. it provides the environment for me to run my app in the browser and
                    write services to fetch data from all over the cloud.
                  </p>
                </div>
              </div>
              <div className="layout__item u-1/3">
                <div className="text-center">
                  <img src="/static/img/sass-logo.svg" className="u-75px" />
                  <p>
                    Node is at the backbone of my work. it provides the environment for me to run my app in the browser and
                    write services to fetch data from all over the cloud.
                  </p>
                </div>
              </div>
              <div className="layout__item u-1/3">
                <div className="text-center">
                  <img src="/static/img/grunt-logo.png" className="u-100px" />
                </div>
              </div>
            </div>



          </div>

        </Drawer>

      </div>
    </div>
  },

  renderDottedLine(width = '100px') {
    return <svg width={width} height="35px" viewBox="0 0 300 1" className="dotted-line">
      <line className="stroke-animation" 
            x1="10"
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
  return {
    isHomepageToolsListOpen: state.app.get('isHomepageToolsListOpen')
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setIsHomepageToolsListOpen }, dispatch);
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);