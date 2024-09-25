'use client';

import { motion } from 'framer-motion';
import Carousel from '/components/Carousel';
import Hero from '/components/Hero';
import Link from 'next/link';
import Image from 'next/image';
import kiarie from '/public/kiarie.jpg';

export default function Home() {
	return (
		<div className="container mx-auto p-6">
			{/* Carousel Section */}
			<section className="mb-16">
				{/* <motion.div
					className="text-center mb-12"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5 }}>
					<h2 className="text-4xl font-semibold text-gray-800">Our Services</h2>
					<p className="text-lg text-gray-500 mt-4">
						Providing a range of personalized care services tailored to the
						needs of your loved ones.
					</p>
				</motion.div> */}

				<Carousel />
				{/* Hero Section */}
				<Hero />
			</section>

			{/* About Us Section */}
			<section className="bg-gray-100 p-10 rounded-lg">
				<motion.h2
					className="text-4xl font-semibold text-center text-gray-800 mb-10"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					About Us
				</motion.h2>

				<motion.p
					className="text-lg text-center text-gray-600 max-w-3xl mx-auto"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					We are a UK-based company providing live-in care services for the
					elderly. Our mission is to improve the quality of life for elderly
					individuals by offering professional, compassionate, and dedicated
					care in the comfort of their own homes.
				</motion.p>
			</section>

			{/* Why Choose Us Section */}
			<section className="p-10">
				<motion.h2
					className="text-4xl font-semibold text-center text-gray-800 mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Why Choose Us?
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<motion.div
						className="bg-white p-6 rounded-lg shadow-md text-center"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.3, duration: 0.5 }}>
						<h3 className="text-2xl font-bold text-blue-600 mb-4">
							Experienced Caregivers
						</h3>
						<p className="text-gray-500">
							Our team is composed of experienced and certified caregivers who
							are dedicated to providing the best possible care.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 rounded-lg shadow-md text-center"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.5, duration: 0.5 }}>
						<h3 className="text-2xl font-bold text-blue-600 mb-4">
							24/7 Care & Support
						</h3>
						<p className="text-gray-500">
							Our dedicated caregivers provide round-the-clock assistance,
							ensuring safety and comfort at all times. Whether it is help with
							daily activities, medical needs, or companionship, we are here to
							support you every step of the way.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 rounded-lg shadow-md text-center"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.7, duration: 0.5 }}>
						<h3 className="text-2xl font-bold text-blue-600 mb-4">
							Personalized Care Plans
						</h3>
						<p className="text-gray-500">
							We create personalized care plans tailored to the individual needs
							and preferences of your loved ones.
						</p>
					</motion.div>
					<motion.div
						className="bg-white p-6 rounded-lg shadow-md text-center"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.7, duration: 0.5 }}>
						<h3 className="text-2xl font-bold text-blue-600 mb-4">
							Personal Care
						</h3>
						<p className="text-gray-500">
							Our personal care services are designed to assist with daily
							activities, ensuring that clients can maintain their independence
							and dignity. Our caregivers assist with such activities of daily
							living as bathing, dressing, grooming, and mobility.
						</p>
					</motion.div>
					<motion.div
						className="bg-white p-6 rounded-lg shadow-md text-center"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.7, duration: 0.5 }}>
						<h3 className="text-2xl font-bold text-blue-600 mb-4">
							Household Assistance
						</h3>
						<p className="text-gray-500">
							We take care of household chores to create a clean, safe, and
							comfortable living environment, ie, light housekeeping, laundry,
							meal preparation, and grocery shopping.
						</p>
					</motion.div>
					<motion.div
						className="bg-white p-6 rounded-lg shadow-md text-center"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.7, duration: 0.5 }}>
						<h3 className="text-2xl font-bold text-blue-600 mb-4">
							Companionship
						</h3>
						<p className="text-gray-500">
							We provide companionship to combat loneliness and enhance quality
							of life. Social interaction, emotional support, accompaniment to
							appointments, and help in engaging in hobbies are some of the
							aspects of companionship that our carers are trained to give.
						</p>
					</motion.div>
					<motion.div
						className="bg-white p-6 rounded-lg shadow-md text-center"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.7, duration: 0.5 }}>
						<h3 className="text-2xl font-bold text-blue-600 mb-4">
							Specialised Care
						</h3>
						<p className="text-gray-500">
							We offer specialised care for those with specific health
							conditions or recovery needs including Dementia and
							Alzheimer&#39;s care, post-surgery and rehabilitation support, as
							well as palliative and end-of-life care.
						</p>
					</motion.div>
					<motion.div
						className="bg-white p-6 rounded-lg shadow-md text-center"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.7, duration: 0.5 }}>
						<h3 className="text-2xl font-bold text-blue-600 mb-4">
							Emergency Response
						</h3>
						<p className="text-gray-500">
							Trained in emergency procedures, our caregivers can quickly and
							effectively respond to all unexpected situations.
						</p>
					</motion.div>
					<motion.div
						className="bg-white p-6 rounded-lg shadow-md text-center"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.7, duration: 0.5 }}>
						<h3 className="text-2xl font-bold text-blue-600 mb-4">
							Assisted Living
						</h3>
						<p className="text-gray-500">
							Our assisted living communities are carefully designed to promote
							independence and well-being while offering personalized assistance
							with daily tasks.
						</p>
					</motion.div>
					<motion.div
						className="bg-white p-6 rounded-lg shadow-md text-center"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.7, duration: 0.5 }}>
						<h3 className="text-2xl font-bold text-blue-600 mb-4">
							Memory Care
						</h3>
						<p className="text-gray-500">
							Our memory care program provides a safe and secure environment
							where residents receive specialized care tailored to their
							cognitive needs.
						</p>
					</motion.div>
					<motion.div
						className="bg-white p-6 rounded-lg shadow-md text-center"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.7, duration: 0.5 }}>
						<h3 className="text-2xl font-bold text-blue-600 mb-4">
							Respite Care
						</h3>
						<p className="text-gray-500">
							Our respite care services offer temporary relief for caregivers
							while ensuring that their loved ones receive the highest standard
							of care in a welcoming and supportive setting.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Team Section */}
			<section className="bg-gray-100 p-10 rounded-lg">
				<motion.h2
					className="text-4xl font-semibold text-center text-gray-800 mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Meet Our Team
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Sample Team Member */}
					<motion.div
						className="bg-white p-6 rounded-lg shadow-md text-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}>
						<Image
							width={200}
							height={200}
							src={kiarie}
							alt="Team Member"
							className="w-64 h-64 mx-auto rounded-full mb-4"
						/>
						<h3 className="text-xl font-semibold text-blue-600">James</h3>
						<p className="text-gray-500">Lead Caregiver</p>
					</motion.div>

					{/* Add more team members as necessary */}
					<motion.div
						className="bg-white p-6 rounded-lg shadow-md text-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}>
						<Image
							width={200}
							height={200}
							src={kiarie}
							alt="Team Member"
							className="w-64 h-64 mx-auto rounded-full mb-4"
						/>
						<h3 className="text-xl font-semibold text-blue-600">Ken</h3>
						<p className="text-gray-500">Registered Nurse</p>
					</motion.div>
					<motion.div
						className="bg-white p-6 rounded-lg shadow-md text-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}>
						<Image
							width={200}
							height={200}
							src={kiarie}
							alt="Team Member"
							className="w-64 h-64 mx-auto rounded-full mb-4"
						/>
						<h3 className="text-xl font-semibold text-blue-600">Mark</h3>
						<p className="text-gray-500">Registered Nurse</p>
					</motion.div>

					{/* Additional Team Members */}
				</div>
			</section>

			{/* Call to Action / Contact Section */}
			<section className="p-10 text-center bg-blue-600 text-white rounded-lg">
				<motion.h2
					className="text-4xl font-bold mb-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Ready to Get Started?
				</motion.h2>
				<motion.p
					className="text-lg mb-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					Contact us today to learn more about our live-in care services and how
					we can help you.
				</motion.p>
				<motion.a
					href="/appointment"
					className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-all duration-300"
					initial={{ scale: 0.8 }}
					animate={{ scale: 1 }}
					transition={{ delay: 0.4 }}>
					Book an Appointment
				</motion.a>
			</section>

			{/* Testimonials Section */}
			<section className="bg-gray-100 p-10 rounded-lg">
				<motion.h2
					className="text-4xl font-semibold text-center text-gray-800 mb-10"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					What Our Clients Say
				</motion.h2>

				<div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
					<motion.div
						className="bg-white p-6 rounded-lg shadow-md max-w-md"
						whileHover={{ scale: 1.05 }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}>
						<p className="text-gray-600 mb-4">
							&#34;The caregivers were professional and compassionate. They
							helped my mother feel at ease and comfortable in her home.&#34;
						</p>
						<h4 className="text-lg font-bold text-blue-600">- Mark</h4>
					</motion.div>

					<motion.div
						className="bg-white p-6 rounded-lg shadow-md max-w-md"
						whileHover={{ scale: 1.05 }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6 }}>
						<p className="text-gray-600 mb-4">
							&#34;We received personalized care plans that perfectly matched
							our needs. Highly recommended!&#34;
						</p>
						<h4 className="text-lg font-bold text-blue-600">- John</h4>
					</motion.div>
				</div>
			</section>
		</div>
	);
}

// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import Slider from 'react-slick';

// export default function Home() {
// 	// Slick Carousel settings
// 	const slickSettings = {
// 		dots: true,
// 		infinite: true,
// 		speed: 500,
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		autoplaySpeed: 3000,
// 	};

// 	return (
// 		<div className="container mx-auto p-6">
// 			{/* Hero Section */}
// 			<section className="relative bg-blue-600 text-white p-10 rounded-lg mb-10">
// 				<div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 opacity-90 rounded-lg"></div>
// 				<motion.div
// 					className="relative z-10 flex flex-col items-center"
// 					initial={{ opacity: 0, y: -50 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 1 }}>
// 					<h1 className="text-5xl font-bold mb-4">
// 						Professional Live-In Care Services
// 					</h1>
// 					<p className="text-lg mb-6 max-w-3xl text-center">
// 						We specialize in providing compassionate care and assistance to the
// 						elderly in the comfort of their homes. Experience a higher level of
// 						care for your loved ones.
// 					</p>
// 					<Link
// 						className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-all duration-300"
// 						href="/services">
// 						Learn More
// 					</Link>
// 				</motion.div>
// 			</section>

// 			{/* Carousel Section */}
// 			<section className="mb-16">
// 				<motion.div
// 					className="text-center mb-12"
// 					initial={{ opacity: 0 }}
// 					animate={{ opacity: 1 }}
// 					transition={{ duration: 1.5 }}>
// 					<h2 className="text-4xl font-semibold text-gray-800">Our Services</h2>
// 					<p className="text-lg text-gray-500 mt-4">
// 						Providing a range of personalized care services tailored to the
// 						needs of your loved ones.
// 					</p>
// 				</motion.div>

