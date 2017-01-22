'use strict';

import {h} from 'preact';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Publication from '../components/Publication';

const requireAll = require('../../lib/require-all');
const page = requireAll(require.context('../datas/publications', false, /\.(yml|gif|png|jpe?g)$/i), true).shift();
const artbooks = requireAll(require.context('../datas/publications/artbooks', false, /\.(yml|gif|png|jpe?g)$/i), true);
const figurines = requireAll(require.context('../datas/publications/figurines', false, /\.(yml|gif|png|jpe?g)$/i), true);
const fanzines = requireAll(require.context('../datas/publications/fanzines', false, /\.(yml|gif|png|jpe?g)$/i), true);

export default () => (
  <div class="page">
    <Header title="Publications" back={{href: window.routes['/'], text: 'Retour à l\'accueil'}} />
    <Intro text={page.intro} />
    <Publication items={figurines} type="figurines" title={page.figurines_title} subtitle={page.figurines_subtitle} />
    <Publication items={artbooks} type="artbooks" title={page.artbooks_title} subtitle={page.artbooks_subtitle} />
    <Publication items={fanzines} type="fanzines" title={page.fanzines_title} subtitle={page.fanzines_subtitle} />
  </div>
);
