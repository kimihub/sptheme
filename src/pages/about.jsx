'use strict';

import {h} from 'preact';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Team from '../components/Team';

const requireAll = require('../../lib/require-all');
const page = requireAll(require.context('../datas/about', false, /\.(yml|gif|png|jpe?g)$/i), true).shift();
const members = requireAll(require.context('../datas/about/team', false, /\.(yml|gif|png|jpe?g)$/i), true);

module.exports = () => (
  <div class="page">
		<Header cover={page.image} title="À propos" back={{href: window.routes['/'], text: 'Retour à l\'accueil'}} />
		<Intro text={page.intro} />
    <Team header={page.header} footer={page.footer} members={members} />
	</div>
);
