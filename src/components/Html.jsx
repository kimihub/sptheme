'use scrict';

import { h } from 'preact';

export default ({title, fontcolor, bgcolor, html}) => (
  <section className="html" style={{
    backgroundColor: bgcolor,
    padding: '35px 0 30px',
    textAlign: 'center',
  }}>
    <div className="container">
     <h4 style={{
      color: fontcolor,
    }}>{title}</h4>
     <div dangerouslySetInnerHTML={{__html: html}}></div>
    </div>
  </section>
);
