'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const PalliativeCarePage = () => {
	return (
		<div className="container mx-auto p-6 space-y-12">
			{/* Hero Section */}
			<section
				className="relative h-96 bg-cover bg-center text-white"
				style={{ backgroundImage: 'url(/images/palliative-care-bg.jpg)' }}>
				<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<motion.h1
						className="text-5xl font-bold"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						Palliative Care Services
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
					Compassionate Support for Serious Illness
				</motion.h2>
				<motion.p
					className="text-lg text-gray-600 leading-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					Our palliative care services focus on providing relief from the
					symptoms and stress of serious illness. Our goal is to improve quality
					of life for both the patient and the family through comprehensive
					support and expert care.
				</motion.p>
				<motion.ul
					className="list-disc pl-5 text-gray-600 space-y-3"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}>
					<li>Symptom management for comfort and relief</li>
					<li>Emotional and psychological support for patients and families</li>
					<li>Coordination of care with healthcare providers</li>
					<li>Support for end-of-life planning and decisions</li>
				</motion.ul>
			</section>

			{/* Benefits Section */}
			<section className="bg-gray-100 p-6 rounded-lg">
				<motion.h3
					className="text-3xl font-semibold text-blue-600 mb-6 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Why Choose Our Palliative Care?
				</motion.h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4">
							Holistic Approach
						</h4>
						<p className="text-gray-600">
							We focus on the whole person, addressing physical, emotional, and
							spiritual needs to enhance quality of life.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4">
							Expert Care Team
						</h4>
						<p className="text-gray-600">
							Our dedicated team of healthcare professionals includes doctors,
							nurses, and social workers specializing in palliative care.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4">
							Family Support
						</h4>
						<p className="text-gray-600">
							We provide guidance and support for families navigating difficult
							decisions and emotions, ensuring everyone feels supported.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4">
							Care Coordination
						</h4>
						<p className="text-gray-600">
							Our team coordinates with all healthcare providers to ensure
							comprehensive and cohesive care.
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
							What is palliative care?
						</h4>
						<p className="text-gray-600">
							Palliative care is specialized medical care focused on providing
							relief from symptoms and stress of serious illness, enhancing the
							quality of life for patients and their families.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-4 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}>
						<h4 className="font-semibold text-blue-600 mb-2">
							Who can benefit from palliative care?
						</h4>
						<p className="text-gray-600">
							Anyone facing a serious illness can benefit from palliative care,
							regardless of the stage of the illness or treatment options.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-4 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}>
						<h4 className="font-semibold text-blue-600 mb-2">
							How is palliative care different from hospice care?
						</h4>
						<p className="text-gray-600">
							Palliative care can be provided at any stage of illness, while
							hospice care is specifically for individuals who are nearing the
							end of life.
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
					Enhance Comfort and Quality of Life
				</motion.h2>
				<motion.p
					className="text-lg mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					Contact us today to learn more about our palliative care services and
					how we can support you and your loved ones.
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

export default PalliativeCarePage;
