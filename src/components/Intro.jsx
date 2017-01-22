'use scrict';

import { h } from 'preact';

export default ({text, link}) => {
	return (
		<section className="intro">
			<div className="container">
			 <p>{text}</p>
			 {link? h('p', {className:'more'}, h('a', {href: link.href, className: 'button'}, link.name)):<div></div>}
			</div>
		</section>
	);
}
