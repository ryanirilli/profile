import React, {Component} from 'react';

export default class Intro extends Component {
  render() {
    return <div className="ib text-left">
      <div className="media media--tiny">
        <div className="media__img">
          <div className="u-pt-">
            <div className="circle-img circle-img--bordered shadow slide-from-left">
              <img className="circle-img__img" src={this.props.profileImgSrc} />
            </div>
          </div>
        </div>
        <div className="intro-animation__text media__body fade-in-delayed">
          <div className="u-pl-">
            <p className="u-mt0 u-mb- main-title">
              Hello, I'm Ryan
            </p>

            <div>
              <span className="tag-yellow u-mr-- u-mb--">
                Javascript Programmer
              </span>
              <span className="tag-blue u-mr-- u-mb--">
                UI Developer
              </span>
              <span className="tag-orange">
                Web Designer
              </span>
            </div>

            <p className="u-mb0 u-mt--">
              Specialized in web application development
            </p>

            <ul className="list-bare list-inline links-no-underline medium-icons color-4 u-mb- u-mt--">
              <li className="fx-grow-on-hover">
                <a href="https://github.com/ryanirilli" className="icon-github u-ph- u-pl0"></a>
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
          </div>
        </div>
      </div>
    </div>
  }
}