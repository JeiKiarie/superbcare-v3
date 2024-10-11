'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import aboutImg from '/public/about-image.jpg';
import ourStory from '/public/our-story.webp';
import ruthWest from '/public/ruth-west.jpg';
import peter from '/public/Peter.jpg';
import Image from 'next/image';

const AboutPage = () => {
	return (
		// <div className="container mx-auto p-6 space-y-12">
		<>
			{/* Hero Section */}
			<section className="relative h-[50vh] md:h-[76vh] w-full bg-cover bg-center text-white mb-4">
				<div className="absolute inset-0 z-0 overflow-hidden">
					<Image
						src={aboutImg}
						alt="Hero Background"
						// layout="fill"
						className="w-full h-full object-cover"
					/>
					{/* <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-30"></div> */}
				</div>
				<div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
					<motion.h1
						className="text-5xl font-bold"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						About Us
					</motion.h1>
				</div>
			</section>

			{/* Mission Statement Section */}
			<section className="container mx-auto mb-4 space-y-6 px-4">
				<motion.h2
					className="text-4xl font-semibold text-blue-800 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Our Mission
				</motion.h2>
				<motion.p
					className="text-lg text-gray-600 leading-8 text-justify"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					At Supeb Care Services Ltd, our mission is to provide compassionate,
					personalized care that empowers individuals to maintain their
					independence and quality of life at home. We are dedicated to
					supporting our clients and their families by delivering exceptional
					live-in care services with respect, dignity, and professionalism.
				</motion.p>
			</section>

			{/* Our Story Section */}
			<section className="container mx-auto mb-4 bg-gray-100 p-6 rounded-lg">
				<motion.h3
					className="text-3xl font-semibold text-blue-800 mb-6 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Our Story
				</motion.h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<motion.div
						className="text-lg text-gray-600 leading-8 space-y-4 text-justify"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}>
						<p>
							Founded in 2018, Supeb Care Services Ltd was born out of a desire
							to provide an alternative to institutional care for the elderly
							and individuals with disabilities. Our founder, Ruth West, was
							inspired by personal experiences of seeing loved ones struggle to
							find quality, compassionate care in a home setting.
						</p>
						<p>
							We believe that everyone deserves to age or recover with dignity
							and independence in the comfort of their own home. Our live-in
							care services were designed with this in mind, ensuring that each
							client receives tailored, one-on-one support from trained
							caregivers who live with them and assist with daily activities.
						</p>
					</motion.div>

					{/* <motion.div className="h-72 bg-cover bg-center rounded-lg"> */}
					{/* style={{ backgroundImage: 'url(../../public/our-story.webp)' }} */}
					{/* initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }} */}
					<Image
						className="h-[40rem] bg-cover bg-center rounded-lg object-cover"
						width={1000}
						height={1000}
						alt="old man in wheelchair"
						src={ourStory}
					/>
					{/* </motion.div> */}
				</div>
			</section>

			{/* Core Values Section */}
			<section className="container mx-auto mb-4">
				<motion.h3
					className="text-3xl font-semibold text-blue-800 mb-6 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Our Core Values
				</motion.h3>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							Positivity & Optimism
						</h4>
						<p className="text-gray-600 text-justify">
							We believe in the power of positivity and optimism. Our caregivers
							bring warmth, compassion, and a positive attitude to every
							interaction, creating a supportive environment that fosters
							well-being and happiness.
						</p>
					</motion.div>
					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							Compassion
						</h4>
						<p className="text-gray-600 text-justify">
							We prioritize the well-being of our clients, offering care with
							empathy, understanding, and kindness.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							Integrity
						</h4>
						<p className="text-gray-600 text-justify">
							Honesty and transparency are at the core of everything we do. We
							are committed to maintaining the trust of our clients and their
							families.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							Excellence
						</h4>
						<p className="text-gray-600 text-justify">
							We strive for excellence in the care we provide, constantly
							improving our services to meet the evolving needs of our clients.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Our Team Section */}
			<section className="container mx-auto mb-4 bg-gray-100 p-6 rounded-lg">
				<motion.h3
					className="text-3xl font-semibold text-blue-800 mb-6 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Meet Our Team
				</motion.h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<motion.div
						className="bg-white p-6 shadow-md rounded-lg text-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<Image
							width={1000}
							height={1000}
							src={ruthWest}
							alt="CEO"
							className="w-60 h-60 sm:w-72 sm:h-72 rounded-full mx-auto mb-4 object-cover object-top"
						/>
						<h4 className="text-xl font-semibold text-gray-800">Ruth West</h4>
						<p className="text-gray-600">Founder & CEO</p>
					</motion.div>
					<motion.div
						className="bg-white p-6 shadow-md rounded-lg text-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<Image
							width={1000}
							height={1000}
							src={peter}
							alt="Support Worker"
							className="w-60 h-60 sm:w-72 sm:h-72 rounded-full mx-auto mb-4 object-cover object-top"
						/>
						<h4 className="text-xl font-semibold text-gray-800">Peter</h4>
						<p className="text-gray-600">Support Worker</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg text-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}>
						<Image
							width={500}
							height={500}
							src="/images/team-member3.jpg"
							alt="Team Member"
							className="w-32 h-32 rounded-full mx-auto mb-4"
						/>
						<h4 className="text-xl font-semibold text-gray-800">
							Michael Edwards
						</h4>
						<p className="text-gray-600">Care Coordinator</p>
					</motion.div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="text-center py-12 bg-[#cca6c8] text-white rounded-lg px-4">
				<motion.h2
					className="text-4xl font-bold mb-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Join Our Family of Clients
				</motion.h2>
				<motion.p
					className="text-lg mb-8 text-justify xl:text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					Ready to experience personalized, compassionate care? Contact us today
					to learn more about our services or schedule an appointment.
				</motion.p>

				<Link href="/appointment">
					<motion.button
						className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition"
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.4 }}>
						Book Appointment
					</motion.button>
				</Link>
			</section>
		</>
		// </div>
	);
};

export default AboutPage;

// export default function AboutPage() {
// 	return (
// 		<div className="min-h-screen bg-gray-100">
// 			<section className="container mx-auto py-16 px-6">
// 				<h1 className="text-4xl font-bold text-blue-700 mb-8">About Us</h1>
// 				<p className="text-gray-700 mb-4">
// 					Superb Care Services Ltd has been a trusted provider of home-based
// 					care for over 15 years.
// 				</p>
// 				<p className="text-gray-700 mb-4">
// 					Our mission is to offer reliable, compassionate care that improves the
// 					quality of life for the elderly, helping them maintain independence
// 					and dignity.
// 				</p>
// 			</section>
// 		</div>
// 	);
// }
