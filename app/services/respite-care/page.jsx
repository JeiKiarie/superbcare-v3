'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import liveInCare from '/public/live-in-care.jpg';
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
						src={liveInCare}
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
						Live-In Care Services
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
					Personalised Care in the Comfort of Your Home
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
							<li>24/7 support tailored to individual needs</li>
						</div>
						<div className="flex gap-4">
							<div>
								<BiCheckCircle className="inline text-3xl text-[#cca6c8]" />
							</div>
							<li>Companionship to reduce feelings of isolation</li>
						</div>
						<div className="flex gap-4">
							<div>
								<BiCheckCircle className="inline text-3xl text-[#cca6c8]" />
							</div>
							<li>Assistance with personal care and household tasks</li>
						</div>
						<div className="flex gap-4">
							<div>
								<BiCheckCircle className="inline text-3xl text-[#cca6c8]" />
							</div>
							<li>
								Customized care plans to suit each client&#39;s requirements
							</li>
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
					Why Choose Our Live-In Care?
				</motion.h3>
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							Comprehensive Support
						</h4>
						<p className="text-gray-600 text-justify">
							Our caregivers are trained to provide assistance with all aspects
							of daily living, ensuring safety and comfort at all times.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							Peace of Mind
						</h4>
						<p className="text-gray-600 text-justify">
							Family members can rest easy knowing their loved ones are cared
							for by professionals, reducing worry and stress.
						</p>
					</motion.div>

					<motion.div
						className="bg-white p-6 shadow-md rounded-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}>
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							Independence at Home
						</h4>
						<p className="text-gray-600 text-justify">
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
						<h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">
							Tailored Care Plans
						</h4>
						<p className="text-gray-600 text-justify">
							Each care plan is customized to meet the specific needs and
							preferences of the individual, ensuring the best possible care.
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
								What is live-in care?
							</h4>
							<p className="text-gray-600">
								Live-in care involves a caregiver living in the home of the
								individual to provide continuous support and assistance with
								daily activities.
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
								Who needs live-in care?
							</h4>
							<p className="text-gray-600 text-justify">
								Live-in care is ideal for individuals who require constant
								support but wish to maintain their independence and remain in
								their own homes.
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
								How do I choose a caregiver?
							</h4>
							<p className="text-gray-600 text-justify">
								We carefully match caregivers with clients based on their
								specific needs, preferences, and personality to ensure a good
								fit.
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
					Experience Personalised Care at Home
				</motion.h2>
				<motion.p
					className="text-lg mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					Contact us today to learn more about our live-in care services and how
					we can assist you or your loved ones.
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

// 'use client';

// import { motion } from 'framer-motion';
// import Link from 'next/link';

// const RespiteCarePage = () => {
// 	return (
// 		<div className="container mx-auto p-6 space-y-12">
// 			{/* Hero Section */}
// 			<section
// 				className="relative h-96 bg-cover bg-center text-white"
// 				style={{ backgroundImage: 'url(/images/respite-care-bg.jpg)' }}>
// 				<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
// 					<motion.h1
// 						className="text-5xl font-bold"
// 						initial={{ opacity: 0 }}
// 						animate={{ opacity: 1 }}
// 						transition={{ duration: 1 }}>
// 						Respite Care Services
// 					</motion.h1>
// 				</div>
// 			</section>

// 			{/* Detailed Service Section */}
// 			<section className="space-y-6">
// 				<motion.h2
// 					className="text-4xl font-semibold text-gray-800"
// 					initial={{ opacity: 0 }}
// 					animate={{ opacity: 1 }}
// 					transition={{ duration: 1 }}>
// 					Give Yourself a Break, While We Care for Your Loved One
// 				</motion.h2>
// 				<motion.p
// 					className="text-lg text-gray-600 leading-8"
// 					initial={{ opacity: 0 }}
// 					animate={{ opacity: 1 }}
// 					transition={{ delay: 0.2 }}>
// 					We understand that being a full-time caregiver can be emotionally and
// 					physically demanding. Our respite care services allow you to take a
// 					much-needed break while ensuring your loved ones receive the care they
// 					need.
// 				</motion.p>
// 				<motion.ul
// 					className="list-disc pl-5 text-gray-600 space-y-3"
// 					initial={{ opacity: 0 }}
// 					animate={{ opacity: 1 }}
// 					transition={{ delay: 0.3 }}>
// 					<li>Flexible short-term or long-term respite options</li>
// 					<li>Compassionate caregivers with personalized care plans</li>
// 					<li>24/7 availability for emergency or scheduled respite care</li>
// 					<li>Peace of mind knowing your loved one is in safe hands</li>
// 				</motion.ul>
// 			</section>

// 			{/* Benefits Section */}
// 			<section className="bg-gray-100 p-6 rounded-lg">
// 				<motion.h3
// 					className="text-3xl font-semibold text-blue-600 mb-6 text-center"
// 					initial={{ opacity: 0 }}
// 					animate={{ opacity: 1 }}
// 					transition={{ duration: 1 }}>
// 					Why Choose Our Respite Care?
// 				</motion.h3>
// 				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// 					<motion.div
// 						className="bg-white p-6 shadow-md rounded-lg"
// 						initial={{ opacity: 0, y: 20 }}
// 						animate={{ opacity: 1, y: 0 }}
// 						transition={{ delay: 0.2 }}>
// 						<h4 className="text-xl font-semibold text-blue-600 mb-4">
// 							Flexible and Reliable Care
// 						</h4>
// 						<p className="text-gray-600">
// 							We offer flexible schedules for respite care, ensuring you can
// 							take time off when needed, whether it is a few hours, a day, or
// 							longer.
// 						</p>
// 					</motion.div>

