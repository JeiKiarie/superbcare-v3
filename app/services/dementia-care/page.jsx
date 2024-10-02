'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import dementiaCare from '/public/dementia-care1.jpg';
import Image from 'next/image';
import { BiCheckCircle } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

const DementiaCarePage = () => {
	const router = useRouter();
	return (
		<>
			{/* Hero Section */}
			<section className="relative h-[50vh] md:h-[76vh] w-full bg-cover bg-center text-white mb-8">
				<div className="absolute inset-0 z-0 overflow-hidden">
					<Image
						src={dementiaCare}
						alt="Hero Background"
						// layout="fill"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-40"></div>
				</div>
				<div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
					<motion.h1
						className="text-5xl font-bold text-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						Dementia Care Services
					</motion.h1>
				</div>
			</section>

			{/* Detailed Service Section */}
			<section className="container mx-auto space-y-6 mb-4 px-4">
				<motion.h2
					className="text-4xl font-semibold text-blue-800 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Supporting Loved Ones with Dementia
				</motion.h2>
				<motion.p
					className="text-lg text-gray-600 leading-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					Caring for individuals with dementia requires a special level of
					understanding, compassion, and skill. Our dementia care services are
					designed to ensure that your loved ones are treated with the utmost
					respect and provided with the highest level of care.
				</motion.p>
				<motion.div className="div flex flex-col items-center justify-center">
					<motion.ul
						className="list-none pl-5 text-gray-600 space-y-3"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}>
						<div className="flex gap-4">
							<div>
								<BiCheckCircle className="inline text-3xl text-[#cca6c8]" />
							</div>
							<li>Specialized dementia care planning and monitoring</li>
						</div>
						<div className="flex gap-4">
							<div>
								<BiCheckCircle className="inline text-3xl text-[#cca6c8]" />
							</div>
							<li>Memory assistance and cognitive stimulation</li>
						</div>
						<div className="flex gap-4">
							<div>
								<BiCheckCircle className="inline text-3xl text-[#cca6c8]" />
							</div>
							<li>Compassionate companionship</li>
						</div>
						<div className="flex gap-4">
							<div>
								<BiCheckCircle className="inline text-3xl text-[#cca6c8]" />
							</div>
							<li>Safety monitoring and fall prevention</li>
						</div>
						<div className="flex gap-4">
							<div>
								<BiCheckCircle className="inline text-3xl text-[#cca6c8]" />
							</div>
							<li>Routine support and structured activities</li>
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
					Why Choose Our Dementia Care Services?
				</motion.h3>
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							Specialized Dementia Training
						</h4>
						<p className="text-gray-600 text-justify">
							Our caregivers undergo specialized training in dementia care to
							provide the best possible support for those with memory loss,
							confusion, and cognitive challenges.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							Tailored Activities for Cognitive Stimulation
						</h4>
						<p className="text-gray-600 text-justify">
							We provide activities specifically designed to enhance cognitive
							function, keep the mind active, and create a sense of structure
							and routine in a safe, caring environment.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							24/7 Support and Monitoring
						</h4>
						<p className="text-gray-600 text-justify">
							Our team is available around the clock to ensure that individuals
							with dementia are kept safe and secure, providing peace of mind to
							families.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							Compassionate and Respectful Care
						</h4>
						<p className="text-gray-600 text-justify">
							We understand the emotional challenges of dementia and strive to
							create a comforting and respectful environment for those
							experiencing memory loss and cognitive decline.
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
				<div className="container mx-auto space-y-4 p-6">
					<motion.div
						className="bg-white p-4 shadow-md rounded-lg text-justify flex items-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<div className="lg:px-48">
							<h4 className="font-semibold text-blue-600 mb-2">
								What does dementia care involve?
							</h4>
							<p className="text-gray-600">
								Dementia care includes a wide range of services such as memory
								assistance, daily routines, cognitive stimulation activities,
								and safety monitoring. Each care plan is personalized to the
								individual&#39;s needs.
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
								Are your caregivers dementia-trained?
							</h4>
							<p className="text-gray-600 text-justify">
								Yes, our caregivers receive specialized training in dementia
								care, including techniques for managing memory loss, confusion,
								and challenging behaviors.
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
								How do I know when my loved one needs dementia care?
							</h4>
							<p className="text-gray-600 text-justify">
								Signs include memory loss, confusion, difficulty with daily
								tasks, and changes in behavior. We offer consultations to assess
								your loved one&#39s needs and recommend appropriate care
								options.
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="text-center py-12 px-4 bg-[#cca6c8] text-white rounded-lg">
				<motion.h2
					className="text-4xl font-bold mb-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Start Your Journey with Us.
				</motion.h2>
				<motion.p
					className="text-lg mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					Get in touch to learn more about our dementia care services and how we
					can support your family.
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
						Back to Services
					</motion.button>
				</div>
			</section>
		</>
	);
};

export default DementiaCarePage;
