'use scrict';

import { h, Component } from 'preact';

export default class Header extends Component {

  constructor(props) {
    super(props);
  }
  

  displayNav() {
    if (this.props.nav) {
      return (
        <nav>
        {this.props.nav.map(this.displayLink)}
        </nav>
      );
    }
  }

  displayLink(link, i) {
    if (link.type === 'url') {
      return (
        <a key={i} target="_blank" href={link.href}>{link.name}</a>
      );
    }
  }

  displayBack() {
    if (this.props.back) {
      return (
        <a className="header-back" href={this.props.back.href}>{this.props.back.text}</a>
      );
    }
  }

  displayTitle() {
    if (this.props.title) {
      return (
        <h3 className="header-title">{this.props.title}</h3>
      );
    }
  }

  render() {
    return (
    	<section className={'header' + (this.props.nav? ' with-nav':'')}>
        <div className="container">
          <h1><a className="header-logo" href="/" title="Studio Némésis"><span className="access-text">Studio Némésis</span></a></h1>
          {this.displayNav()}
          {this.displayTitle()}
          {this.displayBack()}
        </div>
    	</section>
    );
  }
  
};
