'use scrict';

import { h, Component } from 'preact';

export default class Nav extends Component {

	constructor(props) {
		super(props);
    this.state = {
      show: ''
    }
	}

	displayHref(link) {

		if (link.type == 'email') {
			return `mailto:${link.href}`;
		}

		else {
			return link.href;
		}

	}

  handleClick(e) {
    if (this.state.show === 'show') {
      this.setState({
        show: ''
      })
    } else {
      this.setState({
        show: 'show'
      })
    }
  }

  displayToggle() {
    if (this.props.mobilehide) {
      return (
        <div className="toggle" onclick={this.handleClick.bind(this)}></div>
      )
    }
  }

  render({links, mobilehide}, {show}) {
    return (
      <nav className={`${(mobilehide? 'mobilehide':'')} ${show}`}>
        {this.displayToggle()}
        <ul className="links">
      		{links.map(link => (
      			<li><a target="_blank" href={this.displayHref(link)}>{link.name}</a></li>
      		))}
      	</ul>
      </nav>
    );
  }

}
