import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export const App = React.createClass({

  render() {
    return <div>
      <div className="app-container">
        {this.renderHeader()}
        {this.renderIntroSection()}
        {this.renderPersonalProjects()}
      </div>
      {this.renderFooter()}
    </div>
  },

  renderHeader() {
    return <div className="bg-dark bg-color-1">
      <div className="section u-pv++">
        <div className="text-center">
          <div className="circle-img circle-img--bordered">
            <img className="circle-img__img" src="/static/img/me.jpg" />
          </div>
          <h1 className="text-shadow u-mt-">
            Hi. I'm Ryan
          </h1>
          <p className="text-italic u-ph">
            Interaction Developer, Front End Engineer, Visual Designer
          </p>
          {this.renderSocialLinks()}
          <a className="color-2 links-no-underline link-with-icon"
             href="https://dl.dropboxusercontent.com/u/7119407/Ryan-Irilli-Resume.pdf"
             target="_blank">
            <i className="icon-cloud-download"></i> resume
          </a>
        </div>
      </div>
    </div>
  },
  
  renderSocialLinks() {
    return <ul className="list-bare list-inline links-no-underline medium-icons color-4 u-mb-">
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
  },

  renderIntroSection() {
    return <div className="bg-white">
      <div className="text-center u-pv++ palm-pv">
        <h2 className="u-mb+">
          I build <span className="color-4">great</span> web apps using modern tools
        </h2>
        <div className="section">
          <div className="layout">
            <div className="layout__item u-1/5 u-1/1-palm">
              <i className="icon-data" style={{fontSize: '100px'}}></i>
            </div>
            <div className="layout__item u-1/5 u-1/1-palm">
              {this.renderDottedLine()}
            </div>
            <div className="layout__item u-1/5 u-1/1-palm">
              <img src="/static/img/redux-logo.svg" className="u-75px" />
              <img src="/static/img/react-logo.svg" className="u-75px" />
            </div>
            <div className="layout__item u-1/5 u-1/1-palm">
              {this.renderDottedLine()}
            </div>
            <div className="layout__item u-1/5 u-1/1-palm">
              {this.renderDeviceIcons()}
            </div>
          </div>
        </div>
        {this.renderCompleteTools()}
      </div>
    </div>
  },

  renderCompleteTools() {
    return <div className="u-pt+">
      <div className="section u-pt+">
        <div className="layout">
          <div className="layout__item u-1/3 u-1/1-palm u-mb">
            <div className="text-center palm-ph">
              <img src="/static/img/js-logo.svg" className="u-100px" />
              <p>
                Javascript, the Jon Snow of programming, I have come to love it and all the power it affords me when
                making bad ass UI. It is my central skill set and I am continually learning how to use it better.
              </p>
            </div>
          </div>
          <div className="layout__item u-1/3 u-1/1-palm u-mb">
            <div className="text-center palm-ph">
              <img src="/static/img/sass-logo.svg" className="u-75px" />
              <p>
                My css pre-processor of choice. It enables me to write css that doesn't suck. Coupled with concepts of
                OOCSS and the Inverted Triangle Architecture, my css stays lean, reusable, and easy to use.
              </p>
            </div>
          </div>
          <div className="layout__item u-1/3 u-1/1-palm u-mb">
            <div className="text-center palm-ph">
              <img src="/static/img/gulp-grunt-logos.png" className="u-100px" />
              <p>
                Build tools! with all due respect to npm scripts, tools like these and their ecosystem of plugins
                make it so that I can develop, transpile, bundle my code and deliver it to you fine folks with ease.
              </p>
            </div>
          </div>
          <div className="layout__item u-1/3 u-1/1-palm u-mb">
            <div className="text-center palm-ph">
              <img src="/static/img/photoshop-logo.svg" className="u-50px" />
              <p>
                Where would any designer be without Photoshop. Flows, quick and dirty mockups, right down to pixel perfection.
                It is the de facto software I use to pump out graphics and all types of visual bliss.
              </p>
            </div>
          </div>
          <div className="layout__item u-1/3 u-1/1-palm u-mb">
            <div className="text-center palm-ph">
              <img src="/static/img/illustrator-logo.svg" className="u-50px" />
              <p>
                Illustrator, my vector based counterpart for when you need a scalable graphic including logos, icons and
                animatable assets. Or when you want to trace Kanye West.
              </p>
            </div>
          </div>
          <div className="layout__item u-1/3 u-1/1-palm u-mb">
            <div className="text-center palm-ph">
              <img src="/static/img/after-effects-logo.svg" className="u-50px" />
              <p>
                After Effects is a motion graphics tool and can be handy in many ways. I use it to create animated product videos,
                interesting interactions, or experiments in motion bringing UX to life without all the nonsense  of writing code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  },

  renderPersonalProjects() {
    return <section>
      <div className="bg-dark bg-color-4">
        <div className="banner">
          <div className="banner__content">
            Personal Projects
          </div>
        </div>

        <div className="u-pv++ text-center">
          <h1>Visaudio</h1>
          <p className="u-ph">Play all your Facebook photos to the beat of music</p>
          <a className="btn" href="http://visaudio.me/" target="_blank">
            <i className="icon-new-tab"></i> Launch App
          </a>
        </div>
      </div>

      <div className="bg-dark bg-color-5">
        <div className="u-pv++ text-center">
          <h1>React + JSPM Boilerplate</h1>
          <p className="u-ph">An Open Source Project to Kickstart your next React & Redux App</p>
          <a className="btn" href="https://github.com/Points/react-jspm-boilerplate" target="_blank">
            <i className="icon-new-tab"></i> Go to the Repo
          </a>
        </div>
      </div>

      <div className="bg-dark bg-color-3">
        <div className="u-pv++ text-center">
          <h1>Travlr</h1>
          <p className="u-ph">Collaborative travel planning made easy</p>
          <a className="btn" href="http://www.thetravlr.com" target="_blank">
            <i className="icon-new-tab"></i> Launch App
          </a>
        </div>
      </div>
    </section>
  },

  renderDottedLine(width = '100px') {
    return <svg width={width} height="35px" viewBox="0 0 300 1" className="rotate-vertical-palm homepage-dotted-line">
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
  },

  renderFooter() {
    return <footer className="footer u-ph">
      <div className="text-center">
        Thanks for visiting my site. made with <i className="icon-heart"></i> in Seattle, WA <br /> if you're interested in working with me feel free to send me an <a className="color-3" href="mailto:ryanirilli@gmail.com">email</a>
      </div>
    </footer>
  }
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);