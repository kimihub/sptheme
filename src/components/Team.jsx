'use scrict';

import { h, Component } from 'preact';

class Member extends Component {

  state = {
    displayImage: 'none'
  }

  componentWillMount () {
    if (this.props.image) {
      let img = new Image();
      img.src = this.props.image;
      if (img.complete) {
        this.imageOnload();
      }
    }
  }

  displaySocialLink (type, text) {
    if (type == 'website') {
      return text.replace(/(http|https)\:\/\//gi,'');
    }
    else {
      return <span></span>;
    }
  }

  imageOnload () {
    this.setState({
      displayImage: 'inline-block'
    });
  }

  render({position, name, intro, social, image}, {displayImage}) {
    return (
      <article className="member">
        <img src={image} onload={this.imageOnload.bind(this)} className="u-max-full-width member-avatar" style={{display:displayImage}} />
        <div className="member-heading">
          <h4>{position}</h4>
        </div>
        <div className="member-intro">
          <h5>{name}</h5>
          <p>{intro}</p>
        </div>
        <div className="social member-social">
          <ul>
          {Object.keys(social?social:{}).map(prop => (
            <li className={prop}>
              <a target="_blank" href={social[prop]} title={prop}>{this.displaySocialLink(prop, social[prop])}</a>
            </li>
          ))}
          </ul>
        </div>
        <hr />
      </article>
    )
  }
}

export default ({header, footer, members}) => (
	<section className="team">
    <div className="container">
      <header className="team-header">
        <p>{header}</p>
      </header>
      <hr />
      <div className="row">
      {members.map(member => <Member {...member} />)}
      </div>
      <footer><p>{footer}</p></footer>
    </div>
	</section>
);
