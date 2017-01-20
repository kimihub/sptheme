'use strict';

import {h} from 'preact';
import Slideshow from '../components/Slideshow';
import Home from '../components/Home';
import Intro from '../components/Intro';

const requireAll = require('../../lib/require-all');
const page = requireAll(require.context('../datas/index', false, /\.(yml|gif|png|jpe?g)$/i), true).shift();
const publications = requireAll(require.context('../datas/index/home', false, /\.(yml|gif|png|jpe?g)$/i), true);
const slides = requireAll(require.context('../datas/index/slideshow', false, /\.(gif|png|jpe?g)$/i));

module.exports = () => (
  <div class="page">
    <Slideshow slides={slides} />
    <Intro text={page.intro} link={{name: 'En savoir plus', href: '/about.html'}} />
    <Home items={publications} title={page.home_title} />
  </div>
);
