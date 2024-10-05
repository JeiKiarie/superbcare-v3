'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
	return (
		<section className="relative bg-[#cca6c8] text-white p-10 rounded-lg mb-10">
			<div className="absolute inset-0 bg-gradient-to-r from-[#cca6c8] via-[#cca6c8]to-[#cca6c8] opacity-90 rounded-lg"></div>
			<motion.div
				className="relative z-10 flex flex-col items-center"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}>
				<h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
					Professional Live-In Care Services.
					<br />
					<span className="text-2xl">
						Bringing Compassionate Care to Your Home.
					</span>
				</h1>
				<p className="text-lg mb-6 max-w-3xl text-justify">
					We specialize in providing compassionate care and assistance to the
					elderly in the comfort of their homes. Experience a higher level of
					care for your loved ones.
				</p>
				<Link
					className="bg-white text-blue-800 py-3 px-8 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-all duration-300"
					href="/services">
					Learn More
				</Link>
			</motion.div>
		</section>
	);
};

export default Hero;
