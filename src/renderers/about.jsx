'use strict';

import {h, render, Component} from 'preact';
import Header from '../components/Header';
import Team from '../components/Team';
import Nav from '../components/Nav';

class Layout extends Component {
	
	state = {
		team: h('div'),
		headerNav: h('div'),
    footerNav: h('div'),
	};

	componentDidMount() {
		fetch('/datas/Links.json')
			.then(res => {
				return res.json();
			})
			.then(json => {
				this.setState({
					headerNav: <Nav mobilehide={true} links={json._} />,
          footerNav: <Nav links={json._} />,
				});
			})
			.catch(err => {
				console.log('error', err);
			});
		fetch('/datas/Page.About.json')
			.then(res => {
				return res.json();
			}).then(json => {
				this.setState({
					team: <Team metas={json} />,
				});
			}).catch(err => {
				console('error', err);
			});
	}
	render({}, state) {		
		return (
			<div>
        {state.headerNav}
				<Header cover="about.jpg" title="À propos" back={{href: '/', text: 'Retour à l\'accueil'}} />
				{state.team}
				{state.footerNav}
			</div>
		);
	}
}

render(<Layout />, document.querySelector('#main'));
