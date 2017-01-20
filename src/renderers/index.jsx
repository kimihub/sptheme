'use strict';

import { h, render, Component } from 'preact';
import Slideshow from '../components/Slideshow';
import Home from '../components/Home';
import Intro from '../components/Intro';
import Nav from '../components/Nav';

const requireAll = require('../../lib/require-all');
const page = requireAll(require.context('../datas/index', false, /\.(yml|gif|png|jpe?g)$/i), true).shift();
const links = requireAll(require.context('../datas/common/nav', false, /\.yml$/i));
const publications = requireAll(require.context('../datas/index/home', false, /\.(yml|gif|png|jpe?g)$/i), true);
const slides = requireAll(require.context('../datas/index/slideshow', false, /\.(gif|png|jpe?g)$/i));

class Layout extends Component {

  render() {   
    return (
      <div>
        <Nav links={links} mobilehide={true} />
        <Slideshow slides={slides} />
        <Intro text={page.intro} link={{name: 'En savoir plus', href: 'about.html'}} />
        <Home items={publications} title={page.home_title} />
        <Nav links={links} />
      </div>
    );
  }

}

render(<Layout />, document.querySelector('#main'));
