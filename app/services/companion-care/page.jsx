import Link from 'next/link';
import { BiCheckCircle } from 'react-icons/bi';
import {
	FaUserFriends,
	FaHeart,
	FaSmile,
	FaCoffee,
	FaWalking,
} from 'react-icons/fa';
import { FaRegStar as FaSparkles } from 'react-icons/fa';
import { BsPeople } from 'react-icons/bs';
import { MdOutlinePsychology } from 'react-icons/md';
import { RiCommunityLine } from 'react-icons/ri';
import { GiThreeFriends } from 'react-icons/gi';
import HeroSection from '@/components/HeroSection';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import BackButton from '@/components/BackButton';

const CompanionCarePage = () => {
	return (
		<>
			{/* Hero Section with Modern HeroSection Component */}
			<HeroSection
				title="Companion Care Services"
				subtitle="Meaningful Companionship & Joy"
				backgroundImage="/companion-care.jpg"
			/>

			{/* Modern Service Overview Section */}
			<section className="relative py-16 bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9] overflow-hidden">
				{/* Floating Background Elements */}
				<div className="absolute top-10 left-10 w-20 h-20 bg-[#cca6c8]/10 rounded-full blur-lg animate-float-1"></div>
				<div className="absolute top-20 right-20 w-16 h-16 bg-blue-200/20 rounded-xl rotate-45 animate-float-2"></div>
				<div className="absolute bottom-32 left-1/4 w-12 h-12 bg-[#cca6c8]/15 rounded-full animate-float-3"></div>
				<div className="absolute top-1/2 right-10 w-8 h-8 bg-blue-200/25 rounded-lg animate-float-4"></div>
				<div className="absolute bottom-20 right-1/3 w-10 h-10 bg-[#cca6c8]/10 rounded-full animate-float-5"></div>

				<div className="relative container mx-auto px-6">
					{/* Service Introduction */}
					<AnimatedWrapper
						className="text-center mb-16"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<span className="inline-block px-4 py-2 bg-[#cca6c8]/10 backdrop-blur-sm rounded-full text-sm font-medium text-[#cca6c8] mb-4">
							📝 Meaningful Connections
						</span>
						<h2 className="text-5xl font-bold bg-gradient-to-r from-blue-800 to-[#cca6c8] bg-clip-text text-transparent mb-6">
							Heartfelt Companionship Care
						</h2>
						<p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
							Companionship is the cornerstone of emotional well-being. Our
							carefully selected companions bring genuine connection, meaningful
							activities, and heartfelt support to combat loneliness and enrich
							the lives of those we serve.
						</p>
					</AnimatedWrapper>

					{/* Key Features Grid with Icons */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
						{[
							{
								icon: <FaUserFriends className="w-10 h-10 text-[#cca6c8]" />,
								title: 'Friendly Visits',
								description:
									'Regular personalised visits filled with warmth and genuine conversation',
								color: 'from-[#cca6c8] to-[#b89ab9]',
							},
							{
								icon: <FaWalking className="w-10 h-10 text-blue-600" />,
								title: 'Social Activities',
								description:
									'Engaging outings and hobby support for enriched living',
								color: 'from-blue-500 to-blue-600',
							},
							{
								icon: <FaCoffee className="w-10 h-10 text-[#cca6c8]" />,
								title: 'Daily Routine Support',
								description:
									'Light assistance with meals, housekeeping, and daily tasks',
								color: 'from-[#cca6c8] to-[#a97ca7]',
							},
							{
								icon: <FaSmile className="w-10 h-10 text-blue-600" />,
								title: 'Joyful Caregivers',
								description:
									'Compassionate professionals skilled in bringing smiles and happiness',
								color: 'from-blue-600 to-[#cca6c8]',
							},
						].map((feature, index) => (
							<AnimatedWrapper
								key={index}
								as="div"
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.15 }}
								className="group">
								<div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center transform hover:-translate-y-3 hover:scale-105">
									<div className="w-20 h-20 bg-gradient-to-br from-[#cca6c8]/10 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
										{feature.icon}
									</div>
									<h3 className="text-xl font-bold text-blue-800 mb-3 group-hover:text-[#cca6c8] transition-colors">
										{feature.title}
									</h3>
									<p className="text-gray-600 leading-relaxed">
										{feature.description}
									</p>
									<div
										className={`w-full h-1 bg-gradient-to-r ${feature.color} rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
								</div>
							</AnimatedWrapper>
						))}
					</div>

					{/* Companion Care Focus Areas */}
					<AnimatedWrapper
						as="div"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.8 }}
						className="backdrop-blur-sm bg-white/90 border border-white/20 rounded-3xl shadow-2xl p-8 lg:p-12">
						<h3 className="text-3xl font-bold text-center text-blue-800 mb-8">
							Our Comprehensive Companion Care Services
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{[
								'Friendly conversational visits and social engagement',
								'Assistance with light housekeeping and meal preparation',
								'Accompaniment to appointments, shopping, and outings',
								'Support with hobbies, games, and recreational activities',
								'Reading newspapers, books, or sharing current events',
								'Gardening and outdoor activities assistance',
								'Pet care and companionship for pet owners',
								'Transportation to community events and social gatherings',
								'Telephone and mail assistance',
								'Medication reminders and routine check-ins',
								'Personalised activity planning and goal setting',
								'24/7 on-call support for peace of mind',
							].map((service, index) => (
								<div
									key={index}
									className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#cca6c8]/5 to-transparent rounded-xl hover:from-[#cca6c8]/10 transition-all duration-300 group">
									<div className="w-8 h-8 bg-[#cca6c8] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
										<BiCheckCircle className="w-5 h-5 text-white" />
									</div>
									<span className="text-gray-700 font-medium group-hover:text-[#cca6c8] transition-colors">
										{service}
									</span>
								</div>
							))}
						</div>
					</AnimatedWrapper>
				</div>
			</section>

			{/* Interactive Benefits Section - Modern Cards */}
			<section className="py-16 bg-gradient-to-br from-[#cca6c8]/5 via-white to-blue-50 relative overflow-hidden">
				<div className="absolute inset-0">
					<div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#cca6c8]/10 to-transparent rounded-full blur-xl"></div>
					<div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-xl"></div>
				</div>

				<div className="relative container mx-auto px-6">
					<AnimatedWrapper
						className="text-center mb-16"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<h3 className="text-4xl font-bold bg-gradient-to-r from-[#cca6c8] to-blue-700 bg-clip-text text-transparent mb-4">
							Why Choose Our Companion Care Services?
						</h3>
						<div className="w-24 h-1 bg-gradient-to-r from-[#cca6c8] to-blue-500 mx-auto mb-8"></div>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Discover what makes our companionship care truly special, bringing
							comfort, joy, and meaningful connections to every day.
						</p>
					</AnimatedWrapper>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{[
							{
								icon: <GiThreeFriends className="w-12 h-12 text-white" />,
								title: 'Authentic Social Connections',
								description:
									'We provide genuine human connection that combats loneliness and fosters meaningful relationships. Our companions are skilled listeners who bring warmth, understanding, and true friendship to each visit.',
								color: 'from-[#cca6c8] to-[#b89ab9]',
								hoverColor:
									'group-hover:from-[#cca6c8] group-hover:to-[#d1b4d2]',
							},
							{
								icon: <BsPeople className="w-12 h-12 text-white" />,
								title: 'Community Integration',
								description:
									'Help your loved one stay connected to their community through carefully planned outings, social events, and meaningful activities that enrich daily life and maintain social networks.',
								color: 'from-blue-600 to-blue-700',
								hoverColor: 'group-hover:from-blue-600 group-hover:to-blue-800',
							},
							{
								icon: <FaUserFriends className="w-12 h-12 text-white" />,
								title: 'Preserving Independence with Support',
								description:
									'Our services are designed to provide just the right amount of support while respecting personal independence. We enhance quality of life without being intrusive.',
								color: 'from-[#a97ca7] to-[#cca6c8]',
								hoverColor:
									'group-hover:from-[#a97ca7] group-hover:to-[#cca6c8]',
							},
							{
								icon: <RiCommunityLine className="w-12 h-12 text-white" />,
								title: 'Mental Wellness Focus',
								description:
									'Beyond physical support, we prioritise mental health by creating joyful experiences, combating depression through stimulating conversations, shared laughter, and emotional support.',
								color: 'from-blue-700 to-[#cca6c8]',
								hoverColor:
									'group-hover:from-blue-700 group-hover:to-[#b89ab9]',
							},
							{
								icon: <MdOutlinePsychology className="w-12 h-12 text-white" />,
								title: 'Personalised Care Matching',
								description:
									'Each companion is carefully selected and matched based on personalities, interests, and care needs. We ensure compatibility that leads to authentic, trusting relationships.',
								color: 'from-[#cca6c8] to-purple-600',
								hoverColor:
									'group-hover:from-[#cca6c8] group-hover:to-purple-500',
							},
							{
								icon: <FaHeart className="w-12 h-12 text-white" />,
								title: 'Life Enrichment Activities',
								description:
									'We go beyond basic companionship by encouraging personal interests, introducing new hobbies, and creating activities that bring purpose, joy, and continued personal development.',
								color: 'from-purple-600 to-blue-600',
								hoverColor:
									'group-hover:from-purple-600 group-hover:to-blue-700',
							},
						].map((benefit, index) => (
							<AnimatedWrapper
								key={index}
								as="div"
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="group">
								<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#cca6c8]/20 transform hover:-translate-y-2">
									<div
										className={`w-16 h-16 bg-gradient-to-br ${benefit.color} ${benefit.hoverColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
										{benefit.icon}
									</div>
									<h4 className="text-2xl font-bold text-blue-800 mb-4 group-hover:text-[#cca6c8] transition-colors">
										{benefit.title}
									</h4>
									<p className="text-gray-600 leading-relaxed">
										{benefit.description}
									</p>
									<div className="mt-4 flex items-center gap-2">
										<FaSparkles
											className={`w-4 h-4 ${'text-blue-500'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
										/>
										<span className="text-sm text-[#cca6c8] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
											Joyful Care
										</span>
									</div>
								</div>
							</AnimatedWrapper>
						))}
					</div>
				</div>
			</section>

			{/* Modern FAQ Section */}
			<section className="py-16 bg-gradient-to-r from-white via-blue-50/30 to-[#cca6c8]/10">
				<div className="container mx-auto px-6">
					<AnimatedWrapper
						className="text-center mb-16"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<h3 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-[#cca6c8] bg-clip-text text-transparent mb-6">
							Companion Care FAQ
						</h3>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Common questions about our companionship services and how we bring
							joy and connection to our clients
						</p>
					</AnimatedWrapper>

					<AnimatedWrapper
						as="div"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.4 }}
						className="max-w-4xl mx-auto">
						<Accordion
							type="single"
							collapsible
							className="w-full space-y-4">
							{[
								{
									question:
										'What activities do companion caregivers assist with?',
									answer:
										'Our companions engage in a wide variety of meaningful activities including social visits, light housekeeping, meal preparation, reading together, gardening, pet care, accompanying to appointments, shopping outings, and assisting with correspondence. We focus on activities that bring joy and maintain independence.',
								},
								{
									question: 'Can companion care help improve mental health?',
									answer:
										'Absolutely! Regular social interaction is crucial for mental wellness. Our studies show that consistent companionship significantly reduces feelings of loneliness and depression, improves mood, cognitive function, and overall quality of life. Many of our clients develop deep, meaningful friendships with their companions.',
								},
								{
									question: 'How do you match caregivers with clients?',
									answer:
										'We conduct thorough personality assessments for both clients and caregivers, considering communication styles, interests, hobbies, cultural backgrounds, and care preferences. We look for natural compatibility that fosters genuine connections and mutual enjoyment during visits. Match success is our highest priority.',
								},
								{
									question:
										'What is the difference between companion care and other types of care?',
									answer: `Companion care focuses primarily on emotional and social support rather than medical or physical assistance. While we may help with light daily activities, our main goal is to combat loneliness and bring joy through friendship, conversation, and meaningful shared experiences. It's preventive care for the heart and mind.`,
								},
								{
									question: 'Can family members be present during visits?',
									answer: `Certainly! We encourage family involvement to help build confidence and comfort. Family members can meet their loved one's companion, observe interactions, and even participate in activities together. This helps create a seamless, trusting relationship that benefits everyone involved.`,
								},
								{
									question: 'How does companion care support independence?',
									answer:
										'Our approach respects and enhances independence by offering just the right amount of support. We encourage clients to participate actively in activities, make choices, and maintain their preferred routines. We provide gentle reminders and assistance while preserving dignity and self-determination at all times.',
								},
							].map((faq, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}
									className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
									<AccordionTrigger className="text-left px-8 py-6 text-lg font-semibold text-blue-800 hover:text-[#cca6c8] rounded-2xl hover:bg-[#cca6c8]/5 transition-all duration-300">
										<div className="flex items-center gap-4">
											<div className="w-8 h-8 bg-gradient-to-br from-[#cca6c8] to-[#b89ab9] rounded-full flex items-center justify-center flex-shrink-0">
												<span className="text-white text-sm font-bold">
													{index + 1}
												</span>
											</div>
											{faq.question}
										</div>
									</AccordionTrigger>
									<AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
										<div className="ml-12 pt-4">{faq.answer}</div>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</AnimatedWrapper>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="text-center py-12 px-4 bg-[#cca6c8] text-white rounded-lg">
				<AnimatedWrapper
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					<h2 className="text-4xl font-bold mb-4">
						Keep Your Loved One Engaged and Happy
					</h2>
				</AnimatedWrapper>
				<AnimatedWrapper
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					<p className="text-lg mb-8 text-justify lg:text-center">
						Contact us today to arrange companion care services and ensure your
						loved one receives the emotional and social support they need.
					</p>
				</AnimatedWrapper>
				<div className="flex flex-col items-center justify-center md:flex-row gap-4">
					<AnimatedWrapper
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.4 }}>
						<Link href="/appointment">
							<button className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition">
								Book Appointment
							</button>
						</Link>
					</AnimatedWrapper>
					<AnimatedWrapper
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.4 }}>
						<BackButton />
					</AnimatedWrapper>
				</div>
			</section>
		</>
	);
};

export default CompanionCarePage;
