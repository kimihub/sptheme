'use strict';

import Router from 'preact-router';
import { h, render } from 'preact';
import Index from '../pages/index';
import About from '../pages/about';
import Publications from '../pages/publications';
import Nav from '../components/Nav';
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
    <Nav links={links} mobilehide={true} />
    <Router>
      <Index default path={window.routes['/']} />
      <About path={window.routes['/about.html']} />
      <Publications path={window.routes['/publications.html']} />
    </Router>
    <Nav links={links} />
  </div>
);

render(<Main />, document.querySelector('#main'));
