'use strict';

import {h} from 'preact';
import Header from '../components/Header';
import Intro from '../components/Intro';
import PublicationsItems from '../components/Publications.Items';

const requireAll = require('../../lib/require-all');
const page = requireAll(require.context('../datas/publications', false, /\.(yml|gif|png|jpe?g)$/i), true).shift();
const artbooks = requireAll(require.context('../datas/publications/artbooks', false, /\.(yml|gif|png|jpe?g)$/i), true);
const figurines = requireAll(require.context('../datas/publications/figurines', false, /\.(yml|gif|png|jpe?g)$/i), true);
const fanzines = requireAll(require.context('../datas/publications/fanzines', false, /\.(yml|gif|png|jpe?g)$/i), true);

module.exports = () => (
  <div class="page">
    <Header title="Publications" back={{href: '/', text: 'Retour à l\'accueil'}} />
    <Intro text={page.intro} />
    <PublicationsItems items={figurines} type="figurines" title={page.figurines_title} subtitle={page.figurines_subtitle} />
    <PublicationsItems items={artbooks} type="artbooks" title={page.artbooks_title} subtitle={page.artbooks_subtitle} />
    <PublicationsItems items={fanzines} type="fanzines" title={page.fanzines_title} subtitle={page.fanzines_subtitle} />
  </div>
);
