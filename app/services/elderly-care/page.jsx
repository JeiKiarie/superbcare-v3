'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ElderlyCarePage = () => {
	return (
		<div className="container mx-auto p-6 space-y-12">
			{/* Hero Section */}
			<section
				className="relative h-96 bg-cover bg-center text-white"
				style={{ backgroundImage: 'url(/images/elderly-care-bg.jpg)' }}>
				<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<motion.h1
						className="text-5xl font-bold"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						Elderly Care Services
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
					Providing Compassionate Care for the Elderly
				</motion.h2>
				<motion.p
					className="text-lg text-gray-600 leading-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					Our elderly care services are designed to provide seniors with the
					support they need to continue living independently at home. From
					assisting with daily tasks to offering companionship, we ensure that
					your loved ones receive the highest level of care.
				</motion.p>
				<motion.ul
					className="list-disc pl-5 text-gray-600 space-y-3"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}>
					<li>Assistance with bathing, dressing, and grooming</li>
					<li>Medication reminders and management</li>
					<li>Meal preparation and nutritional support</li>
					<li>Light housekeeping and laundry</li>
					<li>Companionship and emotional support</li>
					<li>Transportation to appointments</li>
				</motion.ul>
			</section>

			{/* Benefits Section */}
			<section className="bg-gray-100 p-6 rounded-lg">
				<motion.h3
					className="text-3xl font-semibold text-blue-600 mb-6 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Why Choose Our Elderly Care Services?
				</motion.h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4">
							Personalized Care Plans
						</h4>
						<p className="text-gray-600">
							Every client has different needs. We create customized care plans
							to ensure your loved ones receive the exact support they need,
							whether it’s short-term or long-term care.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4">
							Experienced Caregivers
						</h4>
						<p className="text-gray-600">
							Our caregivers are trained professionals with years of experience
							in elderly care. They are dedicated to providing compassionate and
							respectful care for your loved ones.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4">
							24/7 Availability
						</h4>
						<p className="text-gray-600">
							We understand that care needs don’t stop. That’s why we offer 24/7
							availability, ensuring that your loved ones always have someone to
							rely on at any time of the day.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4">
							Trusted and Accredited
						</h4>
						<p className="text-gray-600">
							We are a trusted and accredited care provider with years of
							experience in providing elderly care services. Your family can
							rest assured knowing their loved one is in good hands.
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
							What services are included in elderly care?
						</h4>
						<p className="text-gray-600">
							Our elderly care services include assistance with daily tasks such
							as bathing, dressing, grooming, medication management, and
							companionship, among others. We work with families to customize
							the care plan.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-4 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}>
						<h4 className="font-semibold text-blue-600 mb-2">
							Are your caregivers certified?
						</h4>
						<p className="text-gray-600">
							Yes, all our caregivers are fully trained and certified. We ensure
							they have the necessary skills and experience to provide
							high-quality care for the elderly.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-4 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}>
						<h4 className="font-semibold text-blue-600 mb-2">
							How do we start with your services?
						</h4>
						<p className="text-gray-600">
							Simply contact us to schedule an initial consultation. We’ll
							assess the needs of your loved ones and develop a care plan
							tailored to them.
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
					Ready to Get Started?
				</motion.h2>
				<motion.p
					className="text-lg mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					Contact us today to learn more about our personalized elderly care
					services and how we can support your loved ones.
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

export default ElderlyCarePage;
