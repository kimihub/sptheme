'use scrict';

import { h, Component } from 'preact';
import { title } from '../../webpack.config.html'

export default class Header extends Component {

  constructor(props) {
    super(props);
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

  render({cover}) {
    return (
    	<section className="header cover" style={cover?{backgroundImage: `url(${cover}`}:''}>
        <div className="mask">
          <div className="container">
            <h1><a className="header-logo" href="/" title={title}><span className="access-text">{title}</span></a></h1>
            {this.displayTitle()}
            {this.displayBack()}
          </div>
        </div>
    	</section>
    );
  }
  
};
