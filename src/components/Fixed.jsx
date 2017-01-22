'use scrict';

import { h, Component } from 'preact';

export default class Nav extends Component {

	displayHref(link) {

		if (link.type == 'email') {
			return `mailto:${link.href}`;
		}

		else {
			return link.href;
		}

	}

  render({links}) {
    return (
      <section className="nav">
      	<div className="space"></div>
      	<div className="fixed">
	        <div className="container">
	        	<ul className="links">
	        		{links.map(link => (
	        			<li><a target="_blank" href={this.displayHref(link)}>{link.name}</a></li>
	        		))}
	        	</ul>
	        </div>
	       </div>
      </section>
    );
  }

}
