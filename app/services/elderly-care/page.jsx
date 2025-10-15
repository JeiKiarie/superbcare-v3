'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import elderlyCare from '/public/elderly-care.jpg';
import Image from 'next/image';
import {
	BiCheckCircle,
	BiBrain,
	BiHomeHeart,
	BiShieldCheck,
	BiTimeFive,
	BiStar,
	BiSupport,
	BiAccessibility,
	BiHeart,
} from 'react-icons/bi';
import {
	FaUserNurse,
	FaHome,
	FaShieldAlt,
	FaClock,
	FaHeart,
	FaUsers,
} from 'react-icons/fa';
import {
	MdOutlineAccessibility,
	MdOutlineLocalHospital,
	MdOutlineWc,
	MdOutlineRestaurant,
	MdOutlineCleanHands,
	MdOutlineDirectionsCar,
} from 'react-icons/md';
import {
	RiMentalHealthLine,
	RiShieldCheckLine,
	RiPulseLine,
} from 'react-icons/ri';
import {
	GiFamilyHouse,
	GiHearts,
	GiPeaceDove,
	GiShield,
	GiPerson,
} from 'react-icons/gi';
import { FaRegStar as FaSparkles } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const ElderlyCarePage = () => {
	const router = useRouter();

	return (
		<>
			{/* Hero Section with Modern HeroSection Component */}
			<HeroSection
				title="Elderly Care Services"
				subtitle="Compassionate, Professional Care for Your Loved Ones"
				backgroundImage={elderlyCare}
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
							✨ Specialized Senior Care Solutions
						</span>
						<h2 className="text-5xl font-bold bg-gradient-to-r from-blue-800 to-[#cca6c8] bg-clip-text text-transparent mb-6">
							Compassionate Care for Seniors
						</h2>
						<p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
							Our elderly care services are meticulously designed to empower
							seniors to live independently with dignity while providing the
							essential support they need. Experience care that combines
							professional expertise with genuine compassion.
						</p>
					</AnimatedWrapper>

					{/* Key Features Grid with Icons */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
						{[
							{
								icon: <MdOutlineWc className="w-10 h-10 text-[#cca6c8]" />,
								title: 'Personal Care',
								description:
									'Assistance with daily hygiene and grooming needs with respect and dignity',
								color: 'from-[#cca6c8] to-[#b89ab9]',
							},
							{
								icon: (
									<MdOutlineLocalHospital className="w-10 h-10 text-blue-600" />
								),
								title: 'Medication Support',
								description:
									'Safe medication management and health monitoring by qualified professionals',
								color: 'from-blue-500 to-blue-600',
							},
							{
								icon: (
									<MdOutlineRestaurant className="w-10 h-10 text-[#cca6c8]" />
								),
								title: 'Nutrition & Meals',
								description:
									'Nutritious meal preparation and dietary support tailored to individual needs',
								color: 'from-[#cca6c8] to-[#a97ca7]',
							},
							{
								icon: <GiPerson className="w-10 h-10 text-blue-600" />,
								title: 'Companionship',
								description:
									'Eternal companionship and emotional support to combat loneliness',
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
							Comprehensive Elderly Care Services
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{[
								'Personal hygiene and bathing assistance',
								'Dressing and grooming support',
								'Medication administration and monitoring',
								'Nutritious meal planning and preparation',
								'Light housekeeping and laundry services',
								'Transportation to medical appointments',
								'Social engagement and recreational activities',
								'24/7 emergency response and support',
								'Health monitoring and vital signs tracking',
								'Fall prevention and mobility assistance',
								'Shopping and errands management',
								'Pet care when applicable',
							].map((service, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 1 + index * 0.05 }}
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
							Why Choose Our Elderly Care Services?
						</h3>
						<div className="w-24 h-1 bg-gradient-to-r from-[#cca6c8] to-blue-500 mx-auto mb-8"></div>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Discover what makes our approach to senior care truly exceptional
							and life-enriching.
						</p>
					</AnimatedWrapper>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{[
							{
								icon: <BiAccessibility className="w-12 h-12 text-white" />,
								title: 'Independence & Dignity',
								description:
									'We support seniors to maintain their independence while providing necessary assistance, always treating each individual with the dignity and respect they deserve.',
								color: 'from-[#cca6c8] to-[#b89ab9]',
								hoverColor:
									'group-hover:from-[#cca6c8] group-hover:to-[#d1b4d2]',
							},
							{
								icon: <RiPulseLine className="w-12 h-12 text-white" />,
								title: 'Health & Safety Priority',
								description:
									'Advanced health monitoring, medication management, and preventive care measures ensure the highest standards of safety and well-being for your loved ones.',
								color: 'from-blue-600 to-blue-700',
								hoverColor: 'group-hover:from-blue-600 group-hover:to-blue-800',
							},
							{
								icon: <FaUsers className="w-12 h-12 text-white" />,
								title: 'Experienced & Empathetic Caregivers',
								description:
									'Our certified caregivers bring years of experience and genuine empathy, creating meaningful relationships that comfort and support seniors daily.',
								color: 'from-[#a97ca7] to-[#cca6c8]',
								hoverColor:
									'group-hover:from-[#a97ca7] group-hover:to-[#cca6c8]',
							},
							{
								icon: <MdOutlineCleanHands className="w-12 h-12 text-white" />,
								title: 'Personalized Care Plans',
								description:
									'Every senior receives a customized care plan developed through comprehensive assessments, ensuring all unique needs and preferences are perfectly addressed.',
								color: 'from-blue-700 to-[#cca6c8]',
								hoverColor:
									'group-hover:from-blue-700 group-hover:to-[#b89ab9]',
							},
							{
								icon: <BiHeart className="w-12 h-12 text-white" />,
								title: 'Emotional & Social Support',
								description:
									'Beyond physical care, we provide vital emotional support, social engagement, and companionship to combat isolation and promote mental well-being.',
								color: 'from-[#cca6c8] to-purple-600',
								hoverColor:
									'group-hover:from-[#cca6c8] group-hover:to-purple-500',
							},
							{
								icon: <FaClock className="w-12 h-12 text-white" />,
								title: '24/7 Reliable Care',
								description:
									'Round-the-clock availability means peace of mind for families, knowing professional care support is always there when needed most.',
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
											Premium Care
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
							Elderly Care FAQ
						</h3>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Find answers to common questions about our elderly care services
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
										'What specific services are included in elderly care?',
									answer:
										'Our elderly care services encompass personal hygiene assistance (bathing, dressing, grooming), medication management, nutritious meal preparation, light housekeeping, transportation to appointments, social activities, 24/7 emergency response, and companionship. Each plan is customized based on individual needs and preferences.',
								},
								{
									question:
										'How do you ensure the safety and well-being of seniors?',
									answer:
										'We maintain rigorous safety protocols including regular health assessments, medication monitoring, fall prevention strategies, emergency response systems, and continuous caregiver training. All our services comply with healthcare standards to ensure maximum safety and well-being.',
								},
								{
									question: 'Are your caregivers qualified and certified?',
									answer:
										'Absolutely. All our elderly care specialists undergo comprehensive training including first aid/CPR certification, specialized geriatric care training, medication management, infection control, dementia care awareness, and continuous professional development programs.',
								},
								{
									question: 'How flexible are your care schedules?',
									answer:
										'We offer highly flexible scheduling with options for hourly visits, daily support, overnight care, weekend assistance, or around-the-clock care. Services can be adjusted based on changing needs, and we work closely with families to find the perfect care solution.',
								},
								{
									question:
										'What happens if my loved one has special medical conditions?',
									answer:
										'Our caregivers are trained to handle various medical conditions including diabetes management, dementia/Alzheimer&#39;s care, mobility assistance, post-surgery care, and rehabilitation support. We coordinate with healthcare professionals and can create specialized care plans for complex medical needs.',
								},
								{
									question:
										'How do you help with social isolation and mental health?',
									answer:
										'We provide meaningful social engagement through planned activities, outings, conversation, and companionship. Our caregivers help maintain cognitive function through mental stimulation, assist with hobbies, and ensure seniors stay connected with family and friends.',
								},
								{
									question:
										'What is the process for starting elderly care services?',
									answer:
										'We begin with a complimentary in-home assessment to understand the senior&#39;s needs and preferences. Then we develop a personalized care plan, match with a compatible caregiver, conduct background checks, and ensure a smooth transition with ongoing family communication.',
								},
								{
									question: 'How do you handle emergency situations?',
									answer:
										'We maintain 24/7 emergency response capabilities with direct access to medical professionals. Our caregivers are trained in emergency protocols, carry necessary medical equipment, and have immediate access to emergency services when required.',
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
							👴 Ready to Provide Exceptional Care for Your Loved One?
						</span>
						<h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
							Begin Your Elderly Care Journey Today
						</h2>
						<p className="text-xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
							Experience the peace of mind that comes with knowing your senior
							loved one is receiving professional, compassionate care tailored
							to their unique needs. Our expert team is ready to create a
							personalized care solution that honors their dignity while
							ensuring their safety and happiness.
						</p>

						{/* Interactive Stats */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
							{[
								{ number: '98%', label: 'Client Satisfaction' },
								{ number: '350+', label: 'Seniors Cared For' },
								{ number: '15+', label: 'Years Experience' },
								{ number: 'CQC', label: 'Approved & Accredited' },
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
										Free Care Assessment
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
										Speak with Our Team
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
							💫 Personalized care plans • Experienced caregivers • 30-day
							satisfaction guarantee
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

export default ElderlyCarePage;
