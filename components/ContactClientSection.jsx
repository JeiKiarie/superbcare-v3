'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
	FiPhone,
	FiMail,
	FiMapPin,
	FiClock,
	FiCheckCircle,
	FiArrowRight,
} from 'react-icons/fi';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const ContactClientSection = () => {
	const fadeInUp = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const stagger = {
		animate: { transition: { staggerChildren: 0.1 } },
	};

	return (
		<section className="py-16 bg-gradient-to-br from-gray-50 to-white">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Get in <span className="text-blue-600">Touch</span> with Us
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Whether you have questions about our services, need assistance, or
						want to schedule a consultation, we are here to provide the support
						you need with compassion and expertise.
					</p>
				</motion.div>

				<motion.div
					variants={stagger}
					initial="initial"
					animate="animate"
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
					<motion.div
						variants={fadeInUp}
						className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
						<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
							<FiPhone className="text-2xl text-blue-600" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-4">Phone</h3>
						<a
							href="tel:+447984885069"
							className="text-gray-600 hover:text-blue-600 transition-colors text-lg">
							+44 7984 885069
						</a>
					</motion.div>

					<motion.div
						variants={fadeInUp}
						className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
						<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
							<FiMail className="text-2xl text-green-600" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-4">Email</h3>
						<a
							href="mailto:info@superbcareservices.co.uk"
							className="text-gray-600 hover:text-green-600 transition-colors text-lg break-all">
							info@superbcareservices.co.uk
						</a>
					</motion.div>

					<motion.div
						variants={fadeInUp}
						className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
						<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
							<FiMapPin className="text-2xl text-purple-600" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-4">
							Location
						</h3>
						<p className="text-gray-600 text-lg leading-relaxed">
							Castle Hill House
							<br />
							12 Castle Hill, Windsor
							<br />
							SL4 1PD
						</p>
					</motion.div>

					<motion.div
						variants={fadeInUp}
						className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
						<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
							<FiClock className="text-2xl text-orange-600" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-4">Hours</h3>
						<p className="text-gray-600 text-lg">
							Mon - Fri: 9:00 AM - 5:00 PM
							<br />
							<span className="text-gray-500">Weekend: By appointment</span>
						</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactClientSection;
