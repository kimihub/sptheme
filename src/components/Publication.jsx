'use scrict';

import { h, Component } from 'preact';

class Item extends Component {

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

  displayLink(link) {
    return (
      <p className="link">
        <a className="button" target="_blank" href={link}>{this.displayLinkName(link)}</a>
      </p>
    );
  }

  displayLinkName(href) {
    if (href.slice(-4) === '.pdf') {
      return 'Télécharger';
    }
    else {
      return 'Acheter';
    }
  }

  imageOnload () {
    this.setState({
      displayImage: 'inline-block'
    });
  }

  render({name, description, link, image}, {displayImage}) {
    return (
      <article className="item">
        <hr />
        <img src={image} onload={this.imageOnload.bind(this)} className="u-max-full-width cover" style={{display:displayImage}} />
        <h5>{name}</h5>
        <p>{description}</p>
        {link? this.displayLink(link):<div></div>}
        <div className="u-cf"></div>
      </article>
    )
  }

}

export default ({type, title, subtitle, items}) => (
  <section className={`publications ${type}`}>
    <div className="container">
      <div className="row">
        <h4 className="title">{title}</h4>
        <p className="subtitle">{subtitle}</p>
        <div className="items">
        {items.map(item => <Item {...item} />)}
        </div>
      </div>
    </div>
  </section>
);
