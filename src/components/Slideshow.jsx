'use scrict';

import { h, Component } from 'preact';
import { title } from '../../webpack.config.html'

export default class Slideshow extends Component {

  state = {
    spinnerClassName: 'spinner',
    slides: '',
  };

  componentDidMount() {
    let count = 0;
    this.props.slides.forEach((slide, i) => {
      let img = new Image();
      let url = slide;
      let style = {backgroundImage: `url(${url})`};
      img.onload = e => {
        count++;

        // last image loaded
        if (count > i) {
          this.setState({
            slides: this.props.slides,
            spinnerClassName: 'spinner hide',
          })
        }

      };
      img.src = url;
      this.props.slides[i] = <div key={i} className="slide" style={style}></div>;
    });
  }

  render ({}, state) {
    return (
    	<section className="slideshow">
        <div className={state.spinnerClassName}>
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
        {state.slides}
        <div className="mask"></div>
        <h1 className="slideshow-title"><span className="access-text">{title}</span></h1>
    	</section>
    );
  }

};
