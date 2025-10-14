'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaLinkedin,
	FaPhone,
	FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-12">
			{/* Top Section */}
			<motion.div
				className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				{/* Company Info */}
				<div className="space-y-4">
					<motion.h3
						className="text-2xl font-semibold text-center md:text-left"
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1 }}>
						Superb Care Services Ltd
					</motion.h3>
					<motion.p
						className="text-gray-400 text-center md:text-left"
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.2 }}>
						Providing quality live-in care for the elderly across the UK.
						Compassionate care from experienced professionals.
					</motion.p>
					<motion.div
						className="flex justify-center md:justify-start space-x-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}>
						<Link
							href="https://facebook.com"
							passHref>
							<motion.i
								className="text-2xl text-white hover:text-blue-500 transition"
								aria-label="Facebook">
								<FaFacebook />
							</motion.i>
						</Link>
						<Link
							href="https://twitter.com"
							passHref>
							<motion.i
								className="text-2xl text-white hover:text-blue-400 transition"
								aria-label="Twitter">
								<FaTwitter />
							</motion.i>
						</Link>
						<Link
							href="https://instagram.com"
							passHref>
							<motion.i
								className="text-2xl text-white hover:text-pink-500 transition"
								aria-label="Instagram">
								<FaInstagram />
							</motion.i>
						</Link>
						<Link
							href="https://linkedin.com"
							passHref>
							<motion.i
								className="text-2xl text-white hover:text-blue-700 transition"
								aria-label="LinkedIn">
								<FaLinkedin />
							</motion.i>
						</Link>
					</motion.div>
				</div>

				{/* Quick Links */}
				<div className="space-y-4">
					<motion.h3
						className="text-xl font-semibold text-center md:text-left"
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1 }}>
						Quick Links
					</motion.h3>
					<motion.ul
						className="space-y-2 text-center md:text-left"
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.2 }}>
						<li>
							<Link
								href="/"
								className="hover:text-blue-500 transition">
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/about-us"
								className="hover:text-blue-500 transition">
								About Us
							</Link>
						</li>
						<li>
							<Link
								href="/services"
								className="hover:text-blue-500 transition">
								Services
							</Link>
						</li>
						<li>
							<Link
								href="/contact-us"
								className="hover:text-blue-500 transition">
								Contact Us
							</Link>
						</li>
						<li>
							<Link
								href="/appointment"
								className="hover:text-blue-500 transition">
								Book Appointment
							</Link>
						</li>
					</motion.ul>
				</div>

				{/* Services Links */}
				<div className="space-y-4">
					<motion.h3
						className="text-xl font-semibold text-center md:text-left"
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1 }}>
						Our Services
					</motion.h3>
					<motion.ul
						className="space-y-2 text-center md:text-left"
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.2 }}>
						<li>
							<Link
								href="/services/live-in-care"
								className="hover:text-blue-500 transition">
								Live-In Care
							</Link>
						</li>
						<li>
							<Link
								href="/services/dementia-care"
								className="hover:text-blue-500 transition">
								Dementia Care
							</Link>
						</li>
						<li>
							<Link
								href="/services/respite-care"
								className="hover:text-blue-500 transition">
								Respite Care
							</Link>
						</li>
						<li>
							<Link
								href="/services/palliative-care"
								className="hover:text-blue-500 transition">
								Palliative Care
							</Link>
						</li>
						<li>
							<Link
								href="/services/companion-care"
								className="hover:text-blue-500 transition">
								Companion Care
							</Link>
						</li>
					</motion.ul>
				</div>

				{/* Contact Info */}
				<div className="space-y-4">
					<motion.h3
						className="text-xl font-semibold text-center md:text-left"
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1 }}>
						Contact Us
					</motion.h3>
					<motion.ul
						className="space-y-2 text-center md:text-left flex flex-col items-center md:items-start"
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.2 }}>
						<li className="flex items-center space-x-2">
							<FaPhone className="text-blue-500" />
							<span>+44 7984 885069</span>
						</li>
						<li className="flex items-center space-x-2">
							<FaEnvelope className="text-blue-500" />
							<span>info@superbcareservices.co.uk</span>
						</li>
						{/* <li className="flex items-center space-x-2">
							<FaEnvelope className="text-blue-500" />
							<span>care@liveincare.co.uk</span>
						</li> */}
					</motion.ul>
				</div>
			</motion.div>

			{/* Bottom Section */}
			<motion.div
				className="container mx-auto px-6 mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-center items-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				<p className="text-gray-400">
					© {new Date().getFullYear()} Superb Care Services Ltd. All rights
					reserved.
				</p>
				{/* <ul className="flex space-x-4 mt-4 md:mt-0">
					<li>
						<Link
							href="/terms"
							className="hover:text-blue-500 transition">
							Terms & Conditions
						</Link>
					</li>
					<li>
						<Link
							href="/privacy"
							className="hover:text-blue-500 transition">
							Privacy Policy
						</Link>
					</li>
				</ul> */}
			</motion.div>
		</footer>
	);
};

export default Footer;
