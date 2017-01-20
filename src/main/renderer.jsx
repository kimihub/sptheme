'use strict';

import Router from 'preact-router';
import { h, render } from 'preact';
import Index from '../pages/index';
import About from '../pages/about';
import Publications from '../pages/publications';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Mulist from '../components/Mulist';
import routes from '../../lib/routes';

const requireAll = require('../../lib/require-all');
const links = requireAll(require.context('../datas/common/nav', false, /\.yml$/i));

// create window.routes with current location.pathname
routes([
  '/',
  '/about.html',
  '/publications.html',
]);

const Main = () => (
  <div id="renderer">
    <Header>
      <Nav links={links} mobilehide={true} />
    </Header>
    <Router>
      <Index default path={window.routes['/']} />
      <About path={window.routes['/about.html']} />
      <Publications path={window.routes['/publications.html']} />
    </Router>
    <Mulist />
    <Footer>
      <Nav links={links} />
    </Footer>
  </div>
);

render(<Main />, document.querySelector('#main'));
