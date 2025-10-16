import Link from 'next/link';
import { BiCheckCircle } from 'react-icons/bi';
import { FaUserNurse, FaHeart } from 'react-icons/fa';
import { FaRegStar as FaSparkles } from 'react-icons/fa';
import { MdOutlinePsychology } from 'react-icons/md';
import { RiShieldCheckLine, RiPulseLine } from 'react-icons/ri';
import { GiFamilyHouse } from 'react-icons/gi';
import HeroSection from '@/components/HeroSection';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import BackButton from '@/components/BackButton';

const PalliativeCarePage = () => {
	return (
		<>
			{/* Hero Section with Modern HeroSection Component */}
			<HeroSection
				title="Palliative Care Services"
				subtitle="Compassionate Comfort & Dignity"
				backgroundImage="/palliative-care.jpg"
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
							🕊️ Holistic Comfort Care
						</span>
						<h2 className="text-5xl font-bold bg-gradient-to-r from-blue-800 to-[#cca6c8] bg-clip-text text-transparent mb-6 py-4">
							Dignity in Every Moment
						</h2>
						<p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
							When facing serious illness, our palliative care ensures comfort,
							dignity, and peace of mind for patients and their loved ones. We
							focus on symptom relief and holistic support that honors life and
							fosters care that goes beyond just medical care.
						</p>
					</AnimatedWrapper>

					{/* Key Features Grid with Icons */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
						{[
							{
								icon: <RiPulseLine className="w-10 h-10 text-[#cca6c8]" />,
								title: 'Symptom Relief',
								description:
									'Effective management of pain and uncomfortable symptoms',
								color: 'from-[#cca6c8] to-[#b89ab9]',
							},
							{
								icon: (
									<MdOutlinePsychology className="w-10 h-10 text-blue-600" />
								),
								title: 'Emotional Support',
								description: 'Compassionate counseling and psychological care',
								color: 'from-blue-500 to-blue-600',
							},
							{
								icon: (
									<RiShieldCheckLine className="w-10 h-10 text-[#cca6c8]" />
								),
								title: 'Care Coordination',
								description: 'Seamless integration with healthcare providers',
								color: 'from-[#cca6c8] to-[#a97ca7]',
							},
							{
								icon: <GiFamilyHouse className="w-10 h-10 text-blue-600" />,
								title: 'Family Guidance',
								description: 'Support and guidance for loved ones throughout',
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

					{/* Palliative Care Focus Areas */}
					<AnimatedWrapper
						as="div"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.8 }}
						className="backdrop-blur-sm bg-white/90 border border-white/20 rounded-3xl shadow-2xl p-8 lg:p-12">
						<h3 className="text-3xl font-bold text-center text-blue-800 mb-8">
							Our Comprehensive Palliative Care Services
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{[
								'Pain and symptom management',
								'Breathe therapy and oxygen support',
								'Nutrition and hydration counseling',
								'Mobility assistance and equipment',
								'Medication management',
								'Wound care and dressing changes',
								'Counseling and spiritual care',
								'Family caregiver support',
								'Advance care planning',
								'Hospice coordination when appropriate',
								'24/7 on-call support',
								'Regular wellness assessments',
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
							Why Choose Our Palliative Care Services?
						</h3>
						<div className="w-24 h-1 bg-gradient-to-r from-[#cca6c8] to-blue-500 mx-auto mb-8"></div>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Discover what sets our palliative care apart and enhances comfort
							and dignity through every stage of serious illness.
						</p>
					</AnimatedWrapper>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{[
							{
								icon: <RiPulseLine className="w-12 h-12 text-white" />,
								title: 'Holistic Symptom Management',
								description:
									'Advanced pain relief and symptom control that addresses not just physical discomfort, but also emotional, psychological, and spiritual needs to restore comfort and quality of life.',
								color: 'from-[#cca6c8] to-[#b89ab9]',
								hoverColor:
									'group-hover:from-[#cca6c8] group-hover:to-[#d1b4d2]',
							},
							{
								icon: <MdOutlinePsychology className="w-12 h-12 text-white" />,
								title: 'Compassionate Emotional Support',
								description:
									'Dedicated counseling, spiritual care, and therapeutic assistance that helps patients and families navigate the complex emotions of serious illness with empathy and understanding.',
								color: 'from-blue-600 to-blue-700',
								hoverColor: 'group-hover:from-blue-600 group-hover:to-blue-800',
							},
							{
								icon: <FaUserNurse className="w-12 h-12 text-white" />,
								title: 'Expert Multidisciplinary Team',
								description:
									'A collaborative team of doctors, nurses, social workers, counselors, and specialists working together to provide the highest standard of palliative care at every stage.',
								color: 'from-[#a97ca7] to-[#cca6c8]',
								hoverColor:
									'group-hover:from-[#a97ca7] group-hover:to-[#cca6c8]',
							},
							{
								icon: <GiFamilyHouse className="w-12 h-12 text-white" />,
								title: 'Comprehensive Family Care',
								description:
									'Extensive support for family caregivers including education, respite opportunities, financial guidance, and emotional counseling to help maintain family strength and unity.',
								color: 'from-blue-700 to-[#cca6c8]',
								hoverColor:
									'group-hover:from-blue-700 group-hover:to-[#b89ab9]',
							},
							{
								icon: <RiShieldCheckLine className="w-12 h-12 text-white" />,
								title: 'Seamless Care Integration',
								description:
									'Complete coordination with hospitals, specialists, and primary care providers ensuring your palliative care plan integrates perfectly with all treatment goals and medical interventions.',
								color: 'from-[#cca6c8] to-purple-600',
								hoverColor:
									'group-hover:from-[#cca6c8] group-hover:to-purple-500',
							},
							{
								icon: <FaHeart className="w-12 h-12 text-white" />,
								title: 'Dignity-Preserving Care',
								description:
									'Patient-centered approach that respects individual preferences, cultural values, and personal dignity throughout the entire journey, ensuring comfort and peace of mind.',
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
			<section className="py-16 bg-gradient-to-r from-white via-blue-50/30 to-[#cca6c8]/10">
				<div className="container mx-auto px-6">
					<AnimatedWrapper
						className="text-center mb-16"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<h3 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-[#cca6c8] bg-clip-text text-transparent mb-6">
							Palliative Care FAQs
						</h3>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Clarifying common questions about palliative care support and
							services
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
									question: 'What is palliative care?',
									answer:
										'Palliative care is specialised medical care focused on improving quality of life for patients with serious illnesses and their families. It focuses on providing relief from symptoms, pain, and stress of serious illness through comprehensive support that addresses physical, emotional, social, and spiritual needs.',
								},
								{
									question: 'Who can benefit from palliative care?',
									answer: `Anyone facing a serious illness can benefit from palliative care, including patients with cancer, heart disease, lung disease, kidney disease, Alzheimer's, ALS, and other life-limiting conditions. It can be provided at any age and at any stage of illness, alongside curative treatments.`,
								},
								{
									question: 'When should someone consider palliative care?',
									answer: `Palliative care can start at the time of diagnosis and continue throughout the course of illness. It's appropriate when symptoms like pain, fatigue, shortness of breath, or emotional distress become difficult to manage. The goal is to prevent and relieve suffering at every stage.`,
								},
								{
									question:
										'How is palliative care different from hospice care?',
									answer:
										'Palliative care can be provided at any stage of illness alongside curative treatments, while hospice care is specifically for individuals with a prognosis of 6 months or less if the illness runs its normal course. Palliative care focuses on quality of life; hospice also includes Medicare-covered bereavement support.',
								},
								{
									question: 'Does palliative care mean giving up hope?',
									answer: `Absolutely not! Palliative care works alongside curative treatments to maximise comfort and quality of life. Many patients choose palliative care to help them continue with their treatments while managing difficult symptoms. It doesn't replace curative care - it complements it.`,
								},
								{
									question: 'What services does palliative care include?',
									answer:
										'Our comprehensive palliative care includes pain and symptom management, emotional and spiritual support, assistance with decision-making, family counseling, nutritional guidance, physical therapy coordination, and help with advance care planning. We work as a team with your primary care and specialists.',
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
						Enhance Comfort and Quality of Life
					</h2>
				</AnimatedWrapper>
				<AnimatedWrapper
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					<p className="text-lg mb-8 text-justify lg:text-center">
						Contact us today to learn more about our palliative care services
						and how we can support you and your loved ones.
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
						{/* <Link href="/services">
							<button className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition">
								⬅ Back to Services
							</button>
						</Link> */}
						<BackButton />
					</AnimatedWrapper>
				</div>
			</section>
		</>
	);
};

export default PalliativeCarePage;
