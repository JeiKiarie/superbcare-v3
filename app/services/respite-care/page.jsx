import Link from 'next/link';
import { BiCheckCircle, BiSupport } from 'react-icons/bi';
import { FaUserNurse, FaClock, FaCalendarAlt, FaHands } from 'react-icons/fa';
import { FaRegStar as FaSparkles } from 'react-icons/fa';
import { MdOutlineSnooze, MdOutlineSelfImprovement } from 'react-icons/md';
import {
	RiShieldCheckLine,
	RiHeartLine,
	RiCalendar2Line,
} from 'react-icons/ri';
import { GiFamilyHouse } from 'react-icons/gi';
import HeroSection from '@/components/HeroSection';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const RespiteCarePage = () => {
	return (
		<>
			{/* Hero Section with Modern HeroSection Component */}
			<HeroSection
				title="Respite Care Services"
				subtitle="Your Well-Deserved Time to Recharge"
				backgroundImage="/respite-care.jpg"
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
							🌿 Rejuvenating Care Breaks
						</span>
						<h2 className="text-5xl font-bold bg-gradient-to-r from-blue-800 to-[#cca6c8] bg-clip-text text-transparent mb-6">
							Take the Time You Need
						</h2>
						<p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
							Caring for loved ones is a labor of love, but everyone needs rest.
							Our respite care gives you the freedom to recharge while ensuring
							your loved one receives exceptional, compassionate care in the
							comfort of home.
						</p>
					</AnimatedWrapper>

					{/* Key Features Grid with Icons */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
						{[
							{
								icon: <FaCalendarAlt className="w-10 h-10 text-[#cca6c8]" />,
								title: 'Flexible Scheduling',
								description:
									'From a few hours to several weeks - care that fits your timeline',
								color: 'from-[#cca6c8] to-[#b89ab9]',
							},
							{
								icon: <MdOutlineSnooze className="w-10 h-10 text-blue-600" />,
								title: 'Peaceful Renewal',
								description:
									'Dedicated time for self-care, family, or personal pursuits without worry',
								color: 'from-blue-500 to-blue-600',
							},
							{
								icon: (
									<RiShieldCheckLine className="w-10 h-10 text-[#cca6c8]" />
								),
								title: 'Trusted Care Team',
								description:
									'Consistent, professional caregivers who become familiar faces to your loved one',
								color: 'from-[#cca6c8] to-[#a97ca7]',
							},
							{
								icon: <FaClock className="w-10 h-10 text-blue-600" />,
								title: '24/7 Availability',
								description:
									'Emergency and scheduled respite care whenever you need it',
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
							What Our Respite Care Includes
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{[
								'Flexible scheduling from hours to weeks',
								'Personal care and hygiene assistance',
								'Medication management and health monitoring',
								'Nutritious meals and dietary support',
								'Household assistance and light chores',
								'Social activities and companionship',
								'Transportation for appointments',
								'Emergency response and crisis management',
								'Wellness checks and vital sign monitoring',
								'Mental stimulation games and activities',
								'Evening routines and bedtime assistance',
								'Family communication and progress updates',
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
							Why Choose Our Respite Care Services?
						</h3>
						<div className="w-24 h-1 bg-gradient-to-r from-[#cca6c8] to-blue-500 mx-auto mb-8"></div>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Discover what sets our respite care apart and restores balance to
							caregiving families.
						</p>
					</AnimatedWrapper>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{[
							{
								icon: <RiCalendar2Line className="w-12 h-12 text-white" />,
								title: 'Ultimate Flexibility',
								description:
									'Care schedules that adapt to your life - from brief respites to extended breaks. Perfect for medical appointments, vacations, business trips, or just pure relaxation time.',
								color: 'from-[#cca6c8] to-[#b89ab9]',
								hoverColor:
									'group-hover:from-[#cca6c8] group-hover:to-[#d1b4d2]',
							},
							{
								icon: (
									<MdOutlineSelfImprovement className="w-12 h-12 text-white" />
								),
								title: 'Emotional Rejuvenation',
								description:
									'Reclaim your energy and mental health while knowing your loved one is in expert hands. Prevents caregiver burnout and ensures you return to caregiving refreshed and renewed.',
								color: 'from-blue-600 to-blue-700',
								hoverColor: 'group-hover:from-blue-600 group-hover:to-blue-800',
							},
							{
								icon: <FaHands className="w-12 h-12 text-white" />,
								title: 'Seamless Care Continuity',
								description:
									'Same compassionate caregivers maintain familiarity with your loved one&#39;s preferences, routines, and personality, ensuring no disruption during your absence.',
								color: 'from-[#a97ca7] to-[#cca6c8]',
								hoverColor:
									'group-hover:from-[#a97ca7] group-hover:to-[#cca6c8]',
							},
							{
								icon: <RiShieldCheckLine className="w-12 h-12 text-white" />,
								title: 'Complete Peace of Mind',
								description:
									'24/7 professional oversight means you can focus on self-care or travel without worry. Emergency protocols and regular updates keep you connected and informed.',
								color: 'from-blue-700 to-[#cca6c8]',
								hoverColor:
									'group-hover:from-blue-700 group-hover:to-[#b89ab9]',
							},
							{
								icon: <GiFamilyHouse className="w-12 h-12 text-white" />,
								title: 'Family Priorities Enhanced',
								description:
									'Time to focus on family relationships, other children, personal hobbies, or career responsibilities. Strengthening your support network strengthens caregiving overall.',
								color: 'from-[#cca6c8] to-purple-600',
								hoverColor:
									'group-hover:from-[#cca6c8] group-hover:to-purple-500',
							},
							{
								icon: <RiHeartLine className="w-12 h-12 text-white" />,
								title: 'Enhanced Care Quality',
								description:
									'Well-rested caregivers provide better care. Our respite services not only give you a break but also ensure you continue providing the best possible care when you return.',
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
											Quality Care
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
							Respite Care FAQ
						</h3>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Answers to common questions about our respite care services
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
									question: 'How long can respite care last?',
									answer:
										'Respite care can range from a few hours to several weeks, depending on your individual needs and schedule. We offer flexible options to accommodate everything from brief breaks for medical appointments to extended vacations. Our caregivers can provide care in blocks or as ongoing support based on your preferences and requirements.',
								},
								{
									question: 'What types of respite care do you offer?',
									answer:
										'We provide in-home respite care with professional caregivers who stay with your loved one, ensuring continuity and familiarity. The primary caregiver takes the break while our trained staff handles all daily care needs. We also offer day programs for shorter breaks and can coordinate with other family members or support networks.',
								},
								{
									question: 'Can respite care be arranged on short notice?',
									answer:
										'Absolutely! We understand that life can be unpredictable, and we offer emergency respite care services for urgent situations. While we recommend advance planning when possible, we have protocols in place to arrange care as quickly as possible when unexpected needs arise. Same-day or next-day arrangements are often available.',
								},
								{
									question: 'How much does respite care cost?',
									answer:
										'Costs vary based on the duration, frequency, and level of care required. We offer transparent pricing with no hidden fees and can work with your budget to find suitable solutions. Many families use flexible spending accounts or find that the benefits of preventing caregiver burnout justify the investment. Contact us for a personalized quote.',
								},
								{
									question:
										'Will the same caregiver return for future respite visits?',
									answer:
										'Whenever possible, we assign consistent caregivers who become familiar faces to your loved one, reducing stress and ensuring continuity of care. We maintain detailed care notes between visits so returning caregivers are fully informed about preferences, routines, and any recent changes in needs.',
								},
								{
									question: 'Is respite care only for elders?',
									answer:
										'While commonly associated with elderly care, respite care serves anyone who requires consistent support due to disabilities, chronic health conditions, or caregiving demands. This includes adults with developmental disabilities, individuals recovering from illness or injury, and new parents who need support. We tailor our services to any caregiving situation.',
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
							🌿 Time to Recharge & Restore Balance
						</span>
						<h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
							Take Control of Your Well-Being
						</h2>
						<p className="text-xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
							You have given so much of yourself caring for your loved ones. Now
							it is your turn to receive the gift of time. Our respite care
							professionals are ready to provide exceptional care while you
							focus on what matters most to you.
						</p>

						{/* Interactive Stats */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
							{[
								{ number: '98%', label: 'Caregiver Satisfaction' },
								{ number: '24/7', label: 'Available Support' },
								{ number: '360+', label: 'Care Breaks Provided' },
								{ number: '1-Day', label: 'Quick Setup' },
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
									Schedule Respite Care
									<span className="text-2xl">→</span>
								</button>
							</Link>
							<Link href="/contact-us">
								<button className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-[#cca6c8] transition-all duration-300 hover:scale-105 flex items-center gap-3">
									<BiSupport className="w-5 h-5" />
									Learn More Today
								</button>
							</Link>
						</div>

						{/* Guarantee Text */}
						<AnimatedWrapper
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.6 }}
							className="mt-8 text-sm opacity-80">
							💫 Flexible scheduling • Experienced caregivers • Peace of mind
							guaranteed
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

export default RespiteCarePage;
