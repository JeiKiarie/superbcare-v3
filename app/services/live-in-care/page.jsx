import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import BackButton from '@/components/BackButton';

export const metadata = {
	title: 'Live-In Care Services | 24/7 Home Care | Superb Care Services Ltd',
	description:
		'Professional live-in care services with 24/7 support in the comfort of home. Personalised elderly care, medication management, and companionship across the UK.',
	keywords: [
		'live in care',
		'24/7 home care',
		'live-in caregiver',
		'residential care at home',
		'personalised home care',
		'elderly live-in support',
		'round the clock care',
	],
	openGraph: {
		title: 'Live-In Care Services - 24/7 Home Care',
		description:
			'Professional live-in care with 24/7 support. Personalised elderly care services including medication management and companionship in the comfort of home.',
		url: 'https://superbcare.co.uk/services/live-in-care',
		type: 'website',
	},
	twitter: {
		title: 'Live-In Care Services | Superb Care Services Ltd',
		description:
			'24/7 live-in care services. Professional home care with personalised support, medication management, and companionship across the UK.',
	},
	alternates: {
		canonical: 'https://superbcare.co.uk/services/live-in-care',
	},
};

const LiveInCarePage = () => {
	return (
		<>
			<HeroSection
				title="Live-In Care Services"
				subtitle="Compassionate, Round-the-Clock Care in the Comfort of Your Home"
				backgroundImage="/live-in-care.jpg"
			/>

			<section className="py-16 bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9]">
				<div className="container mx-auto px-6">
					<AnimatedWrapper className="text-center mb-16">
						<span className="inline-block px-4 py-2 bg-[#cca6c8]/10 rounded-full text-sm font-medium text-[#cca6c8] mb-4">
							Premium Home Care Solutions
						</span>
						<h2 className="text-5xl font-bold bg-gradient-to-r from-blue-800 to-[#cca6c8] bg-clip-text text-transparent mb-6">
							Personalised Care in Your Own Home
						</h2>
						<p className="text-xl text-gray-600 max-w-4xl mx-auto">
							Experience the transformative difference of our live-in care
							services. Our dedicated caregivers become part of your family,
							providing 24/7 support while preserving dignity, independence, and
							comfort.
						</p>
					</AnimatedWrapper>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
						{[
							{
								title: '24/7 Support',
								desc: 'Round-the-clock availability ensuring peace of mind for families',
								color: 'from-[#cca6c8] to-[#b89ab9]',
							},
							{
								title: 'Home Environment',
								desc: 'Care delivered in the comfort and familiarity of your own space',
								color: 'from-blue-500 to-blue-600',
							},
							{
								title: 'Personalised Care',
								desc: 'Individually tailored care plans meeting specific needs and preferences',
								color: 'from-[#cca6c8] to-[#a97ca7]',
							},
							{
								title: 'Professional Staff',
								desc: 'Trained, compassionate caregivers committed to excellence',
								color: 'from-blue-600 to-[#cca6c8]',
							},
						].map((feature, i) => (
							<AnimatedWrapper
								key={i}
								className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center">
								<h3 className="text-xl font-bold text-blue-800 mb-3">
									{feature.title}
								</h3>
								<p className="text-gray-600">{feature.desc}</p>
								<div
									className={`w-full h-1 bg-gradient-to-r ${feature.color} rounded-full mt-4`}></div>
							</AnimatedWrapper>
						))}
					</div>

					<AnimatedWrapper className="bg-white/90 border border-white/20 rounded-3xl shadow-2xl p-8 lg:p-12 mb-20">
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
								'Customised care plan development',
							].map((service, i) => (
								<div
									key={i}
									className="flex items-center gap-4">
									<span className="w-5 h-5 bg-[#cca6c8] rounded-full"></span>
									<span className="text-gray-700 font-medium">{service}</span>
								</div>
							))}
						</div>
					</AnimatedWrapper>
				</div>
			</section>

			<section className="py-16 bg-gradient-to-br from-[#cca6c8]/5 via-white to-blue-50">
				<div className="container mx-auto px-6">
					<AnimatedWrapper className="text-center mb-16">
						<h3 className="text-4xl font-bold bg-gradient-to-r from-[#cca6c8] to-blue-700 bg-clip-text text-transparent mb-4">
							Why Choose Our Live-In Care Services?
						</h3>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Discover the unique advantages that set our live-in care apart and
							truly make a difference in quality of life.
						</p>
					</AnimatedWrapper>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{[
							{
								title: 'Peace of Mind',
								desc: 'Professional, reliable care ensuring loved ones are safe around the clock.',
							},
							{
								title: 'Maintaining Independence',
								desc: 'Freedom to age in place while receiving necessary support.',
							},
							{
								title: 'Enhanced Quality of Life',
								desc: 'Mental stimulation, companionship, and emotional support.',
							},
							{
								title: 'Healthcare Support',
								desc: 'Medical monitoring and coordination with professionals.',
							},
							{
								title: 'Mental Health Focus',
								desc: 'Dedicating attention to mental well-being and nurturing environment.',
							},
							{
								title: 'Dignity & Respect',
								desc: 'Upholding dignity and respecting unique needs and preferences.',
							},
						].map((benefit, i) => (
							<AnimatedWrapper
								key={i}
								className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
								<h4 className="text-2xl font-bold text-blue-800 mb-4">
									{benefit.title}
								</h4>
								<p className="text-gray-600">{benefit.desc}</p>
							</AnimatedWrapper>
						))}
					</div>
				</div>
			</section>

			<section className="py-16 bg-gradient-to-r from-white via-blue-50/30 to-[#cca6c8]/10">
				<div className="container mx-auto px-6">
					<AnimatedWrapper className="text-center mb-16">
						<h3 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-[#cca6c8] bg-clip-text text-transparent mb-6">
							Frequently Asked Questions
						</h3>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Get answers to common questions about our live-in care services
						</p>
					</AnimatedWrapper>

					<AnimatedWrapper className="max-w-4xl mx-auto">
						<Accordion
							type="single"
							collapsible>
							{[
								{
									q: 'What exactly is live-in care?',
									a: 'Live-in care involves a professional caregiver residing in your home to provide 24/7 support and assistance.',
								},
								{
									q: 'Who benefits most from live-in care services?',
									a: 'Elderly individuals who need substantial daily support but wish to remain in their homes.',
								},
								{
									q: 'How do you ensure caregiver and client compatibility?',
									a: 'We conduct thorough compatibility assessments through interviews with clients and their families.',
								},
								{
									q: 'What training do your caregivers receive?',
									a: 'All caregivers undergo comprehensive training including first aid, CPR, and specialised care techniques.',
								},
								{
									q: 'How flexible are your care packages?',
									a: 'Our care packages are entirely flexible and customizable to match specific needs and budgets.',
								},
							].map((faq, i) => (
								<AccordionItem
									key={i}
									value={`item-${i}`}>
									<AccordionTrigger className="text-left px-8 py-6 text-lg font-semibold text-blue-800">
										<div className="flex items-center gap-4">
											<span className="w-8 h-8 bg-[#cca6c8] rounded-full flex items-center justify-center text-white font-bold">
												{i + 1}
											</span>
											{faq.q}
										</div>
									</AccordionTrigger>
									<AccordionContent className="px-8 pb-6 text-gray-600">
										<div className="ml-12">{faq.a}</div>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</AnimatedWrapper>
				</div>
			</section>

			<section className="py-16 bg-gradient-to-r from-[#cca6c8] via-[#b88cb8] to-blue-600 text-white">
				<div className="container mx-auto px-6 text-center">
					<AnimatedWrapper className="max-w-4xl mx-auto">
						<h2 className="text-5xl font-bold mb-8">
							Start Your Personalised Care Journey Today
						</h2>
						<p className="text-xl mb-12 opacity-90">
							Join the many families who have discovered peace of mind through
							our exceptional live-in care services.
						</p>

						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
							{[
								{ num: '200+', label: 'Happy Families Served' },
								{ num: '98%', label: 'Satisfaction Rate' },
								{ num: '24/7', label: 'Support Available' },
								{ num: '7+', label: 'Years Experience' },
							].map((stat, i) => (
								<div
									key={i}
									className="text-center">
									<div className="text-4xl font-bold mb-2">{stat.num}</div>
									<div className="text-sm opacity-80">{stat.label}</div>
								</div>
							))}
						</div>

						<div className="flex flex-col sm:flex-row gap-6 justify-center">
							<Link href="/appointment">
								<button className="bg-white text-[#cca6c8] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all">
									Schedule Free Consultation
								</button>
							</Link>
							<Link href="/contact-us">
								<button className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold hover:bg-white hover:text-[#cca6c8] transition-all">
									Contact Our Team
								</button>
							</Link>
						</div>
					</AnimatedWrapper>
				</div>
			</section>

			<div className="flex justify-center py-8 bg-gray-50">
				{/* <Link href="/services">
					<button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold border border-blue-200 hover:bg-blue-600 hover:text-white transition-all">
						← Back to Services
					</button>
				</Link> */}
				<BackButton />
			</div>
		</>
	);
};

export default LiveInCarePage;
