'use scrict';

import { h, Component } from 'preact';

export default class Fanzines extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      contentClassName: '',
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

  componentDidMount() {
    let type = this.props.type;

    fetch(`/datas/${type.charAt(0).toUpperCase() + type.slice(1)}.json`)
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({
          items: json._,
          contentClassName: 'show',
        });
      })
      .catch(err => {
        console.log('fetch error', err);
      });
  }

  render({type, title, subtitle}, {items, contentClassName}) {
    return (
    	<section className={`${type} content ${contentClassName}`}>
        <div className="container">
          <div className="row">
            <h4 className="title">{title}</h4>
            <p className="subtitle">{subtitle}</p>
            <div className="items">
            {items.map(i => (
              <article className="item">
                <hr />
                <img className="u-max-full-width cover" src={`/medias/${type}/${i.image}`} />
                <h5>{i.name}</h5>
                <p>{i.description}</p>
                {i.link? this.displayLink(i.link):<div></div>}
                <div className="u-cf"></div>
              </article>
            ))}
            </div>
          </div>
        </div>
    	</section>
    );
  }

};
