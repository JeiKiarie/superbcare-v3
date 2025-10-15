import { motion } from 'framer-motion';
import Link from 'next/link';
import dementiaCare from '/public/dementia-care1.jpg';
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
	BiAlarm,
} from 'react-icons/bi';
import {
	FaUserNurse,
	FaHome,
	FaShieldAlt,
	FaClock,
	FaGraduationCap,
	FaHeart,
	FaPills,
} from 'react-icons/fa';
import { FaRegStar as FaSparkles } from 'react-icons/fa';
import {
	MdOutlinePsychology,
	MdOutlineLocalHospital,
	MdOutlineWc,
	MdOutlineRestaurant,
	MdOutlineDirectionsCar,
	MdOutlineMemory,
} from 'react-icons/md';
import {
	RiMentalHealthLine,
	RiShieldCheckLine,
	RiPulseLine,
	RiHeartLine,
} from 'react-icons/ri';
import {
	GiFamilyHouse,
	GiHearts,
	GiPeaceDove,
	GiShield,
	GiBrain,
	GiBrainstorm,
} from 'react-icons/gi';
import HeroSection from '@/components/HeroSection';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const DementiaCarePage = () => {
	return (
		<>
			{/* Hero Section */}
			<HeroSection
				title="Dementia Care Services"
				subtitle="Specialized Care for Memory Loss & Cognitive Support"
				backgroundImage={dementiaCare}
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
							🧠 Specialized Dementia Support
						</span>
						<h2 className="text-5xl font-bold bg-gradient-to-r from-blue-800 to-[#cca6c8] bg-clip-text text-transparent mb-6">
							Compassionate Dementia Care
						</h2>
						<p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
							Understanding dementia requires specialized knowledge and
							boundless compassion. Our dedicated approach ensures dignity,
							safety, and quality of life for individuals with memory loss and
							cognitive challenges.
						</p>
					</AnimatedWrapper>

					{/* Key Features Grid with Icons */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
						{[
							{
								icon: <GiBrain className="w-10 h-10 text-[#cca6c8]" />,
								title: 'Memory Support',
								description:
									'Specialized assistance with memory loss and cognitive function',
								color: 'from-[#cca6c8] to-[#b89ab9]',
							},
							{
								icon: <GiBrainstorm className="w-10 h-10 text-blue-600" />,
								title: 'Cognitive Activities',
								description:
									'Stimulating activities to maintain mental alertness and engagement',
								color: 'from-blue-500 to-blue-600',
							},
							{
								icon: <FaPills className="w-10 h-10 text-[#cca6c8]" />,
								title: 'Medication Management',
								description:
									'Safe medication reminders and administration support',
								color: 'from-[#cca6c8] to-[#a97ca7]',
							},
							{
								icon: <BiAlarm className="w-10 h-10 text-blue-600" />,
								title: 'Safety Monitoring',
								description: '24/7 monitoring and fall prevention measures',
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
							Comprehensive Dementia Care Services
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{[
								'Specialized dementia care planning and monitoring',
								'Memory assistance and cognitive stimulation activities',
								'Emotional support and compassionate companionship',
								'24/7 safety monitoring and fall prevention',
								'Medication management and health monitoring',
								'Structured daily routines and meaningful activities',
								'Communication techniques for memory loss',
								'Family education and caregiver support',
								'Wandering prevention and home modifications',
								'Behavioral management strategies',
								'Nutritional support and meal assistance',
								'Transportation to appointments and outings',
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
							Why Choose Our Dementia Care Services?
						</h3>
						<div className="w-24 h-1 bg-gradient-to-r from-[#cca6c8] to-blue-500 mx-auto mb-8"></div>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Expert care that makes a meaningful difference in the lives of
							those affected by dementia.
						</p>
					</AnimatedWrapper>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{[
							{
								icon: <FaGraduationCap className="w-12 h-12 text-white" />,
								title: 'Advanced Dementia Training',
								description:
									'Our caregivers receive specialized, ongoing training in dementia care, understanding the unique challenges of each stage and providing appropriate support and communication.',
								color: 'from-[#cca6c8] to-[#b89ab9]',
								hoverColor:
									'group-hover:from-[#cca6c8] group-hover:to-[#d1b4d2]',
							},
							{
								icon: <MdOutlinePsychology className="w-12 h-12 text-white" />,
								title: 'Cognitive Stimulation Programs',
								description:
									'Structured activities and therapies designed to maintain cognitive function, promote mental engagement, and provide meaningful connections for individuals with memory loss.',
								color: 'from-blue-600 to-blue-700',
								hoverColor: 'group-hover:from-blue-600 group-hover:to-blue-800',
							},
							{
								icon: <RiShieldCheckLine className="w-12 h-12 text-white" />,
								title: 'Advanced Safety Protocols',
								description:
									'Comprehensive safety measures including wandering prevention, risk assessments, emergency response planning, and home modifications to ensure maximum safety and security.',
								color: 'from-[#a97ca7] to-[#cca6c8]',
								hoverColor:
									'group-hover:from-[#a97ca7] group-hover:to-[#cca6c8]',
							},
							{
								icon: <RiHeartLine className="w-12 h-12 text-white" />,
								title: 'Emotional & Behavioral Support',
								description:
									'Specialized approaches to manage challenging behaviors, provide emotional validation, and maintain dignity while addressing the unique emotional needs of dementia patients.',
								color: 'from-blue-700 to-[#cca6c8]',
								hoverColor:
									'group-hover:from-blue-700 group-hover:to-[#b89ab9]',
							},
							{
								icon: <FaClock className="w-12 h-12 text-white" />,
								title: '24/7 Specialized Monitoring',
								description:
									'Round-the-clock care by dementia-trained professionals who understand sleep patterns, sundowning, and other unique dementia-related needs and behaviors.',
								color: 'from-[#cca6c8] to-purple-600',
								hoverColor:
									'group-hover:from-[#cca6c8] group-hover:to-purple-500',
							},
							{
								icon: <BiSupport className="w-12 h-12 text-white" />,
								title: 'Family Caregiver Support',
								description:
									'Comprehensive support and education for family members, including respite care, counseling, and resources to help caregivers manage the emotional toll of dementia caregiving.',
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
											Specialized Care
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
							Dementia Care FAQ
						</h3>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Understanding dementia care and finding the right support for your
							loved one
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
									question: 'What types of dementia do you provide care for?',
									answer:
										'We provide specialized care for all types of dementia including Alzheimer&#39;s disease, vascular dementia, Lewy body dementia, frontotemporal dementia, and mixed dementias. Our trained caregivers tailor care approaches based on the specific type of dementia and individual needs.',
								},
								{
									question:
										'How do your caregivers handle challenging behaviors?',
									answer:
										'Our dementia-trained staff use person-centered care approaches, validation therapy, and behavioral management techniques. We consider the underlying causes of behaviors (pain, medication, environment) rather than just reacting to them, ensuring dignified and respectful care.',
								},
								{
									question:
										'What specialized training do your dementia caregivers receive?',
									answer:
										'Our caregivers participate in extensive training programs including dementia awareness, communication techniques, safety procedures, medication management, emotional support strategies, family education, and ongoing professional development. We also provide specialized training for different dementia stages and types.',
								},
								{
									question: 'How do you prevent wandering and ensure safety?',
									answer:
										'We implement comprehensive safety protocols including environmental modifications, door alarms, GPS tracking systems, safety assessments, regular check-ins, and caregiver training. We also work with families to create personalized safety plans that respect the individual&#39;s dignity while ensuring security.',
								},
								{
									question: 'How often is the dementia care plan reviewed?',
									answer:
										'Dementia care plans are reviewed every 1-3 months or whenever significant changes occur in the individual&#39;s condition, with immediate adjustments as needed. Regular assessments ensure the care plan remains appropriate for the person&#39;s current needs and abilities.',
								},
								{
									question: 'Do you provide family support and education?',
									answer:
										'Absolutely. We provide comprehensive family support including caregiver training, educational resources, emotional support, respite care options, and ongoing communication about your loved one&#39;s care and progress. Family involvement is crucial for successful dementia care.',
								},
								{
									question:
										'What should I look for when choosing dementia care?',
									answer:
										'Specialized dementia training, experience with various dementia types and stages, proven safety protocols, comprehensive care planning, family support services, flexibility and responsiveness to individual needs, and a compassion-centered approach are all essential factors to consider.',
								},
								{
									question: 'How can I prepare my home for dementia care?',
									answer:
										'We recommend creating a safe environment by removing hazards, installing grab bars, improving lighting, simplifying navigation, reducing clutter, establishing routines, creating memory aids, and ensuring easy access to necessary items. Our team can provide specific recommendations based on your loved one&#39;s needs.',
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
							🧠 Specialized Dementia Care Support
						</span>
						<h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
							Expert Dementia Care for Your Loved One
						</h2>
						<p className="text-xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
							Experience the difference that comes from understanding dementia
							at its core. Our specialized care combines clinical expertise with
							genuine compassion, creating an environment where dignity,
							comfort, and quality of life are preserved through every stage.
						</p>

						{/* Interactive Stats */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
							{[
								{ number: '95%', label: 'Dementia Care Satisfaction' },
								{ number: '200+', label: 'Dementia Patients Served' },
								{ number: '8+', label: 'Years Dementia Expertise' },
								{ number: '24/7', label: 'Specialized Support' },
							].map((stat, index) => (
								<div
									key={index}
									className="text-center">
									<div className="text-4xl font-bold text-white mb-2">
										{stat.number}
									</div>
									<div className="text-sm opacity-80">{stat.label}</div>
								</div>
							))}
						</div>

						{/* Action Buttons */}
						<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
							<Link href="/appointment">
								<button className="bg-white text-[#cca6c8] px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-blue-50 hover:scale-105 transform hover:-translate-y-1 flex items-center gap-3">
									<FaUserNurse className="w-5 h-5" />
									Free Dementia Assessment
									<span className="text-2xl">→</span>
								</button>
							</Link>
							<Link href="/contact-us">
								<button className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-[#cca6c8] transition-all duration-300 hover:scale-105 flex items-center gap-3">
									<BiSupport className="w-5 h-5" />
									Speak with Dementia Experts
								</button>
							</Link>
						</div>

						{/* Guarantee Text */}
						<AnimatedWrapper
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.6 }}
							className="mt-8 text-sm opacity-80">
							💫 Dementia-specialized caregivers • Advanced safety protocols •
							Family education included
						</AnimatedWrapper>
					</AnimatedWrapper>
				</div>
			</section>

			{/* Navigation Back Button - Styled */}
			<div className="flex justify-center py-8 bg-gray-50">
				<AnimatedWrapper
					initial={{ scale: 0.9 }}
					animate={{ scale: 1 }}
					transition={{ delay: 1.8 }}>
					<Link href="/services">
						<button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold border border-blue-200 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center gap-2">
							<span>←</span>
							Back to Services
						</button>
					</Link>
				</AnimatedWrapper>
			</div>
		</>
	);
};

export default DementiaCarePage;
