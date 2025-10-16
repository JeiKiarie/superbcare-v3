import Link from 'next/link';
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
				backgroundImage="/about-image.jpg"
			/>

			{/* Stylish Introductory Section */}
			<section
				id="welcome"
				className="relative py-16 flex items-center justify-center bg-gradient-to-br from-[#cca6c8] via-[#b88cb8] to-[#a976a9] overflow-hidden">
				{/* Floating Background Elements */}
				<div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-sm animate-float-1"></div>
				<div className="absolute top-20 right-20 w-16 h-16 bg-blue-200/20 rounded-lg rotate-45 animate-float-2"></div>
				<div className="absolute bottom-32 left-1/4 w-12 h-12 bg-white/15 rounded-full animate-float-3"></div>
				<div className="absolute top-1/2 right-10 w-8 h-8 bg-purple-200/25 rounded-full animate-float-4"></div>
				<div className="absolute bottom-20 right-1/3 w-10 h-10 bg-white/10 rounded-lg rotate-12 animate-float-5"></div>
				<div className="absolute top-1/3 left-20 w-6 h-6 bg-blue-100/30 rounded-full animate-float-6"></div>
				<div className="absolute bottom-16 right-1/4 w-14 h-14 bg-white/8 rounded-full blur-xs animate-float-7"></div>
				<div className="absolute top-3/4 left-1/3 w-18 h-18 bg-purple-300/15 rounded-lg rotate-30 animate-float-8"></div>

				<div className="container mx-auto px-6 text-center text-white">
					{/* Main Content */}
					<div className="max-w-5xl mx-auto">
						<AnimatedWrapper
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="mb-8">
							<span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
								✨ Why Choose Superb Care Services?
							</span>
						</AnimatedWrapper>
						<AnimatedWrapper
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.4 }}>
							<h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
								Excellence in Home Care
							</h2>
						</AnimatedWrapper>
						<AnimatedWrapper
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}>
							<p className="text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
								Since 2018, we have been transforming lives through
								compassionate, personalized care services delivered in the
								comfort and dignity of home.
							</p>
						</AnimatedWrapper>
					</div>
				</div>
			</section>

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
									transition={{ duration: 0.6 }}
									delay={0.4 + index * 0.1}
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
									src="/our-story.webp"
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
								transition={{ duration: 0.6 }}
								delay={index * 0.1}
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

			{/* Our Team Section - Revamped with Founder Spotlight */}
			<section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
				<div className="absolute inset-0">
					<div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-300/10 to-transparent rounded-full blur-xl"></div>
					<div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-blue-300/10 to-transparent rounded-full blur-2xl"></div>
				</div>
				<div className="relative container mx-auto px-6">
					<AnimatedWrapper
						className="text-center mb-20"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}>
						<h3 className="text-5xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent mb-6">
							Meet Our Team
						</h3>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Our passionate team of professionals dedicated to delivering
							exceptional care and making a difference in our clients&apos;
							lives.
						</p>
					</AnimatedWrapper>

					{/* Founder Spotlight */}
					<AnimatedWrapper
						as="div"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.3 }}
						className="mb-20">
						<div className="backdrop-blur-lg bg-white/90 border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
							<div className="flex flex-col md:flex-row items-center gap-10">
								<div className="flex-shrink-0">
									<div className="relative group">
										<div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
										<Image
											src="/ruth-west4.jpg"
											alt="Rev Ruth West - Founder & CEO"
											width={240}
											height={352}
											className="relative w-60 h-88 rounded-xl object-cover shadow-xl border-4 border-white group-hover:scale-105 transition-transform duration-500"
										/>
									</div>
								</div>
								<div className="flex-1 text-center md:text-left">
									<div className="mb-4">
										<span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
											FOUNDER & CEO
										</span>
									</div>
									<h4 className="text-3xl font-bold text-blue-800 mb-3 group-hover:text-purple-600 transition-colors">
										Rev Ruth West
									</h4>
									<p className="text-gray-600 text-lg leading-relaxed mb-6">
										With over 15 years of experience in elder care and community
										service, Rev Ruth West founded Superb Care Services out of a
										deep passion for improving lives through compassionate home
										care. Her visionary leadership continues to drive our
										commitment to excellence and innovation in caregiving.
									</p>
									<div className="flex flex-wrap gap-3 justify-center md:justify-start">
										<span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
											Community Leader
										</span>
										<span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
											15+ Years Experience
										</span>
										<span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
											Award-Winning Service
										</span>
									</div>
								</div>
							</div>
						</div>
					</AnimatedWrapper>

					{/* Other Team Members */}
					<AnimatedWrapper
						as="div"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className="mb-12">
						<h4 className="text-3xl font-bold text-blue-800 text-center mb-4">
							Our Team of Experts
						</h4>
						<p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
							Dedicated professionals working together to deliver exceptional
							care and support.
						</p>
					</AnimatedWrapper>
					<AnimatedWrapper
						as="div"
						className="grid grid-cols-1 md:grid-cols-3 gap-8"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}>
						{[
							{
								img: '/blank-picture.png',
								name: 'Sarah Johnson',
								role: 'Head of Care',
								desc: 'Oversees care quality and staff training',
								specialty: 'Quality Assurance',
							},
							{
								img: '/blank-picture.png',
								name: 'Michael Edwards',
								role: 'Care Coordinator',
								desc: 'Manages client relationships and care planning',
								specialty: 'Client Relations',
							},
							{
								img: '/Peter.jpg',
								name: 'Peter',
								role: 'Support Worker',
								desc: 'Dedicated frontline caregiver delivering daily support',
								specialty: 'Direct Care',
							},
						].map((member, index) => (
							<AnimatedWrapper
								as="div"
								key={index}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
								className="group">
								<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center transform hover:-translate-y-3 hover:rotate-2 relative overflow-hidden">
									<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-200/20 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
									<div className="relative z-10">
										<div className="relative overflow-hidden rounded-full mb-6 mx-auto w-40 h-40">
											<Image
												src={member.img}
												alt={member.name}
												width={160}
												height={160}
												className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
										</div>
										<h4 className="text-xl font-semibold text-blue-800 mb-2 group-hover:text-purple-600 transition-colors">
											{member.name}
										</h4>
										<p className="text-purple-600 font-medium mb-3">
											{member.role}
										</p>
										<p className="text-gray-600 text-sm mb-4">{member.desc}</p>
										<span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-purple-700 text-xs font-medium rounded-full border border-purple-200">
											{member.specialty}
										</span>
									</div>
								</div>
							</AnimatedWrapper>
						))}
					</AnimatedWrapper>
				</div>
			</section>

			{/* Call to Action Section - Modern CTA */}
			<section className="py-20 bg-gradient-to-r from-[#cca6c8] via-[#b88cb8] to-[#a976a9] text-white">
				<div className="container mx-auto px-6 text-center">
					<AnimatedWrapper
						className="max-w-2xl mx-auto"
						delay={0.6}>
						<h2 className="text-4xl font-bold mb-6">
							Join Our Family of Clients
						</h2>
						<p className="text-xl mb-10 opacity-90">
							Ready to experience personalized, compassionate care? Contact us
							today to learn more about our services or schedule an appointment.
						</p>
						<Link href="/appointment">
							<button className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:-translate-y-1">
								Book Appointment
							</button>
						</Link>
					</AnimatedWrapper>
				</div>
			</section>
		</>
	);
};

export default AboutPage;
