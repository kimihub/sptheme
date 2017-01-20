'use scrict';

import { h } from 'preact';

export default ({text, link}) => {
	return (
		<section className="intro">
			<div className="container">
			 <p>{text}</p>
			 {link? h('p', null, h('a', {href: link.href, className: 'button', onclick: window.scrollTo.bind(null, 0, 0)}, link.name)):<div></div>}
			</div>
		</section>
	);
}
