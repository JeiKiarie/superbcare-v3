'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import companionCare from '/public/companion-care.jpg';
import Image from 'next/image';
import { BiCheckCircle } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

const CompanionCarePage = () => {
	const router = useRouter();
	return (
		<>
			{/* Hero Section */}
			<section className="relative h-[50vh] md:h-[76vh] w-full bg-cover bg-center text-white mb-8">
				<div className="absolute inset-0 z-0 overflow-hidden">
					<Image
						src={companionCare}
						alt="Hero Background"
						// layout="fill"
						className="w-full h-full object-cover"
					/>
					{/* <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-30"></div> */}
				</div>
				<div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
					<motion.h1
						className="text-5xl font-bold text-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						Companion Care Services
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
				<motion.div className="div flex flex-col items-center justify-center">
					<motion.ul
						className="list-none pl-5 text-gray-600 space-y-3"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}>
						<div className="flex md:items-center gap-4">
							<div>
								<BiCheckCircle className="inline text-3xl text-[#cca6c8]" />
							</div>
							<li>Regular visits to provide company and conversation</li>
						</div>
						<div className="flex md:items-center gap-4">
							<div>
								<BiCheckCircle className="inline text-3xl text-[#cca6c8]" />
							</div>
							<li>Assistance with hobbies, social activities, and outings</li>
						</div>
						<div className="flex md:items-center gap-4">
							<div>
								<BiCheckCircle className="inline text-3xl text-[#cca6c8]" />
							</div>
							<li>Support with daily routines and meal preparation</li>
						</div>
						<div className="flex md:items-center gap-4">
							<div>
								<BiCheckCircle className="inline text-3xl text-[#cca6c8]" />
							</div>
							<li>Compassionate and friendly caregivers</li>
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
					Why Choose Our Companion Care?
				</motion.h3>
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							Meaningful Companionship
						</h4>
						<p className="text-gray-600 text-justify">
							Companionship is vital for the emotional well-being of elderly
							individuals, especially those living alone. Our companion care
							services focus on providing meaningful social interaction and
							emotional support.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							Prevent Social Isolation
						</h4>
						<p className="text-gray-600 text-justify">
							Our caregivers provide genuine companionship, ensuring your loved
							one enjoys stimulating and enriching social interactions on a
							regular basis.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							Maintain Independence
						</h4>
						<p className="text-gray-600 text-justify">
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
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							Tailored Care Plans
						</h4>
						<p className="text-gray-600 text-justify">
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
								What activities do companion caregivers assist with?
							</h4>
							<p className="text-gray-600">
								Companion caregivers can help with activities such as social
								visits, accompanying clients to appointments, light
								housekeeping, and meal preparation.
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
								Can companion care help improve mental health?
							</h4>
							<p className="text-gray-600 text-justify">
								Yes, regular social interactions and companionship have been
								shown to improve mental health by reducing feelings of
								loneliness and depression.
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
								How do you match caregivers with clients?
							</h4>
							<p className="text-gray-600 text-justify">
								We carefully assess each client&#39;s personality and interests
								to match them with a compatible caregiver who can provide
								meaningful companionship.
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

export default CompanionCarePage;
