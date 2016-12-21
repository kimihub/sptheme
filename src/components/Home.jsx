'use scrict';

import { h, Component } from 'preact';

export default class Home extends Component {
  
	constructor(props) {
		super(props);
	}

  render () {
  	const { 
  		home_title, 
  		figurines_title, 
  		figurines_description,
  		artbooks_title,
  		artbooks_description,
  		fanzines_title,
  		fanzines_description 
  	} = this.props.values;
  	
  	return (
    	<section className="home">
    		<div className="container">
    			<header>
						<h4 className="home-title">{home_title}</h4>
					</header>
     			<div className="row">
	     			<article className="six columns production figurines">
              <div className="preview"></div>
	     				<h5>{figurines_title}</h5>
	     				<p dangerouslySetInnerHTML={{__html: figurines_description.replace(/\n/g,'<br />')}}></p>
	     			</article>
	     			<article className="six columns production artbooks">
              <div className="preview"></div>
	     				<h5>{artbooks_title}</h5>
	     				<p dangerouslySetInnerHTML={{__html: artbooks_description.replace(/\n/g,'<br />')}}></p>
	     			</article>
	     			<article className="eleven columns production fanzines">
              <div className="preview"></div>
	     				<h5>{fanzines_title}</h5>
	     				<p dangerouslySetInnerHTML={{__html: fanzines_description.replace(/\n/g,'<br />')}}></p>
	     			</article>
	     		</div>
	     		<p>
            <a href="/publications.html" className="button button-primary">Voir les publications</a>
          </p>
     		</div>
      </section>
    );
  }

};
