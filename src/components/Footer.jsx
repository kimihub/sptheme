'use strict'; 

import {h} from 'preact';

export default ({children}) => (
  <section className="footer">
    <div className="container">
    {children}
    </div>
  </section>
);
