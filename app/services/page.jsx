import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import {
	Home,
	User,
	Brain,
	Clock,
	Heart,
	UserPlus,
	Star,
	Users,
	Calendar,
	Phone,
	ArrowRight,
	CheckCircle,
	Quote,
	Shield,
} from 'lucide-react';
import AnimatedWrapper from '@/components/AnimatedWrapper';

const services = [
	{
		title: 'Live-In Care',
		shortDesc: '24/7 personalized care in the comfort of home',
		description:
			'Our live-in care services provide around-the-clock care for your loved ones, allowing them to remain in the comfort of their home. We offer personalized care plans tailored to their needs, ensuring they receive the highest level of care at all times.',
		icon: <Home className="w-8 h-8" />,
		imageUrl: '/live-in-care.jpg',
		link: '/services/live-in-care',
		features: ['24/7 Care', 'Personalized Plans', 'Trained Professionals'],
		gradient: 'from-blue-500 to-purple-600',
		delay: 0.1,
		popular: true,
	},
	{
		title: 'Elderly Care',
		shortDesc: 'Comprehensive support for seniors',
		description:
			'Our elderly care services provide personalized support, ensuring the comfort and dignity of your loved ones at home. We offer assistance with daily tasks such as bathing, dressing, medication management, and companionship.',
		icon: <User className="w-8 h-8" />,
		imageUrl: '/elderly-care.jpg',
		link: '/services/elderly-care',
		features: ['Daily Assistance', 'Wellness Check', 'Social Engagement'],
		gradient: 'from-purple-500 to-blue-600',
		delay: 0.2,
	},
	{
		title: 'Dementia Care',
		shortDesc: 'Specialized support for memory care',
		description:
			'We provide specialized care for individuals with dementia, offering a structured environment and emotional support. Our caregivers are trained to handle dementia complexities and ensure safety.',
		icon: <Brain className="w-8 h-8" />,
		imageUrl: '/dementia-care1.jpg',
		link: '/services/dementia-care',
		features: ['Specialized Training', 'Safe Environment', 'Memory Support'],
		gradient: 'from-green-500 to-blue-600',
		delay: 0.3,
	},
	{
		title: 'Respite Care',
		shortDesc: 'Temporary relief for caregivers',
		description:
			'We offer respite care services to provide temporary relief for primary caregivers. Whether you need support for a few hours, a day, or longer, we ensure your loved one remains in good hands.',
		icon: <Clock className="w-8 h-8" />,
		imageUrl: '/respite-care.jpg',
		link: '/services/respite-care',
		features: ['Flexible Duration', 'Temporary Relief', 'Seamless Continuity'],
		gradient: 'from-orange-500 to-purple-600',
		delay: 0.4,
	},
	{
		title: 'Palliative Care',
		shortDesc: 'Comfort-focused end-of-life care',
		description:
			'Our palliative care services focus on improving quality of life for individuals facing serious illnesses. We provide comfort, emotional support, and pain management with medical collaboration.',
		icon: <Heart className="w-8 h-8" />,
		imageUrl: '/palliative-care.jpg',
		link: '/services/palliative-care',
		features: ['Pain Management', 'Emotional Support', 'Medical Collaboration'],
		gradient: 'from-red-500 to-purple-600',
		delay: 0.5,
	},
	{
		title: 'Companion Care',
		shortDesc: 'Meaningful companionship services',
		description:
			'We provide companionship to ensure your loved ones never feel lonely, keeping them engaged and happy. Our companions offer conversation, activities, and emotional support.',
		icon: <UserPlus className="w-8 h-8" />,
		imageUrl: '/companion-care.jpg',
		link: '/services/companion-care',
		features: ['Social Engagement', 'Conversation', 'Mental Stimulation'],
		gradient: 'from-pink-500 to-blue-600',
		delay: 0.6,
	},
];

const testimonials = [
	{
		name: 'John',
		role: 'Family Member',
		content:
			"The caregivers have been a blessing to our family. Their attention to detail and compassion have made all the difference in our mother's care.",
		service: 'Live-In Care',
		rating: 5,
		initials: 'J',
	},
	{
		name: 'Sarah',
		role: 'Daughter',
		content:
			'Knowing that my father is being looked after 24/7 gives me peace of mind. Exceptional professional service from start to finish.',
		service: 'Elderly Care',
		rating: 5,
		initials: 'S',
	},
	{
		name: 'Emily',
		role: 'Wife',
		content:
			"The team is always professional, kind, and caring. They've made a real difference in our lives with their dedication.",
		service: 'Companion Care',
		rating: 5,
		initials: 'E',
	},
];

