'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const services = [
	{
		title: 'Elderly Care',
		description:
			'Our elderly care services provide personalized support, ensuring the comfort and dignity of your loved ones at home. We offer assistance with daily tasks such as bathing, dressing, medication management, and companionship to improve their overall quality of life.',
		imageUrl: '/images/elderly-care.jpg',
		link: '/services/elderly-care',
	},
	{
		title: 'Dementia Care',
		description:
			'We provide specialized care for individuals with dementia, offering a structured environment and emotional support. Our caregivers are trained to handle the complexities of dementia and ensure a safe, caring space for those affected.',
		imageUrl: '/images/dementia-care.jpg',
		link: '/services/dementia-care',
	},
	{
		title: 'Respite Care',
		description:
			'We offer respite care services to provide temporary relief for primary caregivers. Whether you need support for a few hours, a day, or longer, we are here to help so you can take time off while ensuring your loved one remains in good hands.',
		imageUrl: '/images/respite-care.jpg',
		link: '/services/respite-care',
	},
	{
		title: 'Palliative Care',
		description:
			'Our palliative care services focus on improving the quality of life for individuals facing serious illnesses. We provide comfort, emotional support, and pain management, working closely with medical professionals to ensure compassionate care.',
		imageUrl: '/images/palliative-care.jpg',
		link: '/services/palliative-care',
	},
	{
		title: 'Live-In Care',
		description:
			'Our live-in care services provide around-the-clock care for your loved ones, allowing them to remain in the comfort of their home. We offer personalized care plans tailored to their needs, ensuring they receive the highest level of care at all times.',
		imageUrl: '/images/live-in-care.jpg',
		link: '/services/live-in-care',
	},
];

export default function Services() {
	return (
		<main className="mx-auto space-y-16">
			{/* Hero Section */}
			<section className="text-center py-12 bg-blue-600 text-white rounded-lg mt-2">
				<article className="container mx-auto">
					<motion.h1
						className="text-3xl md:text-5xl font-bold mb-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						Our Comprehensive Care Services
					</motion.h1>
					<motion.p
						className="text-lg mb-8 text-justify w-1/2 mx-auto"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}>
						At Superb Care Services Ltd, we offer a variety of personalized care
						services to meet the needs of your loved ones, ensuring their
						comfort and dignity at all times.
					</motion.p>
					<Link href="/contact">
						<motion.button
							className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-all duration-300"
							initial={{ scale: 0.8 }}
							animate={{ scale: 1 }}
							transition={{ delay: 0.4 }}>
							Contact Us for More Information
						</motion.button>
					</Link>
				</article>
			</section>

			{/* Service Categories */}
			<section>
				<motion.h2
					className="text-4xl font-semibold text-center text-gray-800 mb-12"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Our Service Categories
				</motion.h2>
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={index}
							className="bg-white rounded-lg shadow-md p-6 text-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 * index }}>
							<Image
								width={500}
								height={500}
								src={service.imageUrl}
								alt={service.title}
								className="w-full h-48 object-cover rounded-lg mb-6"
							/>
							<h3 className="text-2xl font-bold text-blue-600 mb-4">
								{service.title}
							</h3>
							<p className="text-gray-500 mb-6">{service.description}</p>
							<Link
								className="text-blue-600 font-semibold hover:underline"
								href={service.link}>
								Learn More &rarr;
							</Link>
						</motion.div>
					))}
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="bg-gray-100 py-16 rounded-lg">
				<motion.h2
					className="text-4xl font-semibold text-center text-gray-800 mb-12"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					What Our Clients Say
				</motion.h2>
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
					<motion.div
						className="bg-white p-8 rounded-lg shadow-md"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.3, duration: 0.5 }}>
						<p className="text-lg text-gray-500 mb-4">
							&#34The caregivers at Superb Care Services Ltd have been a
							blessing to our family. Their attention to detail and compassion
							have made all the difference in our mother&#39s care.&#34
						</p>
						<p className="font-semibold text-blue-600">– John Smith</p>
					</motion.div>

					<motion.div
						className="bg-white p-8 rounded-lg shadow-md"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.5, duration: 0.5 }}>
						<p className="text-lg text-gray-500 mb-4">
							&#34The live-in care service has been exceptional. Knowing that my
							father is being looked after 24/7 gives me peace of mind.&#34
						</p>
						<p className="font-semibold text-blue-600">– Sarah Thompson</p>
					</motion.div>

					<motion.div
						className="bg-white p-8 rounded-lg shadow-md"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.7, duration: 0.5 }}>
						<p className="text-lg text-gray-500 mb-4">
							&#34The team at Superb Care Services Ltd is always professional,
							kind, and caring. They&#39ve made a real difference in our
							lives.&#34
						</p>
						<p className="font-semibold text-blue-600">– Emily Davis</p>
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
					Contact us today to learn more about our personalized care services
					and how we can support your loved ones.
				</motion.p>
				<Link href="/appointment">
					<motion.button
						className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-all duration-300"
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.4 }}>
						Book an Appointment
					</motion.button>
				</Link>
			</section>
		</main>
	);
}
