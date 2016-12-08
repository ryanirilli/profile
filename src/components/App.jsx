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
        {this.renderDesignWork() }
      </div>
      {this.renderFooter()}
    </div>
  },

  renderHeader() {
    return <header className="bg-dark bg-color-1 page bg-clouds fade-in--main">
      <div className="section u-pv++ scale-up--main">
        <div className="text-center">
          <div className="circle-img circle-img--bordered shadow">
            <img className="circle-img__img" src="/static/img/me.jpg" />
          </div>
          <h1 className="text-shadow u-mt- text-inset--dark">
            Hi, I'm Ryan
          </h1>
          <p className="text-italic u-ph">
            Front End Engineer / Web Designer / UX Developer
          </p>
          {this.renderSocialLinks()}
          <a className="color-2 links-no-underline link-with-icon"
             href="https://dl.dropboxusercontent.com/u/7119407/Ryan-Irilli-resume.pdf"
             target="_blank">
            <i className="icon-cloud-download"></i> resume
          </a>
        </div>
      </div>
    </header>
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
    return <section className="bg-white border-serrated-ends">
      <div className="text-center u-pv++ palm-pv section section--small section--small">
        <p className="text-dark-semi-transparent u-ph palm-ph+ palm-pv+">
          <span className="text-first-letter">I</span> am a career web app developer with 8 years experience working from start ups to large companies
          in both design and engineering roles. My work spans from graphic design to implementation to production builds
          and I care a great deal about building high quality and maintainable products over time for any device.
        </p>
      </div>
    </section>
  },

  renderPersonalProjects() {
    return <section>
      <div className="bg-dark bg-color-2">
        <div className="text-center">
          <img className="pull-up" src="/static/img/spotworm-main.png" />
        </div>
        <div className="u-pv++ text-center">
          <h1>Spotworm</h1>
          <p className="u-ph">A better music discovery app</p>
          <a className="btn" href="http://spotworm.com" target="_blank">
            <i className="icon-new-tab"></i> Launch It
          </a>
        </div>
      </div>


      <div className="bg-dark bg-color-4">
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
          <a className="btn u-mr-"
             href="https://github.com/Points/react-jspm-boilerplate"
             target="_blank">
            <i className="icon-new-tab"></i> Go to the Repo
          </a>
          <a className="btn"
             href="https://medium.com/@ryanirilli/a-simple-react-redux-starter-kit-7f419a263fd2#.bwu900i60"
             target="_blank">
            <i className="icon-medium"></i> Read The Post
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

  renderDesignWork() {
    return <section className="bg-white u-pv++">
      <div className="text-center u-ph">
        <h2>Unsullied Logo Design</h2>
        <p>A custom logo for our <a href="https://github.com/the-unsullied" target="_blank">Unsullied React Components</a> Repo</p>
        <img className="u-300px" src="/static/img/unsullied-logo.svg"/>
      </div>
    </section>
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