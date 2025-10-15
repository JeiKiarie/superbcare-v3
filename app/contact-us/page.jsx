'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';
import ContactForm from '../../components/ContactForm';
import Image from 'next/image';
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

const ContactPage = () => {
	const fadeInUp = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const stagger = {
		animate: { transition: { staggerChildren: 0.1 } },
	};

	return (
		<main>
			{/* Hero Section */}
			<HeroSection
				title="Let's Start a Conversation"
				subtitle="We're here to help you find the perfect care solution"
				backgroundImage="/contact-image.jpg"
				titleSize="text-6xl md:text-7xl"
				className="relative overflow-hidden"
			/>

			{/* Contact Information Section */}
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
							want to schedule a consultation, we're here to provide the support
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
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Phone
							</h3>
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
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Email
							</h3>
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
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Hours
							</h3>
							<p className="text-gray-600 text-lg">
								Mon - Fri: 9:00 AM - 5:00 PM
								<br />
								<span className="text-gray-500">Weekend: By appointment</span>
							</p>
						</motion.div>
					</motion.div>

					{/* Contact Form Section */}
					<section className="py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50">
						<div className="container mx-auto px-4">
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
								className="text-center mb-16">
								<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
									Send Us a <span className="text-blue-600">Message</span>
								</h2>
								<p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
									Ready to take the next step? Fill out the form below and our
									team will get back to you within 24 hours.
								</p>
							</motion.div>

							<ContactForm />
						</div>
					</section>

					{/* Map Section */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="bg-white rounded-2xl shadow-lg overflow-hidden mt-16">
						<div className="h-96 md:h-[450px]">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.665846005358!2d-0.609198124191054!3d51.48264761251231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767ae4a576aaab%3A0x3551638a20b9030a!2sCastle%20Hill%20House!5e0!3m2!1sen!2ske!4v1720967565567!5m2!1sen!2ske"
								width="100%"
								height="100%"
								frameBorder="0"
								allowFullScreen=""
								aria-hidden="false"
								tabIndex="0"
								className="w-full h-full"
							/>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Social Media & CTA Section */}
			<section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold mb-6">Follow Us</h2>
						<p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
							Stay connected and get the latest updates on our services, tips,
							and community stories.
						</p>
					</motion.div>

					<div className="flex justify-center space-x-8 mb-12">
						<motion.a
							href="#"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							whileHover={{ scale: 1.1, rotate: 5 }}
							whileTap={{ scale: 0.95 }}
							className="w-16 h-16 bg-[#1877F2] rounded-full flex items-center justify-center hover:bg-[#1465C0] transition-all duration-300">
							<FaFacebook className="text-2xl text-white" />
						</motion.a>
						<motion.a
							href="#"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							whileHover={{ scale: 1.1, rotate: 5 }}
							whileTap={{ scale: 0.95 }}
							className="w-16 h-16 bg-gradient-to-br from-[#f09433] via-[#bc1888] to-[#405de6] rounded-full flex items-center justify-center hover:opacity-80 transition-all duration-300 p-1">
							<FaInstagram className="text-2xl text-white" />
						</motion.a>
						<motion.a
							href="#"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							whileHover={{ scale: 1.1, rotate: 5 }}
							whileTap={{ scale: 0.95 }}
							className="w-16 h-16 bg-[#1DA1F2] rounded-full flex items-center justify-center hover:bg-[#0d95e8] transition-all duration-300">
							<FaXTwitter className="text-2xl text-white" />
						</motion.a>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="text-center">
						<h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
						<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
							Book a free consultation to discuss your care needs and find the
							perfect solution.
						</p>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							<Link href="/appointment">
								<button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
									<span>Book Your Consultation</span>
									<FiArrowRight className="ml-2" />
									<motion.div
										animate={{ x: [0, 5, 0] }}
										transition={{ duration: 2, repeat: Infinity }}
										className="ml-1">
										<FiCheckCircle className="text-green-300" />
									</motion.div>
								</button>
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</main>
	);
};

export default ContactPage;
