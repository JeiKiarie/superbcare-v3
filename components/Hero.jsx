'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
	return (
		<section className="relative bg-blue-600 text-white p-10 rounded-lg mb-10">
			<div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 opacity-90 rounded-lg"></div>
			<motion.div
				className="relative z-10 flex flex-col items-center"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}>
				<h1 className="text-5xl font-bold mb-4">
					Professional Live-In Care Services
				</h1>
				<p className="text-lg mb-6 max-w-3xl text-center">
					We specialize in providing compassionate care and assistance to the
					elderly in the comfort of their homes. Experience a higher level of
					care for your loved ones.
				</p>
				<Link
					className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-all duration-300"
					href="/services">
					Learn More
				</Link>
			</motion.div>
		</section>
	);
};

export default Hero;
