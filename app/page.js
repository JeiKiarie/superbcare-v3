import Carousel from '../components/Carousel';
import AnimatedWrapper from '../components/AnimatedWrapper';
import Link from 'next/link';
import { FaHeart, FaHome, FaSmile } from 'react-icons/fa';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../components/ui/accordion';
import { MdOutlineAssistWalker } from 'react-icons/md';
import { LiaUserNurseSolid } from 'react-icons/lia';
import { LuCalendarClock } from 'react-icons/lu';
import { TbMoodPuzzled } from 'react-icons/tb';
import { GiPeaceDove } from 'react-icons/gi';
import { MdHealthAndSafety } from 'react-icons/md';
import { GiBroom } from 'react-icons/gi';
import { FaPeopleGroup } from 'react-icons/fa6';
import { BiFirstAid } from 'react-icons/bi';
import { BiTimeFive } from 'react-icons/bi';
import { BiAlarm } from 'react-icons/bi';

export const metadata = {
	title:
		'Superb Care Services Ltd | Professional Live-In Care | Windsor Elderly Care | Home Care UK',
	description:
		'Professional live-in care services for elderly in Windsor & UK. 24/7 live-in caregivers, dementia care, palliative care & companionship. CQC registered & experienced carers.',
	keywords: [
		'superb care services',
		'live in care windsor',
		'elderly care uk',
		'home care services',
		'24/7 live in carers',
		'dementia care windsor',
		'palliative care',
		'elderly companionship',
		'caregiver services',
		'professional carers',
	],
	openGraph: {
		title: 'Superb Care Services Ltd - Professional Live-In Care for Elderly',
		description:
			'24/7 professional live-in care services in Windsor and across the UK. Experienced caregivers for elderly care, dementia support, and palliative care.',
		url: 'https://superbcareservices.co.uk',
		type: 'website',
	},
	twitter: {
		title: 'Superb Care Services Ltd | Live-In Care Windsor',
		description:
			'Professional live-in care for elderly in Windsor. 24/7 caregivers, dementia care, palliative care & companionship services.',
	},
	alternates: {
		canonical: 'https://superbcareservices.co.uk',
	},
};

const services = [
	{
		id: 1,
		title: 'Personal Care',
		icon: MdHealthAndSafety,
		text: `Our personal care services are designed to assist with daily activities, ensuring that clients can maintain their independence and dignity. Our caregivers assist with such activities of daily living as bathing, dressing, grooming, and mobility.`,
	},
	{
		id: 2,
		title: 'Household Assistance',
		icon: GiBroom,
		text: `We take care of household chores to create a clean, safe, and comfortable living environment, ie, light housekeeping, laundry, meal preparation, and grocery shopping.`,
	},
	{
		id: 3,
		title: 'Companionship',
		icon: FaPeopleGroup,
		text: `We provide companionship to combat loneliness and enhance quality of life. Social interaction, emotional support, accompaniment to appointments, and help in engaging in hobbies are some of the aspects of companionship that our carers are trained to give.`,
	},
	{
		id: 4,
		title: 'Specialised Care',
		icon: BiFirstAid,
		text: `We offer specialised care for those with specific health conditions or recovery needs including Dementia and Alzheimer’s care, post-surgery and rehabilitation support, as well as palliative and end-of-life care.`,
	},

	{
		id: 5,
		title: '24/7 Placement & Support for Care Leavers',
		icon: BiTimeFive,
		text: `Our dedicated caregivers provide round-the-clock assistance, ensuring safety and comfort at all times. Whether it’s help with daily activities, medical needs, or companionship, we are here to support you every step of the way.`,
	},
	{
		id: 6,
		title: 'Emergency Response',
		icon: BiAlarm,
		text: `Trained in emergency procedures, our caregivers can quickly and effectively respond to all unexpected situations.`,
	},
	{
		id: 7,
		title: 'Skilled Nursing Care',
		icon: LiaUserNurseSolid,
		text: `Our skilled nursing services are delivered by a
		multidisciplinary team of healthcare professionals dedicated to
		meeting the complex medical needs of our residents.`,
	},
	{
		id: 8,
		title: 'Assisted Living',
		icon: MdOutlineAssistWalker,
		text: `Our assisted living communities are carefully designed to promote independence and well-being while offering personalised assistance with daily tasks.`,
	},
	{
		id: 9,
		title: 'Memory Care',
		icon: TbMoodPuzzled,
		text: `Our memory care program provides a safe and secure environment where residents receive specialised care tailored to their cognitive needs.`,
	},
	{
		id: 10,
		title: 'Respite Care',
		icon: LuCalendarClock,
		text: `Our respite care services offer temporary relief for caregivers while ensuring that their loved ones receive the highest standard of care in a welcoming and supportive setting.`,
	},
	{
		id: 11,
		title: 'Hospice Care',
		icon: GiPeaceDove,
		text: `Our holistic approach focuses on pain management, symptom control, and emotional support, allowing residents to live their remaining days with dignity and peace.`,
	},
];

