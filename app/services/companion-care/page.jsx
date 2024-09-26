'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const CompanionCarePage = () => {
	return (
		<div className="container mx-auto p-6 space-y-12">
			{/* Hero Section */}
			<section
				className="relative h-96 bg-cover bg-center text-white"
				style={{ backgroundImage: 'url(/images/companion-care-bg.jpg)' }}>
				<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<motion.h1
						className="text-5xl font-bold"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						Companion Care Services
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
					Social and Emotional Support for Your Loved One
				</motion.h2>
				<motion.p
					className="text-lg text-gray-600 leading-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					Companionship is vital for the emotional well-being of elderly
					individuals, especially those living alone. Our companion care
					services focus on providing meaningful social interaction and
					emotional support.
				</motion.p>
				<motion.ul
					className="list-disc pl-5 text-gray-600 space-y-3"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}>
					<li>Regular visits to provide company and conversation</li>
					<li>Assistance with hobbies, social activities, and outings</li>
					<li>Support with daily routines and meal preparation</li>
					<li>Compassionate and friendly caregivers</li>
				</motion.ul>
			</section>

			{/* Benefits Section */}
			<section className="bg-gray-100 p-6 rounded-lg">
				<motion.h3
					className="text-3xl font-semibold text-blue-600 mb-6 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Why Choose Our Companion Care?
				</motion.h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4">
							Meaningful Companionship
						</h4>
						<p className="text-gray-600">
							Our caregivers provide genuine companionship, ensuring your loved
							one enjoys stimulating and enriching social interactions on a
							regular basis.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4">
							Prevent Social Isolation
						</h4>
						<p className="text-gray-600">
							Loneliness can negatively affect health. Our companion care
							services help prevent isolation by keeping your loved one engaged
							and connected.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4">
							Maintain Independence
						</h4>
						<p className="text-gray-600">
							Our caregivers offer support while respecting the independence of
							your loved one, helping them maintain their daily routines and
							hobbies.
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
							Each individual has unique needs, and we tailor our services to
							meet those requirements, ensuring the best possible care
							experience.
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
							What activities do companion caregivers assist with?
						</h4>
						<p className="text-gray-600">
							Companion caregivers can help with activities such as social
							visits, accompanying clients to appointments, light housekeeping,
							and meal preparation.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-4 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}>
						<h4 className="font-semibold text-blue-600 mb-2">
							Can companion care help improve mental health?
						</h4>
						<p className="text-gray-600">
							Yes, regular social interactions and companionship have been shown
							to improve mental health by reducing feelings of loneliness and
							depression.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-4 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}>
						<h4 className="font-semibold text-blue-600 mb-2">
							How do you match caregivers with clients?
						</h4>
						<p className="text-gray-600">
							We carefully assess each client's personality and interests to
							match them with a compatible caregiver who can provide meaningful
							companionship.
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
					Keep Your Loved One Engaged and Happy
				</motion.h2>
				<motion.p
					className="text-lg mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					Contact us today to arrange companion care services and ensure your
					loved one receives the emotional and social support they need.
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

export default CompanionCarePage;
