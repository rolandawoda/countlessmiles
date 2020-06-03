import React from 'react';
import Navigation from './navigation';

const Hero = (props) => {
  return (
    <div className="hero">
      <Navigation clicked = {props.clicked}/>
      <div className="hero__main row">
        <h1 className="hero__heading">
           If You Love Travel <br/>Travel Freedom is Here
        </h1>
        <p className="hero__text">
          Experience Travel-As-A-Service With Our End-To-End Trip Planning Platform. 
        </p>
        <a href="#" className="hero__button" onClick={props.clicked}>
          Get early access
          <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero__right">
            <path d="M0.190067 7.78273C0.258093 7.85185 0.338779 7.90655 0.4275 7.94369C0.51622 7.98084 0.611231 7.9997 0.707087 7.99919C0.797873 8.00374 0.888595 7.989 0.973535 7.95588C1.05848 7.92277 1.13579 7.872 1.20061 7.80678L4.58474 4.53581C4.65295 4.46651 4.70709 4.38407 4.74404 4.29326C4.78098 4.20245 4.8 4.10505 4.8 4.00668C4.8 3.90831 4.78098 3.81092 4.74404 3.7201C4.70709 3.62929 4.65295 3.54686 4.58474 3.47755L1.20061 0.20658C1.13335 0.139028 1.05355 0.0859584 0.965911 0.0505098C0.878273 0.0150613 0.784582 -0.00204715 0.690374 0.000195053C0.596165 0.00243725 0.503352 0.0239852 0.41742 0.0635647C0.331487 0.103144 0.25418 0.159952 0.190067 0.230631C0.0639763 0.368631 -0.00419427 0.55174 0.000199983 0.740621C0.00459423 0.929501 0.0812032 1.10908 0.213568 1.24078L3.05718 4.00668L0.213568 6.77258C0.0812032 6.90428 0.00459423 7.08386 0.000199983 7.27274C-0.00419427 7.46162 0.0639763 7.64473 0.190067 7.78273Z" fill="#039785"/>
          </svg>
        </a>
      </div>

      <div className="hero__control row">
        <div className="hero__control__inline">
          <span className="hero__control__count">
            01
            <span className="hero__control__count__total">/03</span>
          </span>
          <div>
            <span className="hero__control__prev">prev</span>
            <span className="hero__control__progress"></span>
            <span className="hero__control__next">next</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;