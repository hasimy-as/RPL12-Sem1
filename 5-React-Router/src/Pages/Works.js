import React from 'react';
import { extend } from 'jquery';
import Media from '../Components/Media';

class Works extends React.Component {
	render() {
		return (
			<div className='container'>
				<div className='container m-5'>
					<h3>Things you maybe wanna see</h3>
					<br></br>
					<a href="https://rebrand.ly/Resume-Hasimy">My CV</a>
					<Media image='my-web.png'></Media>
					<h2>Website design</h2>
					<a href="https://hasimy-as.github.io/my-web">Don't forget to check it!</a>
				</div>
			</div>
		);
	}
}
export default Works;
