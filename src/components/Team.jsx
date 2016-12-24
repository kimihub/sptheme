'use scrict';

import { h, Component } from 'preact';

export default class Team extends Component {

  constructor(props) {
    super(props);
    this.state = {
      members: [],
      contentClassName: '',
    };
  }

  componentDidMount() {
    fetch('/datas/Team.json')
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({
          members: json._,
          contentClassName: 'show',
        });
      })
      .catch(err => {
        console.log('fetch error', err);
      });
  }

  displaySocialLink(type, text) {
    if (type == 'website') {
      return text.replace(/(http|https)\:\/\//gi,'');
    }
    else {
      return <span></span>;
    }
  }

  render({metas}, {members, contentClassName}) {
    return (
    	<section className={`team content ${contentClassName}`}>
        <div className="container">
          <header className="team-header">
            <p></p>
          </header>
          <hr />
          <div className="row">
          {members.map(member => (
            <article className="member">
              <img className="u-max-full-width member-avatar" src={'/medias/team/' + member.name.toLowerCase().replace(/é|è|ê/gi, "e") + '.png'} />
              <div className="member-heading">
                <h4>{member.position}</h4>
              </div>
              <div className="member-intro">
                <h5>{member.name}</h5>
                <p>{member.intro}</p>
              </div>
              <div className="social member-social">
                <ul>
                {Object.keys(member.social).map(prop => (
                  <li className={prop}>
                    <a target="_blank" href={member.social[prop]} title={prop}>{this.displaySocialLink(prop, member.social[prop])}</a>
                  </li>
                ))}
                </ul>
              </div>
            </article>
          ))}
          </div>
          <footer><p>{metas.footer}</p></footer>
        </div>
    	</section>
    );
  }

};
