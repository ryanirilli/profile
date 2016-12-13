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
          <p className="u-ph">
            Front End Engineer / Web Designer
          </p>
          {this.renderSocialLinks()}
          <a className="color-2 links-no-underline link-with-icon "
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
      <li className="fx-grow-on-hover">
        <a href="https://github.com/ryanirilli" className="icon-github u-ph-"></a>
      </li>
      <li className="fx-grow-on-hover">
        <a href="https://medium.com/@ryanirilli" className="icon-medium u-ph-"></a>
      </li>
      <li className="fx-grow-on-hover">
        <a href="https://twitter.com/ryanirilli" className="icon-twitter u-ph-"></a>
      </li>
      <li className="fx-grow-on-hover">
        <a href="https://www.linkedin.com/in/ryanirilli" className="icon-linkedin u-ph-"></a>
      </li>
    </ul>
  },

  renderIntroSection() {
    return <section className="bg-color-4 border-serrated-ends">
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
      <div className="bg-white">
        <div className="text-center">
          <img className="pull-up" src="/static/img/spotworm-main.png" />
        </div>
        <div className="text-center">
          <h1 className="u-mt0">
            Spotworm
          </h1>
          <p className="u-ph">
            A better music discovery app
          </p>
          <div className="section u-ph">
            <div className="layout layout--center">
              <div className="layout__item u-1/2 u-1/1-palm">
                <p>
                  My latest project, Spotworm, is built for modern music nerds on the hunt for the best new tunes. It uses the power
                  of the Spotify API to let you search by artist, and gives you a list of tracks you might like. You can
                  instantly sample tracks by hovering on your laptop, or tapping on mobile device and easily
                  swipe through hundreds of tracks. When you find your jam, simply add it to a playlist and keep on browsing.
                </p>
              </div>
              <div className="layout__item u-1/2 u-1/1-palm">
                <p>
                  This project explores the technical design decisions that need to be addressed when building
                  a mobile and desktop application, where the user experience requires more than just css media queries. By
                  syncing the css breakpoints with javascript and using React and Redux, I am able to leverage shared code
                  while also creating specific user experiences for each context.
                </p>
              </div>
            </div>
          </div>
          <div className="u-pb+ palm-pb0 u-pt">
            <a className="btn" href="http://spotworm.com" target="_blank">
              <i className="icon-new-tab"></i> Launch It
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="section u-pv++ u-ph palm-pt+">
          <div className="text-center">
            <h1 className="u-mt0">
              Metropolis
            </h1>
            <p className="u-ph">
              Logo Design and Team Branding
            </p>
          </div>

          <div className="layout layout--center">
            <div className="layout__item u-1/2 u-1/1-palm">
              <p>
                I work at Uber on a team called Metropolis. We aim to help cities use our data to help inform decision making
                in urban planning and development. We're a group of rock solid engineers tackling some really difficult challenges.
                My role is mostly in the front end architecture and managing the user experience, so I primarily work on
                the implementation side of things.
              </p>
            </div>
            <div className="layout__item u-1/2 u-1/1-palm">
              <p>
                I was asked to come up with a logo for our team to represent our work and mission. A family crest seemed most
                appropriate here seeing how tightly knit we were with one another. The subtle hexagon pattern represents the various
                zones we bucket neighborhoods in, and of course the iconic Space Needle to let the larger Uber groups know about
                the quality of work coming straight outta the Pacific Northwest.
              </p>
            </div>
          </div>

          <div className="layout layout--center u-pt+">
            <div className="layout__item u-1/4 u-1/2-palm">
              <div className="u-p">
                <img className="u-1/1" src="/static/img/metropolis-logo/on-white.svg"/>
              </div>
            </div>
            <div className="layout__item u-1/4 u-1/2-palm">
              <div className="u-p bg-black">
                <img className="u-1/1" src="/static/img/metropolis-logo/on-black.svg"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="section u-pt u-pb++ u-ph palm-pt0">
          <div className="text-center">
            <h1 className="u-mt0">
              Visaudio
            </h1>
            <p className="u-ph">
              Play your Facebook photos to the beat of music
            </p>
          </div>

          <div className="layout layout--center">
            <div className="layout__item u-1/2 u-1/1-palm">
              <p>
                Visaudio is an experiment with the Web Audio API. It uses audio frequency to control the rate of a photo
                slideshow. The essential logic behind it is to average out the frequency value at a given sample, and compare
                it to the previous one. If the difference between them exceeds a threshold, it advances the photo
              </p>
            </div>
            <div className="layout__item u-1/2 u-1/1-palm">
              <p>
                This gives some really interesting results and has potential to create some beautiful slideshows. I collaborated
                on this project with another developer, Bradley Schoch, and we submitted it to the Dolby Web Audio contest. Though
                we did not win, the types of challenges we discovered was very satisfying and the collaboration was a great experience.
              </p>
            </div>
          </div>

          <div className="u-pb+ u-pt text-center">
            <a className="btn" href="http://visaudio.me" target="_blank">
              <i className="icon-new-tab"></i> Launch It
            </a>
          </div>

        </div>
      </div>

      <div className="bg-blue">
        <div className="u-pv++ palm-pb0 text-center palm-pt+">
          <h1 className="u-mt0">
            React + JSPM Boilerplate
          </h1>
          <p className="u-ph">An Open Source Project to Kickstart your next React & Redux App</p>
          <a className="btn u-mr- palm-mr0 u-1/1-palm"
             href="https://github.com/Points/react-jspm-boilerplate"
             target="_blank">
            <i className="icon-github"></i> Go to the Repo
          </a>
          <a className="btn btn--secondary u-1/1-palm"
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
        Thanks for visiting! made with <i className="icon-heart"></i> in Seattle, WA <br /> if you're interested in working with me feel free to send me an <a className="color-3" href="mailto:ryanirilli@gmail.com">email</a>
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