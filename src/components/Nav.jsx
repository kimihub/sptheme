'use scrict';

import { h, Component } from 'preact';

export default class Nav extends Component {

	state = {
    show: false
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
    if (this.state.show) {
      this.setState({
        show: false
      })
    } else {
      this.setState({
        show: true
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
      <nav className={`${mobilehide? 'mobilehide':''}${show? ' show':''}`}>
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
