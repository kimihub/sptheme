'use strict';

import {h, render, Component} from 'preact';
import Header from '../components/Header';
import Team from '../components/Team';
import Footer from '../components/Footer';

class Layout extends Component {
	
	state = {
		team: h('div'),
		footer: h('div'),
	};

	componentDidMount() {
		fetch('/datas/Links.json')
			.then(res => {
				return res.json();
			})
			.then(json => {
				this.setState({
					footer: <Footer links={json._} />,
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
				<Header cover="about.jpg" title="À propos" back={{href: '/', text: 'Retour à l\'accueil'}} />
				{state.team}
				{state.footer}
			</div>
		);
	}
}

render(<Layout />, document.querySelector('#main'));