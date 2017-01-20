'use scrict';

import { h, Component } from 'preact';

export default class Team extends Component {

  constructor(props) {
    super(props);
  }

  displaySocialLink(type, text) {
    if (type == 'website') {
      return text.replace(/(http|https)\:\/\//gi,'');
    }
    else {
      return <span></span>;
    }
  }

  render({header, footer, members}) {
    return (
    	<section className="team">
        <div className="container">
          <header className="team-header">
            <p>{header}</p>
          </header>
          <hr />
          <div className="row">
          {members.map(member => (
            <article className="member">
            {!member.image? '':<img className="u-max-full-width member-avatar" src={member.image} />}
              <div className="member-heading">
                <h4>{member.position}</h4>
              </div>
              <div className="member-intro">
                <h5>{member.name}</h5>
                <p>{member.intro}</p>
              </div>
              <div className="social member-social">
                <ul>
                {!member.social? '':Object.keys(member.social).map(prop => (
                  <li className={prop}>
                    <a target="_blank" href={member.social[prop]} title={prop}>{this.displaySocialLink(prop, member.social[prop])}</a>
                  </li>
                ))}
                </ul>
              </div>
            </article>
          ))}
          </div>
          <footer><p>{footer}</p></footer>
        </div>
    	</section>
    );
  }

};
