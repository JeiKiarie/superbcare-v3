import Link from 'next/link';
import aboutImg from '/public/about-image.jpg';
import ourStory from '/public/our-story.webp';
import ruthWest from '/public/ruth-west4.jpg';
import peter from '/public/Peter.jpg';
import blank from '/public/blank-picture.png';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import { Heart, Users, ShieldCheck, Star, Phone, Mail } from 'lucide-react';

const AboutPage = () => {
	return (
		<>
			{/* Hero Section - Keep as is */}
			<HeroSection
				title="About Us"
				subtitle="Compassionate Care, Exceptional Service"
				backgroundImage={aboutImg}
			/>

			{/* Modern Mission Statement Section */}
			<section className="relative bg-gradient-to-r from-blue-50 via-white to-purple-50 py-20">
				<AnimatedWrapper
					className="container mx-auto px-6 text-center"
					delay={0.1}>
					<h2 className="text-5xl font-bold bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent mb-8">
						Our Mission
					</h2>
					<p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
						At Superb Care Services Ltd, our mission is to provide
						compassionate, personalized care that empowers individuals to
						maintain their independence and quality of life at home. We are
						dedicated to supporting our clients and their families by delivering
						exceptional live-in care services with respect, dignity, and
						professionalism.
					</p>
				</AnimatedWrapper>
			</section>

			{/* Our Vision Section */}
			<section className="relative py-20 bg-gradient-to-r from-purple-50 via-white to-blue-50 overflow-hidden">
				<div className="absolute inset-0">
					<div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-200/20 to-transparent rounded-full -translate-y-24 translate-x-24"></div>
					<div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
				</div>
				<div className="relative container mx-auto px-6">
					<AnimatedWrapper
						as="div"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="max-w-4xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
								Our Vision
							</h2>
							<div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8"></div>
							<p className="text-xl text-gray-700 leading-relaxed">
								To be the leading provider of innovative, compassionate home
								care services that transform lives and redefine the standards of
								elder care, ensuring every individual ages with dignity,
								purpose, and joy in their own home.
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
							{[
								{
									title: 'Innovation',
									desc: 'Pioneering new approaches to care that combine technology, compassion, and personalized attention.',
									icon: '🚀',
								},
								{
									title: 'Community',
									desc: 'Building a supportive network where families and caregivers work together for optimal care outcomes.',
									icon: '🤝',
								},
								{
									title: 'Excellence',
									desc: 'Setting the highest standards in care quality, training, and service delivery across all our operations.',
									icon: '⭐',
								},
							].map((item, index) => (
								<AnimatedWrapper
									as="div"
									key={index}
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
									className="group">
									<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center transform hover:-translate-y-1">
										<div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
											{item.icon}
										</div>
										<h3 className="text-xl font-semibold text-purple-700 mb-4 group-hover:text-blue-600 transition-colors">
											{item.title}
										</h3>
										<p className="text-gray-600 leading-relaxed">{item.desc}</p>
									</div>
								</AnimatedWrapper>
							))}
						</div>
					</AnimatedWrapper>
				</div>
			</section>

			{/* Our Story Section - Asymmetrical Layout */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-6">
					<AnimatedWrapper
						className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
						delay={0.2}>
						<div className="space-y-6">
							<h3 className="text-4xl font-bold text-blue-800 mb-6">
								Our Story
							</h3>
							<div className="space-y-6 text-gray-700 leading-relaxed">
								<p className="text-lg">
									Founded in 2018, Superb Care Services Ltd was born out of a
									desire to provide an alternative to institutional care for the
									elderly and individuals with disabilities. Our founder, Rev
									Ruth West, was inspired by personal experiences of seeing
									loved ones struggle to find quality, compassionate care in a
									home setting.
								</p>
								<p className="text-lg">
									We believe that everyone deserves to age or recover with
									dignity and independence in the comfort of their own home. Our
									live-in care services were designed with this in mind,
									ensuring that each client receives tailored, one-on-one
									support from trained caregivers who live with them and assist
									with daily activities.
								</p>
							</div>
						</div>
						<AnimatedWrapper
							as="div"
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4 }}
							className="relative">
							<div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
								<Image
									className="w-full h-[500px] object-cover"
									width={600}
									height={500}
									alt="Elderly care recipient enjoying home environment"
									src={ourStory}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
							</div>
						</AnimatedWrapper>
					</AnimatedWrapper>
				</div>
			</section>

			{/* Core Values Section - Modern Cards with Icons */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-6">
					<AnimatedWrapper
						className="text-center mb-16"
						delay={0.3}>
						<h3 className="text-4xl font-bold text-blue-800 mb-4">
							Our Core Values
						</h3>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							The principles that guide every aspect of our care services
						</p>
					</AnimatedWrapper>
					<AnimatedWrapper
						as="div"
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
						delay={0.4}>
						{[
							{
								icon: <Heart className="w-12 h-12 text-red-500" />,
								title: 'Positivity & Optimism',
								desc: 'We believe in the power of positivity and optimism. Our caregivers bring warmth, compassion, and a positive attitude to every interaction, creating a supportive environment that fosters well-being and happiness.',
							},
							{
								icon: <Users className="w-12 h-12 text-blue-500" />,
								title: 'Compassion',
								desc: 'We prioritize the well-being of our clients, offering care with empathy, understanding, and kindness.',
							},
							{
								icon: <ShieldCheck className="w-12 h-12 text-green-500" />,
								title: 'Integrity',
								desc: 'Honesty and transparency are at the core of everything we do. We are committed to maintaining the trust of our clients and their families.',
							},
							{
								icon: <Star className="w-12 h-12 text-yellow-500" />,
								title: 'Excellence',
								desc: 'We strive for excellence in the care we provide, constantly improving our services to meet the evolving needs of our clients.',
							},
						].map((value, index) => (
							<AnimatedWrapper
								as="div"
								key={index}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="group">
								<div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full transform hover:-translate-y-2">
									<div className="flex justify-center mb-6">{value.icon}</div>
									<h4 className="text-xl font-semibold text-blue-800 mb-4 text-center group-hover:text-purple-600 transition-colors">
										{value.title}
									</h4>
									<p className="text-gray-700 text-justify leading-relaxed">
										{value.desc}
									</p>
								</div>
							</AnimatedWrapper>
						))}
					</AnimatedWrapper>
				</div>
			</section>

			{/* Our Team Section - Dynamic Cards */}
			<section className="py-20 bg-gradient-to-r from-gray-100 to-blue-50">
				<div className="container mx-auto px-6">
					<AnimatedWrapper
						className="text-center mb-16"
						delay={0.5}>
						<h3 className="text-4xl font-bold text-blue-800 mb-4">
							Meet Our Team
						</h3>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Our dedicated professionals committed to exceptional care
						</p>
					</AnimatedWrapper>
					<AnimatedWrapper
						as="div"
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
						delay={0.6}>
						{[
							{ img: ruthWest, name: 'Rev Ruth West', role: 'Founder & CEO' },
							{ img: blank, name: 'Sarah Johnson', role: 'Head of Care' },
							{ img: blank, name: 'Michael Edwards', role: 'Care Coordinator' },
							{ img: peter, name: 'Peter', role: 'Support Worker' },
						].map((member, index) => (
							<AnimatedWrapper
								as="div"
								key={index}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="group">
								<div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2">
									<div className="relative overflow-hidden rounded-full mb-6 mx-auto w-32 h-32">
										<Image
											src={member.img}
											alt={member.role}
											width={128}
											height={128}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
										/>
									</div>
									<h4 className="text-xl font-semibold text-blue-800 mb-2 group-hover:text-purple-600 transition-colors">
										{member.name}
									</h4>
									<p className="text-gray-600">{member.role}</p>
								</div>
							</AnimatedWrapper>
						))}
					</AnimatedWrapper>
				</div>
			</section>

			{/* Call to Action Section - Modern CTA */}
			<section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-blue-800 text-white">
				<div className="container mx-auto px-6 text-center">
					<AnimatedWrapper
						as="div"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.7 }}
						className="max-w-2xl mx-auto">
						<h2 className="text-4xl font-bold mb-6">
							Join Our Family of Clients
						</h2>
						<p className="text-xl mb-10 opacity-90">
							Ready to experience personalized, compassionate care? Contact us
							today to learn more about our services or schedule an appointment.
						</p>
						<Link href="/appointment">
							<AnimatedWrapper
								as="button"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								transition={{ delay: 0.9 }}
								className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50">
								Book Appointment
							</AnimatedWrapper>
						</Link>
					</AnimatedWrapper>
				</div>
			</section>
		</>
	);
};

export default AboutPage;
