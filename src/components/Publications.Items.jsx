'use scrict';

import { h, Component } from 'preact';

export default class Publications extends Component {

  constructor(props) {
    super(props);
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

  render({type, title, subtitle, items}) {
    return (
    	<section className={`publications ${type}`}>
        <div className="container">
          <div className="row">
            <h4 className="title">{title}</h4>
            <p className="subtitle">{subtitle}</p>
            <div className="items">
            {items.map(i => (
              <article className="item">
                <hr />
                {!i.image?'':<img className="u-max-full-width cover" src={i.image} />}
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
