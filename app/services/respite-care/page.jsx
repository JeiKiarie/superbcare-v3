'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import respiteCare from '/public/respite-care.jpg';
import Image from 'next/image';
import { BiCheckCircle } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

const RespiteCarePage = () => {
	const router = useRouter();
	return (
		<>
			{/* Hero Section */}
			<section className="relative h-[50vh] md:h-[76vh] w-full bg-cover bg-center text-white mb-8">
				<div className="absolute inset-0 z-0 overflow-hidden">
					<Image
						src={respiteCare}
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
						Respite Care Services
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
					Give Yourself a Break, While We Care for Your Loved One.
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
							<li>Flexible short-term or long-term respite options</li>
						</div>
						<div className="flex gap-4">
							<div>
								<BiCheckCircle className="inline text-3xl text-[#cca6c8]" />
							</div>
							<li>Compassionate caregivers with personalized care plans</li>
						</div>
						<div className="flex gap-4">
							<div>
								<BiCheckCircle className="inline text-3xl text-[#cca6c8]" />
							</div>
							<li>24/7 availability for emergency or scheduled respite care</li>
						</div>
						<div className="flex gap-4">
							<div>
								<BiCheckCircle className="inline text-3xl text-[#cca6c8]" />
							</div>
							<li>Peace of mind knowing your loved one is in safe hands</li>
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
					Why Choose Our Respite Care?
				</motion.h3>
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							Flexible and Reliable Care
						</h4>
						<p className="text-gray-600 text-justify">
							We offer flexible schedules for respite care, ensuring you can
							take time off when needed, whether it is a few hours, a day, or
							longer.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							Peace of Mind for Families
						</h4>
						<p className="text-gray-600 text-justify">
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
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							Short-Term or Long-Term Care
						</h4>
						<p className="text-gray-600 text-justify">
							Whether you need a few hours to recharge or several days for
							travel, we tailor our services to fit your needs.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							Caregivers You Can Trust
						</h4>
						<p className="text-gray-600 text-justify">
							Our caregivers are experienced and compassionate, ensuring your
							loved one is safe, comfortable, and well-cared for while you are
							away.
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
								How long can respite care last?
							</h4>
							<p className="text-gray-600">
								Respite care can range from a few hours to several days or
								weeks, depending on your needs. We work closely with families to
								determine the best care schedule.
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
								What services are included in respite care?
							</h4>
							<p className="text-gray-600 text-justify">
								Our respite care services include personal care, companionship,
								medication management, and daily activity support. We customize
								the care plan based on your loved one&#39s needs.
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
								Is respite care available on short notice?
							</h4>
							<p className="text-gray-600 text-justify">
								Yes, we offer emergency respite care services to assist families
								in urgent situations. Contact us, and we will arrange care as
								quickly as possible.
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

export default RespiteCarePage;