const whyChooseUs = [
	{
		icon: <Shield className="w-12 h-12" />,
		title: 'Certified Professionals',
		description:
			'All caregivers are fully trained, certified, and background checked for your peace of mind.',
		gradient: 'from-yellow-400 to-orange-500',
	},
	{
		icon: <Shield className="w-12 h-12" />,
		title: 'Quality Assurance',
		description:
			'Regular monitoring and feedback ensure consistently high standards in all our services.',
		gradient: 'from-blue-400 to-blue-600',
	},
	{
		icon: <Users className="w-12 h-12" />,
		title: 'Personalized Approach',
		description:
			'Each service is tailored to individual needs, preferences, and family dynamics.',
		gradient: 'from-purple-400 to-pink-500',
	},
];

const Services = () => {
	return (
		<>
			{/* Hero Section */}
			<HeroSection
				title="Our Comprehensive Care Services"
				subtitle="Compassionate Care, Exceptional Service"
				backgroundImage="/live-in-care.jpg"
			/>

			{/* Our Services Grid */}
			<section className="py-16 bg-white relative overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-[0.02]">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h40v40h-40z'/%3E%3C/g%3E%3C/svg%3E")`,
						}}
					/>
				</div>

				<div className="relative container mx-auto px-6">
					<div className="text-center mb-20">
						<div className="mb-8">
							<span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium rounded-full mb-6">
								🎯 Our Care Services
							</span>
						</div>
						<h3 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-purple-700 bg-clip-text text-transparent mb-6">
							Specialized Care Solutions
						</h3>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Each service is thoughtfully designed to provide the highest level
							of care and support tailored to individual needs and
							circumstances.
						</p>
					</div>

					{/* Services Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
						{services.map((service, index) => (
							<Link
								href={service.link}
								key={index}>
								<AnimatedWrapper
									as="div"
									delay={service.delay}
									className="group">
									<div className="relative bg-white rounded-2xl shadow-lg hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-3 border border-gray-100 overflow-hidden cursor-pointer">
										{/* Popular Badge */}
										{service.popular && (
											<div className="absolute top-4 right-4 z-20">
												<span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
													Popular
												</span>
											</div>
										)}

										{/* Header with Icon and Gradient */}
										<div
											className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>

										{/* Card Content */}
										<div className="p-8">
											{/* Icon and Title */}
											<div className="flex items-center justify-between mb-4">
												<div className="flex items-center space-x-4">
													<div
														className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white shadow-lg transform transition-transform group-hover:scale-110`}>
														{service.icon}
													</div>
													<div>
														<h4 className="text-xl font-bold text-blue-800 group-hover:text-purple-600 transition-colors">
															{service.title}
														</h4>
														<p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
															{service.shortDesc}
														</p>
													</div>
												</div>
											</div>

											{/* Description */}
											<p className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors">
												{service.description}
											</p>

											{/* Features List */}
											<div className="space-y-2 mb-8">
												{service.features.map((feature, featIndex) => (
													<div
														key={featIndex}
														className="flex items-center space-x-3">
														<CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
														<span className="text-sm text-gray-600">
															{feature}
														</span>
													</div>
												))}
											</div>

											{/* CTA Button */}
											<div className="w-full bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-blue-600 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 border border-blue-200 flex items-center justify-center space-x-2 group-hover:border-purple-300 cursor-pointer">
												<span>Learn More</span>
												<ArrowRight className="w-4 h-4 transform transition-transform" />
											</div>
										</div>

										{/* Hover Image Overlay */}
										<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
											<Image
												src={service.imageUrl}
												alt={service.title}
												fill
												className="object-cover"
											/>
											<div className="absolute bottom-4 left-4 right-4 text-white">
												<h4 className="font-bold text-lg mb-2">
													{service.title}
												</h4>
												<div className="flex items-center space-x-2 text-sm">
													<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
													<span>Highly Rated Service</span>
												</div>
											</div>
										</div>
									</div>
								</AnimatedWrapper>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
				<div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-purple-300/10 to-blue-300/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-300/10 to-purple-300/10 rounded-full blur-3xl"></div>

				<div className="relative container mx-auto px-6">
					<AnimatedWrapper
						as="div"
						className="text-center mb-20"
						delay={0.3}>
						<h3 className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent mb-6">
							Why Choose Superb Care Services
						</h3>
						<div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-4"></div>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							The difference between good care and exceptional care lies in our
							commitment to excellence
						</p>
					</AnimatedWrapper>

					{/* Features Grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{whyChooseUs.map((item, index) => (
							<AnimatedWrapper
								as="div"
								key={index}
								delay={0.4 + index * 0.15}
								className="group">
								<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 text-center h-full">
									<div className="flex justify-center mb-6">
										<div
											className={`p-4 rounded-2xl bg-gradient-to-r ${item.gradient} text-white group-hover:scale-110 transition-transform duration-300 transform`}>
											{item.icon}
										</div>
									</div>
									<h4 className="text-xl font-bold text-blue-800 mb-4 group-hover:text-purple-600 transition-colors">
										{item.title}
									</h4>
									<p className="text-gray-700 leading-relaxed">
										{item.description}
									</p>
								</div>
							</AnimatedWrapper>
						))}
					</div>

					{/* Stats Section */}
					<AnimatedWrapper
						as="div"
						className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
						delay={0.8}>
						{[
							{ number: '200+', label: 'Families Served' },
							{ number: '98%', label: 'Satisfaction Rate' },
							{ number: '50+', label: 'Trained Staff' },
							{ number: '6+', label: 'Service Types' },
						].map((stat, index) => (
							<div
								key={index}
								className="text-center group">
								<div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform group-hover:scale-105">
									<div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
										{stat.number}
									</div>
									<div className="text-gray-600 font-medium text-sm group-hover:text-gray-800 transition-colors">
										{stat.label}
									</div>
								</div>
							</div>
						))}
					</AnimatedWrapper>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-16 bg-white relative">
				{/* Background */}
				<div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>

				<div className="relative container mx-auto px-6">
					<AnimatedWrapper
						as="div"
						className="text-center mb-20"
						delay={0.2}>
						<span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium rounded-full mb-6">
							<Quote className="w-4 h-4 inline mr-2" />
							Client Testimonial
						</span>
						<h3 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-purple-700 bg-clip-text text-transparent mb-6">
							What Families Say About Us
						</h3>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Read the heartfelt stories from families who have experienced the
							compassionate care and exceptional service that makes our approach
							truly special.
						</p>
					</AnimatedWrapper>

					{/* Testimonials Grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
						{testimonials.map((testimonial, index) => (
							<AnimatedWrapper
								as="div"
								key={index}
								delay={0.4 + index * 0.15}
								className="group">
								<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 h-full relative overflow-hidden">
									{/* Quote Icon */}
									<div className="absolute top-4 right-4 text-purple-300 group-hover:text-purple-400 transition-colors opacity-50 group-hover:opacity-100">
										<Quote className="w-8 h-8" />
									</div>

									{/* Service Badge */}
									<div className="inline-block px-3 py-1 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 text-xs font-medium rounded-full mb-4 border border-green-200">
										{testimonial.service}
									</div>

									{/* Rating Stars */}
									<div className="flex items-center space-x-1 mb-4">
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star
												key={i}
												className="w-4 h-4 fill-yellow-400 text-yellow-400"
											/>
										))}
									</div>

									{/* Content */}
									<p className="text-gray-700 leading-relaxed mb-6 italic text-justify">
										&quot;{testimonial.content}&quot;
									</p>

									{/* Author */}
									<div className="flex items-center space-x-4">
										<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
											{testimonial.initials}
										</div>
										<div>
											<p className="font-semibold text-blue-800 group-hover:text-purple-600 transition-colors">
												{testimonial.name}
											</p>
											<p className="text-sm text-gray-600">
												{testimonial.role}
											</p>
										</div>
									</div>
								</div>
							</AnimatedWrapper>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="relative py-16 bg-gradient-to-r from-[#cca6c8] via-[#b88cb8] to-[#a976a9] text-white overflow-hidden">
				{/* Background Elements */}
				<div className="absolute inset-0">
					<div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
					<div className="absolute bottom-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
				</div>

				<div className="relative container mx-auto px-6">
					<AnimatedWrapper
						as="div"
						className="max-w-4xl mx-auto text-center"
						delay={0.3}>
						<h3 className="text-5xl font-bold mb-6">
							Ready to Experience Exceptional Care?
						</h3>
						<p className="text-xl leading-relaxed opacity-90 mb-12 max-w-2xl mx-auto">
							Take the first step towards peace of mind. Contact us today for a
							free consultation and personalized care assessment tailored to
							your loved one&apos;s unique needs.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
							<Link href="/appointment">
								<button className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:-translate-y-1 flex items-center space-x-2">
									<Calendar className="w-5 h-5" />
									<span>Book Free Consultation</span>
								</button>
							</Link>

							<Link href="/contact-us">
								<button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center space-x-2">
									<Phone className="w-5 h-5" />
									<span>Get in Touch Today</span>
								</button>
							</Link>
						</div>

						{/* Trust Indicators */}
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
							<div className="flex items-center justify-center space-x-2 opacity-90">
								<CheckCircle className="w-5 h-5 text-green-300" />
								<span className="text-sm">Free Assessment</span>
							</div>
							<div className="flex items-center justify-center space-x-2 opacity-90">
								<CheckCircle className="w-5 h-5 text-green-300" />
								<span className="text-sm">Licensed Professionals</span>
							</div>
							<div className="flex items-center justify-center space-x-2 opacity-90">
								<CheckCircle className="w-5 h-5 text-green-300" />
								<span className="text-sm">24/7 Support Available</span>
							</div>
						</div>
					</AnimatedWrapper>
				</div>
			</section>
		</>
	);
};

export default Services;