// 					<motion.div
// 						className="bg-white p-6 shadow-md rounded-lg"
// 						initial={{ opacity: 0, y: 20 }}
// 						animate={{ opacity: 1, y: 0 }}
// 						transition={{ delay: 0.3 }}>
// 						<h4 className="text-xl font-semibold text-blue-600 mb-4">
// 							Peace of Mind for Families
// 						</h4>
// 						<p className="text-gray-600">
// 							Rest easy knowing your loved one is receiving personalized and
// 							attentive care from our trained professionals while you take a
// 							break.
// 						</p>
// 					</motion.div>

// 					<motion.div
// 						className="bg-white p-6 shadow-md rounded-lg"
// 						initial={{ opacity: 0, y: 20 }}
// 						animate={{ opacity: 1, y: 0 }}
// 						transition={{ delay: 0.4 }}>
// 						<h4 className="text-xl font-semibold text-blue-600 mb-4">
// 							Short-Term or Long-Term Care
// 						</h4>
// 						<p className="text-gray-600">
// 							Whether you need a few hours to recharge or several days for
// 							travel, we tailor our services to fit your needs.
// 						</p>
// 					</motion.div>

// 					<motion.div
// 						className="bg-white p-6 shadow-md rounded-lg"
// 						initial={{ opacity: 0, y: 20 }}
// 						animate={{ opacity: 1, y: 0 }}
// 						transition={{ delay: 0.5 }}>
// 						<h4 className="text-xl font-semibold text-blue-600 mb-4">
// 							Caregivers You Can Trust
// 						</h4>
// 						<p className="text-gray-600">
// 							Our caregivers are experienced and compassionate, ensuring your
// 							loved one is safe, comfortable, and well-cared for while you are
// 							away.
// 						</p>
// 					</motion.div>
// 				</div>
// 			</section>

// 			{/* FAQ Section */}
// 			<section>
// 				<motion.h3
// 					className="text-3xl font-semibold text-gray-800 mb-6 text-center"
// 					initial={{ opacity: 0 }}
// 					animate={{ opacity: 1 }}
// 					transition={{ duration: 1 }}>
// 					Frequently Asked Questions
// 				</motion.h3>
// 				<div className="space-y-4">
// 					<motion.div
// 						className="bg-white p-4 shadow-md rounded-lg"
// 						initial={{ opacity: 0, y: 20 }}
// 						animate={{ opacity: 1, y: 0 }}
// 						transition={{ delay: 0.2 }}>
// 						<h4 className="font-semibold text-blue-600 mb-2">
// 							How long can respite care last?
// 						</h4>
// 						<p className="text-gray-600">
// 							Respite care can range from a few hours to several days or weeks,
// 							depending on your needs. We work closely with families to
// 							determine the best care schedule.
// 						</p>
// 					</motion.div>

// 					<motion.div
// 						className="bg-white p-4 shadow-md rounded-lg"
// 						initial={{ opacity: 0, y: 20 }}
// 						animate={{ opacity: 1, y: 0 }}
// 						transition={{ delay: 0.3 }}>
// 						<h4 className="font-semibold text-blue-600 mb-2">
// 							What services are included in respite care?
// 						</h4>
// 						<p className="text-gray-600">
// 							Our respite care services include personal care, companionship,
// 							medication management, and daily activity support. We customize
// 							the care plan based on your loved one&#39s needs.
// 						</p>
// 					</motion.div>

// 					<motion.div
// 						className="bg-white p-4 shadow-md rounded-lg"
// 						initial={{ opacity: 0, y: 20 }}
// 						animate={{ opacity: 1, y: 0 }}
// 						transition={{ delay: 0.4 }}>
// 						<h4 className="font-semibold text-blue-600 mb-2">
// 							Is respite care available on short notice?
// 						</h4>
// 						<p className="text-gray-600">
// 							Yes, we offer emergency respite care services to assist families
// 							in urgent situations. Contact us, and we will arrange care as
// 							quickly as possible.
// 						</p>
// 					</motion.div>
// 				</div>
// 			</section>

// 			{/* Call to Action Section */}
// 			<section className="text-center py-12 bg-blue-600 text-white rounded-lg">
// 				<motion.h2
// 					className="text-4xl font-bold mb-4"
// 					initial={{ opacity: 0 }}
// 					animate={{ opacity: 1 }}
// 					transition={{ duration: 1 }}>
// 					Take a Break with Confidence
// 				</motion.h2>
// 				<motion.p
// 					className="text-lg mb-8"
// 					initial={{ opacity: 0 }}
// 					animate={{ opacity: 1 }}
// 					transition={{ delay: 0.2 }}>
// 					Contact us today to learn more about how we can support your family
// 					with professional respite care.
// 				</motion.p>
// 				<Link href="/appointment">
// 					<motion.a
// 						className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition"
// 						initial={{ scale: 0.9 }}
// 						animate={{ scale: 1 }}
// 						transition={{ delay: 0.4 }}>
// 						Book an Appointment
// 					</motion.a>
// 				</Link>
// 			</section>
// 		</div>
// 	);
// };

// export default RespiteCarePage;
