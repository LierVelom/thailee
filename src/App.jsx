import React, { useEffect, useRef, useState } from 'react'
import CollaborationLine from './components/layout/CollaborationLine'
import Header from './components/layout/Header'
import SocialLinks from './components/layout/SocialLinks'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Personal from './components/personal/Personal'
import PersonalSkills from './components/personal/PersonalSkills'
import Title from './components/Title'
import PersonalGallery from './components/personal/PersonalGallery'
import Modal from './components/Modal'
import ProjectList from './components/ProjectComponents/ProjectList'
import ProjectItem from './components/ProjectComponents/ProjectItem'
import { useDispatch, useSelector } from 'react-redux'
import modalSlice, { selectModal, toggleModal, updateModal } from './redux/slices/modalSlice'
import ActivityList from './components/ActivitiesComponents/ActivityList'
import ActivityBadge from './components/ActivitiesComponents/ActivityBadge'
import ActivityItem from './components/ActivitiesComponents/ActivityItem'

function App() {

	const dispatch = useDispatch();
	const modalState = useSelector(selectModal);
	
	useEffect(() => {
		dispatch(toggleModal());
		dispatch(updateModal({	title: 'Hello', body: 'World' }));
	}, [dispatch])

	// Handle Mouse Move Effect
	const [position, setPosition] = useState({ x: 0, y: 0 });
	
	const pointerElement = document.querySelector('.pointer');
	const pointerTextElement = document.querySelector('.pointer-text');


	const handleMouseMove = (event) => {
		setPosition({ x: event.clientX - 50, y: event.clientY - 50 });
		
		pointerElement.classList.remove('hidden');
		pointerTextElement.classList.remove('hidden');
		pointerTextElement.style.transform = `matrix(1, 0, 0, 1, ${position.x}, ${position.y})`;
		setTimeout(() => {
			pointerElement.style.transform = `matrix(1, 0, 0, 1, ${position.x}, ${position.y})`;

		}, 50)
	}

	const handleMouseLeave = () => {
		pointerElement.classList.add('hidden');
		pointerTextElement.classList.add('hidden');
	}

	const [modalContent, setModalContent] = useState({name: '', content: ''});
	
	const socialLinks = [
		{
			icon: 'facebook',
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

	const personalSkills = [
		{
			title: 'Sáng tạo',
			description: 'Tôi luôn tìm kiếm những cách sáng tạo để giải quyết vấn đề.',
			icon: 'lightbulb',
		},
		{
			title: 'Tự học',
			description: 'Tôi luôn tự học và cập nhật những kiến thức mới nhất.',
			icon: 'book',
		},
		{
			title: 'Đổi mới',
			description: 'Tôi luôn tìm cách đổi mới để cải thiện công việc của mình.',
			icon: 'refresh',
		},
		{
			title: 'Tự tin',
			description: 'Tôi luôn tự tin vào khả năng của mình.',
			icon: 'check',
		},
		{
			title: 'Đồng đội',
			description: 'Tôi luôn là một thành viên đồng đội tốt.',
			icon: 'users',
		},
		{
			title: 'Tích cực',
			description: 'Tôi luôn tích cực trong công việc.',
			icon: 'thumbs-up',
		}
	];

	const galleryImages = [
		{
			url: './images/gallery/1.jpg',
			alt: 'Kỷ niệm ngày thành lập'
		},
		{
			url: './images/gallery/1.jpg',
			alt: 'Kỷ niệm ngày thành lập'
		},
		{
			url: './images/gallery/1.jpg',
			alt: 'Kỷ niệm ngày thành lập'
		},
		{
			url: './images/gallery/1.jpg',
			alt: 'Kỷ niệm ngày thành lập'
		},
		{
			url: './images/gallery/1.jpg',
			alt: 'Kỷ niệm ngày thành lập'
		},
		{
			url: './images/gallery/1.jpg',
			alt: 'Kỷ niệm ngày thành lập'
		},
		{
			url: './images/gallery/1.jpg',
			alt: 'Kỷ niệm ngày thành lập'
		},
		{
			url: './images/gallery/1.jpg',
			alt: 'Kỷ niệm ngày thành lập'
		},
		{
			url: './images/gallery/1.jpg',
			alt: 'Kỷ niệm ngày thành lập'
		}
	]

	const projects = [
		{
			name: 'SPACLISH PROJECT',
			description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			image: './images/projects/1.jpg',
			content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
		},
		{
			name: 'SPACLISH PROJECT 2',
			description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
			image: './images/projects/1.jpg',
			content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
		}
	]

	const activities = [
		{
			year: '2021',
			activities: [
				{
					name: 'Hoạt động 1',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					image: './images/activities/1.jpg',
					date: '2021-01-01'
				}
			]
		}, 
		{
			year: '2020',
			activities: [
				{
					name: 'Hoạt động 1',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					image: './images/activities/1.jpg',
					date: '2020-01-01'
				}
			]
		}, 
		{
			year: '2019',
			activities: [
				{
					name: 'Hoạt động 1',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					image: './images/activities/1.jpg',
					date: '2019-01-01'
				}
			]
		}, 
		{
			year: '2018',
			activities: [
				{
					name: 'Hoạt động 1',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					image: './images/activities/1.jpg',
					date: '2018-01-01'
				},
				{
					name: 'Hoạt động 2',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					image: './images/activities/1.jpg',
					date: '2018-01-01'
				}
			]
		}, 
		{
			year: '2017',
			activities: [
				{
					name: 'Hoạt động 1',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					image: './images/activities/1.jpg',
					date: '2017-01-01'
				}
			]
		}
	]

	let counterActivityItem = 0;

	return (
		<>
			<CollaborationLine />
			<Header />
			<SocialLinks links={socialLinks} />
			<Navbar />
			<div className="personal-overlay"></div>

			<main>
				<Personal />

				<Title titleId="Skills">Kỹ năng</Title>

				<PersonalSkills skills={personalSkills} />

				<PersonalGallery dataImages={galleryImages} />

				<Title titleId="Projects">Dự án</Title>

				<ProjectList>
					{projects.map((project, index) => (
						<ProjectItem 
							project={project}
							key={index}
							mouseMoveEvent={handleMouseMove}
							mouseLeaveEvent={handleMouseLeave}
							toggleModal={toggleModal}
							setModalContent={setModalContent}
						/>
					))}
				</ProjectList>

				<Title titleId="Activities">Hoạt động</Title>

				<ActivityList>
					{activities.map((activity, index) => (
						<React.Fragment key={index}>
							<ActivityBadge>{activity.year}</ActivityBadge>
							{activity.activities.map((a, i) => {
								counterActivityItem++;
								return (
									<ActivityItem data={a} isOdd={counterActivityItem % 2 ? false : true} key={i} />
								)
							})}
						</React.Fragment>
					))}
				</ActivityList>

			</main>

			<Modal
				isOpen={modalState.isOpen}
				title={modalState.content.title}
			>
				{modalState.content.body}
			</Modal>

			<Footer />
		</>
	)
}

export default App
