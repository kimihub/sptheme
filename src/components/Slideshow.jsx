'use scrict';

import { h, Component } from 'preact';

export default class Slideshow extends Component {

  constructor (props) {
    super(props);

    this.state = {
      slides: [],
    };
  }

  componentDidMount() {
    fetch('/datas/Slideshow.json')
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({slides: json._});
      })
      .catch(err => {
        console.log('error', err);
      });

  }

  render () {
    return (
    	<section className="slideshow">
        <div className="mask">
          <h1 className="slideshow-title"><span className="access-text">Studio Némésis</span></h1>
        </div>
        {this.state.slides.map((slide, i) => (
          <div key={i} className="u-full-width slide" style={{backgroundImage: 'url(/medias/slideshow/' + slide + ')'}}></div>
        ))}
    	</section>
    );
  }

};
