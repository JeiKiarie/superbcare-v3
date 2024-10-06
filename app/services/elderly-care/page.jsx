'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import elderlyCare from '/public/elderly-care.jpg';
import { BiCheckCircle } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

const ElderlyCarePage = () => {
	const router = useRouter();
	return (
		<>
			{/* Hero Section */}
			<section
				className="relative h-[50vh] md:h-[76vh] bg-cover bg-center text-white mb-8"
				// style={{ backgroundImage: 'url(/images/elderly-care-bg.jpg)' }}
			>
				<Image
					src={elderlyCare}
					alt="Hero Background"
					// layout="fill"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
					<motion.h1
						className="text-5xl font-bold text-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						Elderly Care Services
					</motion.h1>
				</div>
			</section>

			{/* Detailed Service Section */}
			<section className="container mx-auto space-y-6 px-4 mb-4">
				<motion.h2
					className="text-4xl font-semibold text-blue-800 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Providing Compassionate Care for the Elderly
				</motion.h2>
				<motion.p
					className="text-lg text-gray-600 leading-8 text-justify"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					Our elderly care services are designed to provide seniors with the
					support they need to continue living independently at home. From
					assisting with daily tasks to offering companionship, we ensure that
					your loved ones receive the highest level of care.
				</motion.p>
				<motion.div className="div flex flex-col justify-between">
					<motion.ul
						className="list-none pl-5 text-gray-600 space-y-3 grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}>
						<div className="flex md:items-center gap-4 mt-3">
							<div>
								<BiCheckCircle className="text-3xl text-[#cca6c8]" />
							</div>
							<li>Assistance with bathing, dressing, and grooming</li>
						</div>
						<div className="flex md:items-center gap-4">
							<div>
								<BiCheckCircle className="text-3xl text-[#cca6c8]" />
							</div>
							<li>Medication reminders and management</li>
						</div>
						<div className="flex md:items-center gap-4">
							<div>
								<BiCheckCircle className="text-3xl text-[#cca6c8]" />
							</div>
							<li>Meal preparation and nutritional support</li>
						</div>
						<div className="flex md:items-center gap-4">
							<div>
								<BiCheckCircle className="text-3xl text-[#cca6c8]" />
							</div>
							<li>Light housekeeping and laundry</li>
						</div>
						<div className="flex md:items-center gap-4">
							<div>
								<BiCheckCircle className="text-3xl text-[#cca6c8]" />
							</div>
							<li>Companionship and emotional support</li>
						</div>
						<div className="flex md:items-center gap-4">
							<div>
								<BiCheckCircle className="text-3xl text-[#cca6c8]" />
							</div>
							<li>Transportation to appointments</li>
						</div>
					</motion.ul>
				</motion.div>
			</section>

			{/* Benefits Section */}
			<section className="bg-gray-100 p-6 rounded-lg">
				<motion.h3
					className="text-3xl font-semibold text-blue-800 mb-6 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Why Choose Our Elderly Care Services?
				</motion.h3>
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							Personalized Care Plans
						</h4>
						<p className="text-gray-600">
							Every client has different needs. We create customized care plans
							to ensure your loved ones receive the exact support they need,
							whether it is short-term or long-term care.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
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
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							24/7 Availability
						</h4>
						<p className="text-gray-600">
							We understand that care needs don&#39;t stop. That is why we offer
							24/7 availability, ensuring that your loved ones always have
							someone to rely on at any time of the day.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
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
					className="text-3xl font-semibold text-blue-800 mb-6 text-center p-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Frequently Asked Questions
				</motion.h3>
				<div className="container p-6 mx-auto space-y-4">
					<motion.div
						className="bg-white p-4 shadow-md rounded-lg text-justify flex items-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<div className="lg:px-48">
							<h4 className="font-semibold text-blue-600 mb-2">
								What services are included in elderly care?
							</h4>
							<p className="text-gray-600">
								Our elderly care services include assistance with daily tasks
								such as bathing, dressing, grooming, medication management, and
								companionship, among others. We work with families to customize
								the care plan.
							</p>
						</div>
					</motion.div>

					<motion.div
						className="bg-white p-4 shadow-md rounded-lg text-justify flex items-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}>
						<div className="lg:px-48">
							<h4 className="font-semibold text-blue-600 mb-2">
								Are your caregivers certified?
							</h4>
							<p className="text-gray-600">
								Yes, all our caregivers are fully trained and certified. We
								ensure they have the necessary skills and experience to provide
								high-quality care for the elderly.
							</p>
						</div>
					</motion.div>

					<motion.div
						className="bg-white p-4 shadow-md rounded-lg text-justify flex items-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}>
						<div className="lg:px-48">
							<h4 className="font-semibold text-blue-600 mb-2">
								How do we start with your services?
							</h4>
							<p className="text-gray-600">
								Simply contact us to schedule an initial consultation. We will
								assess the needs of your loved ones and develop a care plan
								tailored to them.
							</p>
						</div>
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
					Ready to Get Started?
				</motion.h2>
				<motion.p
					className="text-lg mb-8 text-justify lg:text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					Contact us today to learn more about our personalized elderly care
					services and how we can support your loved ones.
				</motion.p>
				<div className="flex flex-col items-center justify-center md:flex-row gap-4">
					<Link href="/appointment">
						<motion.button
							className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition"
							initial={{ scale: 0.9 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.4 }}>
							Book Appointment
						</motion.button>
					</Link>
					<motion.button
						onClick={() => router.back()}
						className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition"
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.4 }}>
						Go Back
					</motion.button>
				</div>
			</section>
		</>
	);
};

export default ElderlyCarePage;
