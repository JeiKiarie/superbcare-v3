'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = ({
	title,
	subtitle,
	backgroundImage,
	height = 'h-[50vh] md:h-[76vh]',
	titleSize = 'text-5xl',
	className = '',
}) => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
			},
		},
	};

	const bannerVariantsLeft = {
		hidden: { x: '-100%' },
		visible: {
			x: 0,
			transition: {
				duration: 1,
				ease: 'easeOut',
			},
		},
	};

	const bannerVariantsRight = {
		hidden: { x: '100%' },
		visible: {
			x: 0,
			transition: {
				duration: 1,
				ease: 'easeOut',
				delay: 0.5,
			},
		},
	};

	return (
		<section
			className={`relative ${height} w-full text-white overflow-hidden ${className}`}>
			{/* Background Image with Parallax Effect */}
			<div className="absolute inset-0 z-0">
				<motion.div
					initial={{ scale: 1.1 }}
					animate={{ scale: 1 }}
					transition={{ duration: 10, ease: 'linear' }}
					className="h-full w-full">
					<Image
						src={backgroundImage}
						alt="Hero Background"
						className="w-full h-full object-cover"
						fill
						priority
					/>
				</motion.div>
				{/* Modern Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent"></div>
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
			</div>

			{/* Animated Content */}
			<div className="relative z-10 flex items-center justify-center h-full px-4">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="text-center space-y-4">
					{subtitle && (
						<motion.p
							variants={itemVariants}
							className="text-lg md:text-xl text-gray-200 tracking-wide">
							{subtitle}
						</motion.p>
					)}
					<motion.h1
						variants={itemVariants}
						className={`${titleSize} font-bold text-white drop-shadow-2xl`}>
						{title}
					</motion.h1>
				</motion.div>
			</div>

			{/* Animated Banners */}
			<motion.div
				variants={bannerVariantsLeft}
				initial="hidden"
				animate="visible"
				className="absolute top-8 left-8 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
				Compassionate Care
			</motion.div>

			<motion.div
				variants={bannerVariantsRight}
				initial="hidden"
				animate="visible"
				className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
				24/7 Support
			</motion.div>

			<motion.div
				variants={bannerVariantsLeft}
				initial="hidden"
				animate="visible"
				className="absolute bottom-16 left-8 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
				Professional Staff
			</motion.div>

			<motion.div
				variants={bannerVariantsRight}
				initial="hidden"
				animate="visible"
				className="absolute bottom-16 right-8 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
				Quality Services
			</motion.div>
		</section>
	);
};

export default HeroSection;
