import React from 'react';
import { extend } from 'jquery';
import Media from '../Components/Media';

class About extends React.Component {
	render() {
		return (
			<div className='container'>
				<div className=' container m-5'>
					<h3>Tentang Saya</h3>
					<br></br>
					<Media image='me.jpg'></Media>
					<h2>Achmad Syeh Hasimy Md</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Aliquam rutrum ex id sollicitudin fermentum. Nullam
						lobortis maximus placerat. Aliquam vitae eros
						vestibulum, ultrices ligula id, mattis dui. Nam
						vulputate justo in justo rutrum porta. Nulla vitae
						pulvinar dolor, sit amet euismod ipsum. Phasellus
						rhoncus ex iaculis porttitor faucibus. Sed eget ante
						justo. Cras et scelerisque leo. Maecenas pharetra dolor
						eu elit iaculis, at ullamcorper metus aliquet. Praesent
						at blandit augue. Curabitur et metus non sem interdum
						aliquet. Nullam et odio eget ex ullamcorper ultricies at
						quis turpis.
					</p>
				</div>
			</div>
		);
	}
}
export default About;
