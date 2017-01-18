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

  render({links}, {show}) {
    return (
      <nav className={show}>
        <div className="toggle" onclick={this.handleClick.bind(this)}></div>
      	<ul className="links">
      		{links.map(link => (
      			<li><a target="_blank" href={this.displayHref(link)}>{link.name}</a></li>
      		))}
      	</ul>
      </nav>
    );
  }

}
