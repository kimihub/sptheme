'use scrict';

import { h, Component } from 'preact';
import { title } from '../../webpack.config.html'

export default class Slideshow extends Component {

  state = {
    spinner: true,
    slides: '',
  };

  componentWillMount () {
    let count = 0, slides = [];
    this.props.slides.forEach((slide, i) => {
      let img, url, style;
      img = new Image();
      url = slide;
      style = {backgroundImage: `url(${url})`};
      img.onload = e => {
        count++;
        this.onloadImage(slides, i, count);
      };
      img.src = url;
      slides[i] = <div key={i} className="slide" style={style}></div>;
      if (img.complete) {
        count++;
        this.onloadImage(slides, i, count);
      }
    });
  }

  onloadImage (slides, i, count) {
    // last image loaded
    if (count > i) {
      this.setState({
        slides: slides,
        spinner: false,
      })
    }
  }

  render ({}, {spinner, slides}) {
    return (
    	<section className="slideshow">
        <div className={`spinner${spinner? '':' hide'}`}>
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
        {slides}
        <div className="mask"></div>
        <h1 className="slideshow-title"><span className="access-text">{title}</span></h1>
    	</section>
    );
  }

};
