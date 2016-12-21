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
        <div className="cover">
          <h3 className="container slideshow-title"></h3>
        </div>
        {this.state.slides.map((slide, i) => (
          <div key={i} className="u-full-width slide" style={{backgroundImage: 'url(/medias/slideshow/' + slide + ')'}}></div>
        ))}
    	</section>
    );
  }

};
