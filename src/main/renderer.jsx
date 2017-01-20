'use strict';

import Router from 'preact-router';
import { h, render } from 'preact';
import Index from '../pages/index';
import About from '../pages/about';
import Publications from '../pages/publications';
import Nav from '../components/Nav';

const requireAll = require('../../lib/require-all');
const links = requireAll(require.context('../datas/common/nav', false, /\.yml$/i));

const Main = () => (
  <div id="renderer">
    <Nav links={links} mobilehide={true} />
    <Router>
      <Index default />
      <About path="/about.html" />
      <Publications path="/publications.html" />
    </Router>
    <Nav links={links} />
  </div>
);

render(<Main />, document.querySelector('#main'));
