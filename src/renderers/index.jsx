'use strict';

import { h, render, Component } from 'preact';
import Slideshow from '../components/Slideshow';
import Home from '../components/Home';
import Intro from '../components/Intro';
import Nav from '../components/Nav';

class Layout extends Component {

  constructor() {
    super();
    this.state = {
      intro: h('div'),
      home: h('div'),
      headerNav: h('div'),
      footerNav: h('div'),
      contentClassName: '',
    };
  }

  componentDidMount() {
    fetch('/datas/Links.json')
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({
          headerNav: <Nav mobilehide={true} links={json._} />,
          footerNav: <Nav links={json._} />,
        });
      })
      .catch(err => {
        console.log('error', err);
      });
    
    fetch('/datas/Page.Index.json')
      .then(res => {
        return res.json();
      }).then(json => {
        this.setState({
          intro: <Intro text={json.intro} link={{name: 'En savoir plus', href: '/about.html'}} />,
          home: <Home values={json} />,
          contentClassName: 'show',
        });
      }).catch(err => {
        console('error', err);
      });
  }

  render({}, state) {   
    return (
      <div>
        {state.headerNav}
        <Slideshow />
        <div className={`content ${state.contentClassName}`}>
        {state.intro}
        {state.home}
        </div>
        {state.footerNav}
      </div>
    );
  }

}

render(<Layout />, document.querySelector('#main'));
