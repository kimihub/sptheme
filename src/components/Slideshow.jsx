'use scrict';

import { h, Component } from 'preact';

export default class Slideshow extends Component {

  state = {
    spinnerClassName: 'spinner',
    slides: '',
  };

  componentDidMount() {
    fetch('/datas/Slideshow.json')
      .then(res => {
        return res.json();
      })
      .then(this.preloadImages.bind(this))
      .catch(err => {
        console.log('error', err);
      });
  }

  preloadImages(json) {
    let count = 0;
    json._.forEach((slide, i) => {
      let img = new Image();
      let url = '/medias/slideshow/' + slide;
      let style = {backgroundImage: `url(${url})`};
      img.onload = e => {
        count++;

        // last image loaded
        if (count > i) {
          this.setState({
            slides: json._,
            spinnerClassName: 'spinner hide',
          })
        }

      };
      img.src = url;
      json._[i] = <div key={i} className="slide" style={style}></div>;
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
        <h1 className="slideshow-title"><span className="access-text">Studio Némésis</span></h1>
    	</section>
    );
  }

};