export default function Home() {
	const features = [
		{ icon: FaHeart, text: 'Compassionate Care' },
		{ icon: FaHome, text: 'Home Comfort' },
		{ icon: FaSmile, text: 'Quality Experience' },
	];

	return (
		<main className="mx-auto py-1">
			{/* Carousel Section */}
			<section id="carousel">
				<Carousel />
			</section>

			{/* Welcome Section */}
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
						<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
							Welcome to{' '}
							<span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
								Superb Care Services
							</span>
						</h1>

						<p className="text-xl md:text-2xl mb-8 leading-relaxed text-blue-100 text-center">
							Professional Live-In Care Services
							<span className="block text-lg md:text-xl mt-2 text-white/80">
								Bringing compassion, dignity, and exceptional care to your loved
								ones in the comfort of their own home.
							</span>
						</p>

						{/* Feature icons */}
						<div className="flex justify-center items-center gap-8 mb-10">
							{features.map((feature, index) => (
								<div
									key={index}
									className="flex flex-col items-center gap-2 group">
									<div className="p-4 bg-white/10 backdrop-blur-sm rounded-full group-hover:bg-white/20 transition-all duration-300">
										<feature.icon className="w-6 h-6 text-white" />
									</div>
									<span className="text-sm font-medium text-blue-100 group-hover:text-white transition-colors">
										{feature.text}
									</span>
								</div>
							))}
						</div>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
							<Link
								href="/appointment"
								className="inline-flex items-center px-8 py-4 bg-white text-[#cca6c8] font-bold rounded-2xl hover:bg-blue-50 hover:shadow-xl transition-all duration-300 shadow-lg text-lg">
								<span>Get Free Consultation</span>
								<span className="ml-2 text-2xl">→</span>
							</Link>

							<Link
								href="/services"
								className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-[#cca6c8] transition-all duration-300 text-lg">
								<span>Explore Services</span>
							</Link>
						</div>

						{/* Scroll indicator */}
						<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
							<div className="w-px h-16 bg-white/30"></div>
							<div className="w-2 h-2 bg-white rounded-full mx-auto mt-2"></div>
						</div>
					</div>
				</div>
			</section>

			{/* About Us Section */}
			<section className="bg-gradient-to-br from-[#cca6c8]/10 via-white/50 to-[#cca6c8]/5 p-16 rounded-3xl mx-6 shadow-xl">
				<AnimatedWrapper
					as="div"
					className="max-w-6xl mx-auto text-center"
					initial={{ opacity: 0, y: 30 }}
					transition={{ duration: 1 }}>
					<h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-8 tracking-tight">
						About Superb Care Services
					</h1>
					<p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl text-justify mx-auto">
						We are a UK-based company providing exceptional live-in care
						services for the elderly. Our mission is to improve the quality of
						life for elderly individuals by offering professional,
						compassionate, and dedicated care in the comfort of their own homes.
					</p>
				</AnimatedWrapper>
			</section>

			{/* Why Choose Us Section */}
			<section className="p-16 container mx-auto">
				<AnimatedWrapper
					as="h2"
					className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16"
					initial={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.8 }}>
					Why Choose Superb Care Services?
				</AnimatedWrapper>

				{/* Quick Stats */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
					<div className="text-center">
						<div className="text-4xl md:text-6xl font-bold text-[#cca6c8] mb-2">
							200+
						</div>
						<div className="text-gray-600 text-sm md:text-base">
							Happy Clients
						</div>
					</div>
					<div className="text-center">
						<div className="text-4xl md:text-6xl font-bold text-[#cca6c8] mb-2">
							7+
						</div>
						<div className="text-gray-600 text-sm md:text-base">
							Years Experience
						</div>
					</div>
					<div className="text-center">
						<div className="text-4xl md:text-6xl font-bold text-[#cca6c8] mb-2">
							24/7
						</div>
						<div className="text-gray-600 text-sm md:text-base">
							Care Support
						</div>
					</div>
					<div className="text-center">
						<div className="text-4xl md:text-6xl font-bold text-[#cca6c8] mb-2">
							5★
						</div>
						<div className="text-gray-600 text-sm md:text-base">
							Average Rating
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.slice(0, 9).map((service, index) => (
						<AnimatedWrapper
							key={service.id}
							as="article"
							className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#cca6c8]/10"
							initial={{ opacity: 0, y: 30 }}
							transition={{ delay: index * 0.1, duration: 0.6 }}>
							<div className="absolute top-6 left-6 w-16 h-16 bg-[#cca6c8]/10 rounded-xl flex items-center justify-center group-hover:bg-[#cca6c8] transition-colors duration-300">
								<service.icon className="w-8 h-8 text-[#cca6c8] group-hover:text-white" />
							</div>
							<div className="ml-20">
								<h3 className="text-xl font-bold text-blue-900 mb-4">
									{service.title}
								</h3>
								<p className="text-gray-600 leading-relaxed">{service.text}</p>
							</div>
						</AnimatedWrapper>
					))}
				</div>

				{/* More Services Link */}
				<AnimatedWrapper
					as="div"
					className="text-center mt-12"
					initial={{ opacity: 0, y: 20 }}
					transition={{ delay: 1, duration: 0.6 }}>
					<Link
						href="/services"
						className="inline-flex items-center px-8 py-4 bg-[#cca6c8] text-white font-semibold rounded-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg">
						Explore All Services
						<span className="ml-2">→</span>
					</Link>
				</AnimatedWrapper>
			</section>

			{/* How It Works Section */}
			<section className="py-16 px-6 bg-white">
				<div className="container mx-auto">
					<AnimatedWrapper
						as="h2"
						className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8 }}>
						How Our Care Process Works
					</AnimatedWrapper>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						<div className="text-center group">
							<div className="w-20 h-20 bg-[#cca6c8] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
								1
							</div>
							<h3 className="text-xl font-bold text-blue-900 mb-4">
								Initial Assessment
							</h3>
							<p className="text-gray-600 leading-relaxed text-justify">
								We begin with a comprehensive assessment of your loved
								one&apos;s needs. Our care coordinators visit your home to
								understand their requirements and preferences.
							</p>
						</div>

						<div className="text-center group">
							<div className="w-20 h-20 bg-[#cca6c8] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
								2
							</div>
							<h3 className="text-xl font-bold text-blue-900 mb-4">
								Personalised Care Plan
							</h3>
							<p className="text-gray-600 leading-relaxed text-justify">
								Based on the assessment, we create a customized care plan that
								addresses specific needs, preferences, and schedules of your
								loved one.
							</p>
						</div>

						<div className="text-center group">
							<div className="w-20 h-20 bg-[#cca6c8] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
								3
							</div>
							<h3 className="text-xl font-bold text-blue-900 mb-4">
								Ongoing Support
							</h3>
							<p className="text-gray-600 leading-relaxed text-justify">
								Our experienced caregivers provide consistent, compassionate
								care with regular check-ins and the ability to adjust the care
								plan as needed.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Awards & Certifications Section */}
			<section className="py-16 px-6 bg-gray-50">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
						Our Certifications & Partnerships
					</h2>
					<div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
						<div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
							<div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-white font-bold text-xl">★</span>
							</div>
							<p className="text-gray-600 font-medium">CQC Registered</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
							<div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-white font-bold text-xl">✓</span>
							</div>
							<p className="text-gray-600 font-medium">Insured</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
							<div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-white font-bold text-xl">🏆</span>
							</div>
							<p className="text-gray-600 font-medium">Award Winning</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
							<div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-white font-bold text-xl">👥</span>
							</div>
							<p className="text-gray-600 font-medium">Member of UKHCA</p>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-16 px-6 bg-white">
				<div className="container mx-auto max-w-4xl">
					<AnimatedWrapper
						as="h2"
						className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8 }}>
						Frequently Asked Questions
					</AnimatedWrapper>

					<Accordion
						type="single"
						collapsible
						className="w-full max-w-3xl mx-auto">
						<AccordionItem
							value="item-1"
							className="border-0">
							<AccordionTrigger className="text-lg font-bold text-blue-900 hover:text-[#cca6c8] p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
								Are your caregivers fully qualified and vetted?
							</AccordionTrigger>
							<AccordionContent className="text-gray-700 leading-relaxed px-6 pb-4">
								Yes, all our caregivers undergo rigorous background checks,
								receive comprehensive training, and are fully qualified to
								provide the level of care needed. They are also DBS checked and
								insured.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="item-2"
							className="border-0">
							<AccordionTrigger className="text-lg font-bold text-blue-900 hover:text-[#cca6c8] p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
								How quickly can you provide care services?
							</AccordionTrigger>
							<AccordionContent className="text-gray-700 leading-relaxed px-6 pb-4">
								We aim to arrange care within 24-48 hours of assessment and
								approval, depending on the specific requirements. For immediate
								urgent care needs, we prioritize placement within 24 hours.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="item-3"
							className="border-0">
							<AccordionTrigger className="text-lg font-bold text-blue-900 hover:text-[#cca6c8] p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
								Do you provide respite care?
							</AccordionTrigger>
							<AccordionContent className="text-gray-700 leading-relaxed px-6 pb-4">
								Absolutely! Our respite care services provide temporary relief
								for primary caregivers. This can range from a few hours to
								several weeks, ensuring your loved one receives the same
								high-quality care during your break.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="item-4"
							className="border-0">
							<AccordionTrigger className="text-lg font-bold text-blue-900 hover:text-[#cca6c8] p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
								What types of specialised care do you offer?
							</AccordionTrigger>
							<AccordionContent className="text-gray-700 leading-relaxed px-6 pb-4">
								We specialize in dementia and Alzheimer&apos;s care, palliative
								care, rehabilitation support, and post-surgery care. All our
								specialised services are provided by trained professionals with
								relevant experience.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="item-5"
							className="border-0">
							<AccordionTrigger className="text-lg font-bold text-blue-900 hover:text-[#cca6c8] p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
								Are your services available 24/7?
							</AccordionTrigger>
							<AccordionContent className="text-gray-700 leading-relaxed px-6 pb-4">
								Yes! We provide round-the-clock care for clients who require
								continuous support. Our live-in caregivers ensure 24/7
								availability for urgent needs and emergency situations.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="item-6"
							className="border-0">
							<AccordionTrigger className="text-lg font-bold text-blue-900 hover:text-[#cca6c8] p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
								How do you handle medication management?
							</AccordionTrigger>
							<AccordionContent className="text-gray-700 leading-relaxed px-6 pb-4">
								Our caregivers are trained in medication management and adhere
								to strict protocols. We provide reminders, dispensing support,
								and monitor medication compliance to ensure your loved
								one&apos;s safety.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="item-7"
							className="border-0">
							<AccordionTrigger className="text-lg font-bold text-blue-900 hover:text-[#cca6c8] p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
								Do you provide transportation services?
							</AccordionTrigger>
							<AccordionContent className="text-gray-700 leading-relaxed px-6 pb-4">
								We offer accompanied transportation to medical appointments,
								social activities, and other outings as needed. Our caregivers
								ensure safe and comfortable travel arrangements.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="item-8"
							className="border-0">
							<AccordionTrigger className="text-lg font-bold text-blue-900 hover:text-[#cca6c8] p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
								What is included in your care packages?
							</AccordionTrigger>
							<AccordionContent className="text-gray-700 leading-relaxed px-6 pb-4">
								Our packages include personal care, medication management, meal
								preparation, household assistance, companionship, and emergency
								response. We customize packages based on individual needs.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="item-9"
							className="border-0">
							<AccordionTrigger className="text-lg font-bold text-blue-900 hover:text-[#cca6c8] p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
								How do you ensure caregiver quality?
							</AccordionTrigger>
							<AccordionContent className="text-gray-700 leading-relaxed px-6 pb-4">
								We conduct thorough background checks, provide ongoing training,
								perform regular quality assessments, and maintain open
								communication with families to ensure the highest standards of
								care.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value="item-10"
							className="border-0">
							<AccordionTrigger className="text-lg font-bold text-blue-900 hover:text-[#cca6c8] p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
								Can I schedule a free consultation?
							</AccordionTrigger>
							<AccordionContent className="text-gray-700 leading-relaxed px-6 pb-4">
								Yes! We offer free consultations to discuss your loved
								one&apos;s care needs. This allows us to understand their
								requirements and provide you with the best possible service
								recommendations.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="bg-gradient-to-r from-[#cca6c8]/5 to-blue-50 py-16 px-6">
				<div className="container mx-auto">
					<AnimatedWrapper
						as="h2"
						className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8 }}>
						What Our Clients Say
					</AnimatedWrapper>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
						<AnimatedWrapper
							as="div"
							className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-[#cca6c8]"
							initial={{ opacity: 0, y: 30 }}
							transition={{ delay: 0.2, duration: 0.6 }}>
							<div className="flex items-center mb-6">
								<div className="w-12 h-12 bg-[#cca6c8] rounded-full flex items-center justify-center mr-4">
									<span className="text-white font-bold text-lg">M</span>
								</div>
								<div>
									<h4 className="text-lg font-bold text-blue-900">Mark</h4>
									<p className="text-gray-500 text-sm">Family Member</p>
								</div>
							</div>
							<p className="text-gray-700 text-lg leading-relaxed italic">
								The caregivers were professional and compassionate. They helped
								my mother feel at ease and comfortable in her home. The quality
								of care exceeded our expectations.
							</p>
							<div className="flex mt-4">
								{[...Array(5)].map((_, i) => (
									<span
										key={i}
										className="text-[#cca6c8] text-xl">
										★
									</span>
								))}
							</div>
						</AnimatedWrapper>

						<AnimatedWrapper
							as="div"
							className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-[#cca6c8]"
							initial={{ opacity: 0, y: 30 }}
							transition={{ delay: 0.4, duration: 0.6 }}>
							<div className="flex items-center mb-6">
								<div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
									<span className="text-white font-bold text-lg">J</span>
								</div>
								<div>
									<h4 className="text-lg font-bold text-blue-900">Joe</h4>
									<p className="text-gray-500 text-sm">Family Member</p>
								</div>
							</div>
							<p className="text-gray-700 text-lg leading-relaxed italic">
								We received personalised care plans that perfectly matched our
								needs. The attention to detail and genuine care for our father
								was remarkable. Highly recommended!
							</p>
							<div className="flex mt-4">
								{[...Array(5)].map((_, i) => (
									<span
										key={i}
										className="text-[#cca6c8] text-xl">
										★
									</span>
								))}
							</div>
						</AnimatedWrapper>

						<AnimatedWrapper
							as="div"
							className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-[#cca6c8]"
							initial={{ opacity: 0, y: 30 }}
							transition={{ delay: 0.6, duration: 0.6 }}>
							<div className="flex items-center mb-6">
								<div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
									<span className="text-white font-bold text-lg">S</span>
								</div>
								<div>
									<h4 className="text-lg font-bold text-blue-900">Sarah</h4>
									<p className="text-gray-500 text-sm">Family Member</p>
								</div>
							</div>
							<p className="text-gray-700 text-lg leading-relaxed italic">
								The quality of care provided by Superb Care Services is
								exceptional. Their team is not just knowledgeable but also
								incredibly kind and understanding. My grandmother always looks
								forward to their visits.
							</p>
							<div className="flex mt-4">
								{[...Array(5)].map((_, i) => (
									<span
										key={i}
										className="text-[#cca6c8] text-xl">
										★
									</span>
								))}
							</div>
						</AnimatedWrapper>
					</div>
				</div>
			</section>

			{/* Call to Action / Contact Section */}
			<section className="py-16 px-6 bg-gradient-to-r from-[#cca6c8] via-[#d4a7d4] to-blue-600 text-white">
				<div className="container mx-auto text-center">
					<AnimatedWrapper
						as="h2"
						className="text-4xl md:text-6xl font-bold mb-8"
						initial={{ opacity: 0, scale: 0.9 }}
						transition={{ duration: 0.8 }}>
						Ready to Get Started?
					</AnimatedWrapper>
					<AnimatedWrapper
						as="p"
						className="text-xl md:text-2xl mb-12 px-8 md:px-0 text-justify max-w-3xl mx-auto leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						transition={{ delay: 0.2, duration: 0.8 }}>
						Contact us today to learn more about our live-in care services.
						Experience the difference professional, compassionate care can make
						in your loved one&apos;s life.
					</AnimatedWrapper>
					<AnimatedWrapper
						as="div"
						className="flex flex-col sm:flex-row gap-6 justify-center items-center"
						initial={{ opacity: 0, y: 30 }}
						transition={{ delay: 0.4, duration: 0.8 }}>
						<Link
							href="/appointment"
							className="inline-flex items-center px-8 py-4 bg-white text-blue-800 font-bold rounded-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl text-lg">
							Book Free Consultation
							<span className="ml-2">→</span>
						</Link>
						<Link
							href="/contact-us"
							className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-800 transition-all duration-300 text-lg">
							Contact Us Today
						</Link>
					</AnimatedWrapper>
				</div>
			</section>
		</main>
	);
}
