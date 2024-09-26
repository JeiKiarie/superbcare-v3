'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const RespiteCarePage = () => {
	return (
		<div className="container mx-auto p-6 space-y-12">
			{/* Hero Section */}
			<section
				className="relative h-96 bg-cover bg-center text-white"
				style={{ backgroundImage: 'url(/images/respite-care-bg.jpg)' }}>
				<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<motion.h1
						className="text-5xl font-bold"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						Respite Care Services
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
					Give Yourself a Break, While We Care for Your Loved One
				</motion.h2>
				<motion.p
					className="text-lg text-gray-600 leading-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					We understand that being a full-time caregiver can be emotionally and
					physically demanding. Our respite care services allow you to take a
					much-needed break while ensuring your loved ones receive the care they
					need.
				</motion.p>
				<motion.ul
					className="list-disc pl-5 text-gray-600 space-y-3"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}>
					<li>Flexible short-term or long-term respite options</li>
					<li>Compassionate caregivers with personalized care plans</li>
					<li>24/7 availability for emergency or scheduled respite care</li>
					<li>Peace of mind knowing your loved one is in safe hands</li>
				</motion.ul>
			</section>

			{/* Benefits Section */}
			<section className="bg-gray-100 p-6 rounded-lg">
				<motion.h3
					className="text-3xl font-semibold text-blue-600 mb-6 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Why Choose Our Respite Care?
				</motion.h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4">
							Flexible and Reliable Care
						</h4>
						<p className="text-gray-600">
							We offer flexible schedules for respite care, ensuring you can
							take time off when needed, whether it's a few hours, a day, or
							longer.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4">
							Peace of Mind for Families
						</h4>
						<p className="text-gray-600">
							Rest easy knowing your loved one is receiving personalized and
							attentive care from our trained professionals while you take a
							break.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4">
							Short-Term or Long-Term Care
						</h4>
						<p className="text-gray-600">
							Whether you need a few hours to recharge or several days for
							travel, we tailor our services to fit your needs.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4">
							Caregivers You Can Trust
						</h4>
						<p className="text-gray-600">
							Our caregivers are experienced and compassionate, ensuring your
							loved one is safe, comfortable, and well-cared for while you're
							away.
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
							How long can respite care last?
						</h4>
						<p className="text-gray-600">
							Respite care can range from a few hours to several days or weeks,
							depending on your needs. We work closely with families to
							determine the best care schedule.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-4 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}>
						<h4 className="font-semibold text-blue-600 mb-2">
							What services are included in respite care?
						</h4>
						<p className="text-gray-600">
							Our respite care services include personal care, companionship,
							medication management, and daily activity support. We customize
							the care plan based on your loved one's needs.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-4 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}>
						<h4 className="font-semibold text-blue-600 mb-2">
							Is respite care available on short notice?
						</h4>
						<p className="text-gray-600">
							Yes, we offer emergency respite care services to assist families
							in urgent situations. Contact us, and we'll arrange care as
							quickly as possible.
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
					Take a Break with Confidence
				</motion.h2>
				<motion.p
					className="text-lg mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					Contact us today to learn more about how we can support your family
					with professional respite care.
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

export default RespiteCarePage;
