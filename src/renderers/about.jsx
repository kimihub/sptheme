'use strict';

import {h, render, Component} from 'preact';
import Header from '../components/Header';
import Team from '../components/Team';
import Nav from '../components/Nav';

const requireAll = require('../../lib/require-all');
const page = requireAll(require.context('../datas/about', false, /\.(yml|gif|png|jpe?g)$/i), true).shift();
const links = requireAll(require.context('../datas/common/nav', false, /\.yml$/i));
const members = requireAll(require.context('../datas/about/team', false, /\.(yml|gif|png|jpe?g)$/i), true);

class Layout extends Component {

	render() {		
		return (
			<div>
        <Nav links={links} mobilehide={true} />
				<Header cover={page.image} title="À propos" back={{href: '/', text: 'Retour à l\'accueil'}} />
				<Team header={page.header} footer={page.footer} members={members} />
				<Nav links={links} />
			</div>
		);
	}
}

render(<Layout />, document.querySelector('#main'));
