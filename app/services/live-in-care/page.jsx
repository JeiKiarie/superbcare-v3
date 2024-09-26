'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const LiveInCarePage = () => {
	return (
		<div className="container mx-auto p-6 space-y-12">
			{/* Hero Section */}
			<section
				className="relative h-96 bg-cover bg-center text-white"
				style={{ backgroundImage: 'url(/images/live-in-care-bg.jpg)' }}>
				<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<motion.h1
						className="text-5xl font-bold"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						Live-In Care Services
					</motion.h1>
				</div>
			</section>

			{/* Detailed Service Section */}
			<section className="space-y-6">
				<motion.h2
					className="text-4xl font-semibold text-gray-800"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Personalized Care in the Comfort of Home
				</motion.h2>
				<motion.p
					className="text-lg text-gray-600 leading-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					Our live-in care services provide dedicated support and companionship
					for individuals needing assistance with daily activities. Our trained
					caregivers live in the home, ensuring personalized care around the
					clock.
				</motion.p>
				<motion.ul
					className="list-disc pl-5 text-gray-600 space-y-3"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}>
					<li>24/7 support tailored to individual needs</li>
					<li>Companionship to reduce feelings of isolation</li>
					<li>Assistance with personal care and household tasks</li>
					<li>Customized care plans to suit each client’s requirements</li>
				</motion.ul>
			</section>

			{/* Benefits Section */}
			<section className="bg-gray-100 p-6 rounded-lg">
				<motion.h3
					className="text-3xl font-semibold text-blue-600 mb-6 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Why Choose Our Live-In Care?
				</motion.h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4">
							Comprehensive Support
						</h4>
						<p className="text-gray-600">
							Our caregivers are trained to provide assistance with all aspects
							of daily living, ensuring safety and comfort at all times.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4">
							Peace of Mind
						</h4>
						<p className="text-gray-600">
							Family members can rest easy knowing their loved ones are cared
							for by professionals, reducing worry and stress.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4">
							Independence at Home
						</h4>
						<p className="text-gray-600">
							Our live-in care services promote independence while providing
							necessary support, allowing clients to remain in their familiar
							environment.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4">
							Tailored Care Plans
						</h4>
						<p className="text-gray-600">
							Each care plan is customized to meet the specific needs and
							preferences of the individual, ensuring the best possible care.
						</p>
					</motion.div>
				</div>
			</section>

			{/* FAQ Section */}
			<section>
				<motion.h3
					className="text-3xl font-semibold text-gray-800 mb-6 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Frequently Asked Questions
				</motion.h3>
				<div className="space-y-4">
					<motion.div
						className="bg-white p-4 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<h4 className="font-semibold text-blue-600 mb-2">
							What is live-in care?
						</h4>
						<p className="text-gray-600">
							Live-in care involves a caregiver living in the home of the
							individual to provide continuous support and assistance with daily
							activities.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-4 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}>
						<h4 className="font-semibold text-blue-600 mb-2">
							Who needs live-in care?
						</h4>
						<p className="text-gray-600">
							Live-in care is ideal for individuals who require constant support
							but wish to maintain their independence and remain in their own
							homes.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-4 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}>
						<h4 className="font-semibold text-blue-600 mb-2">
							How do I choose a caregiver?
						</h4>
						<p className="text-gray-600">
							We carefully match caregivers with clients based on their specific
							needs, preferences, and personality to ensure a good fit.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="text-center py-12 bg-blue-600 text-white rounded-lg">
				<motion.h2
					className="text-4xl font-bold mb-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Experience Personalized Care at Home
				</motion.h2>
				<motion.p
					className="text-lg mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					Contact us today to learn more about our live-in care services and how
					we can assist you or your loved ones.
				</motion.p>
				<Link href="/appointment">
					<motion.a
						className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition"
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.4 }}>
						Book an Appointment
					</motion.a>
				</Link>
			</section>
		</div>
	);
};

export default LiveInCarePage;
