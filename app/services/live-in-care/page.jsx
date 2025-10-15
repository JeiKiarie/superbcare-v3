'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import liveInCare from '/public/live-in-care.jpg';
import Image from 'next/image';
import {
	BiCheckCircle,
	BiBrain,
	BiHomeHeart,
	BiShieldCheck,
	BiTimeFive,
	BiStar,
	BiSupport,
} from 'react-icons/bi';
import { FaUserNurse, FaHome, FaShieldAlt, FaClock } from 'react-icons/fa';
import { FaRegStar as FaSparkles } from 'react-icons/fa';
import {
	MdOutlineAccessibility,
	MdOutlineMedicalServices,
} from 'react-icons/md';
import { IoMdPerson } from 'react-icons/io';
import { RiHeart3Line, RiMentalHealthLine } from 'react-icons/ri';
import { GiFamilyHouse, GiHearts, GiPeaceDove } from 'react-icons/gi';
import { TbShieldHeart } from 'react-icons/tb';
import { useRouter } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const LiveInCarePage = () => {
	const router = useRouter();

	return (
		<>
			{/* Hero Section with Modern HeroSection Component */}
			<HeroSection
				title="Live-In Care Services"
				subtitle="Compassionate, Round-the-Clock Care in the Comfort of Your Home"
				backgroundImage={liveInCare}
			/>

			{/* Modern Service Overview Section */}
			<section className="relative py-20 bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9] overflow-hidden">
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
							✨ Premium Home Care Solutions
						</span>
						<h2 className="text-5xl font-bold bg-gradient-to-r from-blue-800 to-[#cca6c8] bg-clip-text text-transparent mb-6">
							Personalized Care in Your Own Home
						</h2>
						<p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
							Experience the transformative difference of our live-in care
							services. Our dedicated caregivers become part of your family,
							providing 24/7 support while preserving dignity, independence, and
							comfort.
						</p>
					</AnimatedWrapper>

					{/* Key Features Grid with Icons */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
						{[
							{
								icon: <FaClock className="w-10 h-10 text-[#cca6c8]" />,
								title: '24/7 Support',
								description:
									'Round-the-clock availability ensuring peace of mind for families',
								color: 'from-[#cca6c8] to-[#b89ab9]',
							},
							{
								icon: <BiHomeHeart className="w-10 h-10 text-blue-600" />,
								title: 'Home Environment',
								description:
									'Care delivered in the comfort and familiarity of your own space',
								color: 'from-blue-500 to-blue-600',
							},
							{
								icon: (
									<MdOutlineAccessibility className="w-10 h-10 text-[#cca6c8]" />
								),
								title: 'Personalized Care',
								description:
									'Individually tailored care plans meeting specific needs and preferences',
								color: 'from-[#cca6c8] to-[#a97ca7]',
							},
							{
								icon: <BiSupport className="w-10 h-10 text-blue-600" />,
								title: 'Professional Staff',
								description:
									'Trained, compassionate caregivers committed to excellence',
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

					{/* Core Services List - Modern Design */}
					<AnimatedWrapper
						as="div"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.8 }}
						className="backdrop-blur-sm bg-white/90 border border-white/20 rounded-3xl shadow-2xl p-8 lg:p-12">
						<h3 className="text-3xl font-bold text-center text-blue-800 mb-8">
							What Our Live-in Care Includes
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{[
								'Personal care and hygiene assistance',
								'Medication management and health monitoring',
								'Household chores and meal preparation',
								'Companionship and emotional support',
								'Transportation to appointments',
								'Emergency response and crisis management',
								'Leisure activities and social engagement',
								'Customized care plan development',
							].map((service, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 1 + index * 0.1 }}
									className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#cca6c8]/5 to-transparent rounded-xl hover:from-[#cca6c8]/10 transition-all duration-300 group">
									<div className="w-8 h-8 bg-[#cca6c8] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
										<BiCheckCircle className="w-5 h-5 text-white" />
									</div>
									<span className="text-gray-700 font-medium group-hover:text-[#cca6c8] transition-colors">
										{service}
									</span>
								</motion.div>
							))}
						</div>
					</AnimatedWrapper>
				</div>
			</section>

			{/* Interactive Benefits Section - Modern Cards */}
			<section className="py-20 bg-gradient-to-br from-[#cca6c8]/5 via-white to-blue-50 relative overflow-hidden">
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
							Why Choose Our Live-In Care Services?
						</h3>
						<div className="w-24 h-1 bg-gradient-to-r from-[#cca6c8] to-blue-500 mx-auto mb-8"></div>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Discover the unique advantages that set our live-in care apart and
							truly make a difference in quality of life.
						</p>
					</AnimatedWrapper>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{[
							{
								icon: <TbShieldHeart className="w-12 h-12 text-white" />,
								title: 'Peace of Mind for Families',
								description:
									'Professional, reliable care you can trust, ensuring your loved ones are safe and well-cared for around the clock. Our caregivers become trusted members of your family.',
								color: 'from-[#cca6c8] to-[#b89ab9]',
								hoverColor:
									'group-hover:from-[#cca6c8] group-hover:to-[#d1b4d2]',
							},
							{
								icon: <GiFamilyHouse className="w-12 h-12 text-white" />,
								title: 'Maintaining Independence',
								description:
									'Freedom to age in place while receiving necessary support. Our caregivers facilitate daily activities, allowing clients to maintain their preferred lifestyle and routines.',
								color: 'from-blue-600 to-blue-700',
								hoverColor: 'group-hover:from-blue-600 group-hover:to-blue-800',
							},
							{
								icon: <BiBrain className="w-12 h-12 text-white" />,
								title: 'Enhanced Quality of Life',
								description:
									'Beyond physical care, we provide mental stimulation, companionship, and emotional support to combat isolation and promote overall well-being.',
								color: 'from-[#a97ca7] to-[#cca6c8]',
								hoverColor:
									'group-hover:from-[#a97ca7] group-hover:to-[#cca6c8]',
							},
							{
								icon: (
									<MdOutlineMedicalServices className="w-12 h-12 text-white" />
								),
								title: 'Comprehensive Healthcare Support',
								description:
									'Medical monitoring, medication management, and coordination with healthcare professionals ensure all health needs are met promptly and effectively.',
								color: 'from-blue-700 to-[#cca6c8]',
								hoverColor:
									'group-hover:from-blue-700 group-hover:to-[#b89ab9]',
							},
							{
								icon: <RiMentalHealthLine className="w-12 h-12 text-white" />,
								title: 'Emotional & Mental Health Focus',
								description:
									'Dedicated attention to mental well-being through meaningful conversations, activities, and creating a nurturing, supportive environment.',
								color: 'from-[#cca6c8] to-purple-600',
								hoverColor:
									'group-hover:from-[#cca6c8] group-hover:to-purple-500',
							},
							{
								icon: <GiPeaceDove className="w-12 h-12 text-white" />,
								title: 'Dignity & Respect',
								description:
									"Every individual deserves to be treated with utmost respect and dignity. Our care philosophy centers on honoring each person's unique needs and preferences.",
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
											className={`w-4 h-4 ${
												benefit.icon.props.className.split(' ')[1]
											} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
										/>
										<span className="text-sm text-[#cca6c8] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
											Exceptional Care
										</span>
									</div>
								</div>
							</AnimatedWrapper>
						))}
					</div>
				</div>
			</section>

			{/* Modern FAQ Section */}
			<section className="py-20 bg-gradient-to-r from-white via-blue-50/30 to-[#cca6c8]/10">
				<div className="container mx-auto px-6">
					<AnimatedWrapper
						className="text-center mb-16"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<h3 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-[#cca6c8] bg-clip-text text-transparent mb-6">
							Frequently Asked Questions
						</h3>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Get answers to common questions about our live-in care services
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
									question: 'What exactly is live-in care?',
									answer:
										'Live-in care involves a professional caregiver residing in your home to provide 24/7 support and assistance. This comprehensive care includes personal assistance, medical monitoring, household help, and companionship, allowing individuals to maintain their independence while receiving necessary support in the comfort of their own environment.',
								},
								{
									question: 'Who benefits most from live-in care services?',
									answer:
										'Live-in care is ideal for elderly individuals who need substantial daily support but wish to remain in their homes rather than move to residential facilities. This includes those with mobility challenges, chronic health conditions, dementia, or anyone requiring constant supervision and assistance with daily living activities.',
								},
								{
									question:
										'How do you ensure caregiver and client compatibility?',
									answer:
										'We conduct thorough compatibility assessments, including in-depth interviews with both the client and their family to understand preferences, personality traits, specific needs, and lifestyle requirements. Our matching process considers cultural background, communication styles, and personal interests to ensure the best possible fit and harmonious relationship.',
								},
								{
									question: 'What training do your caregivers receive?',
									answer:
										'All caregivers undergo comprehensive training including first aid and CPR certification, dementia care, medication management, infection control, emergency procedures, and specialized techniques for assisting with daily living activities. We also provide ongoing professional development and supervision to maintain the highest standards of care.',
								},
								{
									question: 'How flexible are your care packages?',
									answer:
										'Our care packages are entirely flexible and customizable. We work closely with families to design care plans that match specific needs, preferences, and budgets. Care can range from basic support to comprehensive 24/7 assistance, with options to adjust hours or services as requirements change over time.',
								},
								{
									question: 'What if emergency situations arise?',
									answer:
										"Our caregivers are trained in emergency response protocols and equipped to handle various situations. We maintain 24/7 support lines for immediate assistance and coordinate with emergency services when necessary. Additionally, we help develop personalized emergency response plans for each client's specific needs.",
								},
								{
									question: 'How often is care coordination reviewed?',
									answer:
										'We conduct regular care plan reviews, typically monthly or whenever significant changes occur. This includes discussions with the client, family members, and healthcare providers to ensure care remains appropriate and effective. Our goal is continuous improvement in care quality and satisfaction.',
								},
							].map((faq, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}
									className="border-0 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
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

			{/* Premium Call to Action Section */}
			<section className="relative py-20 bg-gradient-to-r from-[#cca6c8] via-[#b88cb8] to-blue-600 text-white overflow-hidden">
				{/* Animated Background Elements */}
				<div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float-1"></div>
				<div className="absolute top-20 right-20 w-24 h-24 bg-blue-200/20 rounded-lg rotate-45 animate-float-2"></div>
				<div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white/15 rounded-full animate-float-3"></div>
				<div className="absolute top-1/2 right-10 w-16 h-16 bg-purple-200/25 rounded-lg animate-float-4"></div>

				<div className="relative container mx-auto px-6 text-center">
					<AnimatedWrapper
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2 }}
						className="max-w-4xl mx-auto">
						<span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-lg font-medium mb-6">
							🏠 Ready to Transform Your Home Care Experience?
						</span>
						<h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
							Start Your Personalized Care Journey Today
						</h2>
						<p className="text-xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
							Join the many families who have discovered peace of mind through
							our exceptional live-in care services. Our compassionate team is
							ready to design a care solution perfectly tailored to your unique
							needs and preferences.
						</p>

						{/* Interactive Stats */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
							{[
								{ number: '500+', label: 'Happy Families Served' },
								{ number: '99%', label: 'Satisfaction Rate' },
								{ number: '24/7', label: 'Support Available' },
								{ number: '10+', label: 'Years Experience' },
							].map((stat, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.8 + index * 0.1 }}
									className="text-center">
									<div className="text-4xl font-bold text-white mb-2">
										{stat.number}
									</div>
									<div className="text-sm opacity-80">{stat.label}</div>
								</motion.div>
							))}
						</div>

						{/* Action Buttons */}
						<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.2 }}>
								<Link href="/appointment">
									<button className="bg-white text-[#cca6c8] px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-blue-50 hover:scale-105 transform hover:-translate-y-1 flex items-center gap-3">
										<FaUserNurse className="w-5 h-5" />
										Schedule Free Consultation
										<span className="text-2xl">→</span>
									</button>
								</Link>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.4 }}>
								<Link href="/contact-us">
									<button className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-[#cca6c8] transition-all duration-300 hover:scale-105 flex items-center gap-3">
										<BiSupport className="w-5 h-5" />
										Contact Our Team
									</button>
								</Link>
							</motion.div>
						</div>

						{/* Guarantee Text */}
						<AnimatedWrapper
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.6 }}
							className="mt-8 text-sm opacity-80">
							💫 30-day satisfaction guarantee • Professional, vetted caregivers
							• Flexible care plans
						</AnimatedWrapper>
					</AnimatedWrapper>
				</div>
			</section>

			{/* Navigation Back Button - Styled */}
			<div className="flex justify-center py-8 bg-gray-50">
				<motion.button
					onClick={() => router.back()}
					className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold border border-blue-200 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center gap-2"
					initial={{ scale: 0.9 }}
					animate={{ scale: 1 }}
					transition={{ delay: 1.8 }}>
					<span>←</span>
					Back to Services
				</motion.button>
			</div>
		</>
	);
};

export default LiveInCarePage;
