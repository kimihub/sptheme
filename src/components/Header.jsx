'use scrict';

import { h, Component } from 'preact';
import { title } from '../../webpack.config.html'

export default class Header extends Component {
  
  state = {
    cover: ''
  }

  componentWillMount () {
    if (this.props.cover) {
      let img = new Image();
      img.onload = e => {
        this.onloadImage();
      };
      img.src = this.props.cover;
      if (img.complete) {
        this.onloadImage();
      }
    };
  }

  onloadImage () {
    this.setState({
      cover: {backgroundImage: `url(${this.props.cover}`}
    })
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

  render({children}, state) {
    if (children.length > 0) {
      return (
       <section className="header">
        {children}
       </section>
      )
    }
    return (
    	<section className="header cover" style={state.cover}>
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
