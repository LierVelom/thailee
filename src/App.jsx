import { useState } from 'react'
import CollaborationLine from './components/layout/CollaborationLine'
import Header from './components/layout/Header'
import SocialLinks from './components/layout/SocialLinks'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
	const socialLinks = [
		{
			icon: 'facebook-f',
			link: 'https://www.facebook.com/thaileeuniverse'
		},
		{
			icon: 'instagram',
			link: 'https://www.instagram.com/thaileeuniverse'
		},
		{
			icon: 'linkedin',
			link: 'https://www.linkedin.com/in/thaileeuniverse'
		}
	]

	return (
		<>
			<CollaborationLine />
			<Header />
			<SocialLinks links={socialLinks} />
			<Navbar />

			<div className="personal-overlay"></div>

			<main>
				<section className="personal">
					<div className="name">
						LÊ<br />
						HỒNG<br />
						THÁI
					</div>
					<a href="#" className="personal-button"><i className="fa-light fa-arrow-down-to-line"></i> TẢI XUỐNG CV</a>
					<div className="description">
						Một người yêu thích những công việc sáng tạo, thích hoạt động trong những môi trường năng động và không ngừng đổi mới.
					</div>
					<div className="avatar">
						<img src="./images/person.png" />
					</div>	
				</section>
			</main>

			<div style={{ height: '1000px' }}></div>

			<Footer />
		</>
	)
}

export default App