// 				<div className="slick-carousel-container">
// 					<Slider {...slickSettings}>
// 						<div>
// 							<div className="bg-white p-6 rounded-lg shadow-lg text-center">
// 								<h3 className="text-2xl font-bold text-blue-600 mb-4">
// 									Live-In Care
// 								</h3>
// 								<p className="text-gray-500">
// 									Around-the-clock care services to ensure that your loved ones
// 									receive personalized assistance at home.
// 								</p>
// 							</div>
// 						</div>
// 						<div>
// 							<div className="bg-white p-6 rounded-lg shadow-lg text-center">
// 								<h3 className="text-2xl font-bold text-blue-600 mb-4">
// 									Elderly Care
// 								</h3>
// 								<p className="text-gray-500">
// 									Comprehensive elderly care programs that focus on physical,
// 									emotional, and social well-being.
// 								</p>
// 							</div>
// 						</div>
// 						<div>
// 							<div className="bg-white p-6 rounded-lg shadow-lg text-center">
// 								<h3 className="text-2xl font-bold text-blue-600 mb-4">
// 									Personalized Care Plans
// 								</h3>
// 								<p className="text-gray-500">
// 									Tailor-made care plans that cater to the unique needs of your
// 									loved ones, ensuring a high quality of life.
// 								</p>
// 							</div>
// 						</div>
// 					</Slider>
// 				</div>
// 			</section>

// 			{/* Testimonials Section */}
// 			<section className="bg-gray-100 p-10 rounded-lg">
// 				<motion.h2
// 					className="text-4xl font-semibold text-center text-gray-800 mb-10"
// 					initial={{ opacity: 0 }}
// 					animate={{ opacity: 1 }}
// 					transition={{ duration: 1 }}>
// 					What Our Clients Say
// 				</motion.h2>

// 				<div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
// 					{/* Testimonial 1 */}
// 					<motion.div
// 						className="bg-white p-6 rounded-lg shadow-md max-w-md"
// 						whileHover={{ scale: 1.05 }}
// 						initial={{ opacity: 0 }}
// 						animate={{ opacity: 1 }}
// 						transition={{ delay: 0.3 }}>
// 						<p className="text-gray-600 mb-4">
// 							"The caregivers were professional and compassionate. They helped
// 							my mother feel at ease and comfortable in her home."
// 						</p>
// 						<h4 className="text-lg font-bold text-blue-600">- Jane Doe</h4>
// 					</motion.div>

// 					{/* Testimonial 2 */}
// 					<motion.div
// 						className="bg-white p-6 rounded-lg shadow-md max-w-md"
// 						whileHover={{ scale: 1.05 }}
// 						initial={{ opacity: 0 }}
// 						animate={{ opacity: 1 }}
// 						transition={{ delay: 0.6 }}>
// 						<p className="text-gray-600 mb-4">
// 							"We received personalized care plans that perfectly matched our
// 							needs. Highly recommended!"
// 						</p>
// 						<h4 className="text-lg font-bold text-blue-600">- John Smith</h4>
// 					</motion.div>
// 				</div>
// 			</section>

// 			{/* Call to Action */}
// 			<section className="bg-blue-700 text-white p-10 rounded-lg mt-16 flex justify-between items-center">
// 				<motion.div
// 					initial={{ opacity: 0, x: -50 }}
// 					animate={{ opacity: 1, x: 0 }}
// 					transition={{ duration: 1 }}>
// 					<h2 className="text-3xl font-bold">Book an Appointment Today</h2>
// 					<p className="mt-4">
// 						Get in touch with us to schedule a consultation and discuss your
// 						care needs.
// 					</p>
// 				</motion.div>
// 				<motion.div
// 					initial={{ opacity: 0, scale: 0.8 }}
// 					animate={{ opacity: 1, scale: 1 }}
// 					transition={{ duration: 1.2 }}>
// 					<Link
// 						className="bg-white text-blue-700 py-3 px-8 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
// 						href="/appointment">
// 						Book Now
// 					</Link>
// 				</motion.div>
// 			</section>
// 		</div>
// 	);
// }

// import Carousel from '/components/Carousel';

// export default function HomePage() {
// 	return (
// 		<div className="min-h-screen">
// 			<section className="bg-blue-700 text-white py-16 text-center">
// 				<h1 className="text-5xl font-bold mb-4">
// 					Professional Live-in Care Services
// 				</h1>
// 				<p className="text-lg">
// 					Supporting elderly people in the comfort of their own homes across the
// 					UK.
// 				</p>
// 			</section>

// 			<section className="container mx-auto py-16 px-6">
// 				<h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
// 					Our Services
// 				</h2>
// 				<Carousel />
// 			</section>
// 		</div>
// 	);
// }
