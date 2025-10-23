'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from './ui/button';

const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [slideKey, setSlideKey] = useState(0);

	const slickSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		pauseOnHover: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		beforeChange: (oldIndex, newIndex) => {
			setCurrentSlide(newIndex);
			setSlideKey((prev) => prev + 1);
		},
	};

	const slides = [
		{
			title: 'Live-In Care',
			description:
				'Around-the-clock care services to ensure your loved ones receive personalised assistance at home.',
			imageUrl: '/live-in-care1.jpg',
			alt: 'Live-in care services with dedicated caregiver',
			buttonText: 'Learn More',
			buttonLink: '/services/live-in-care',
		},
		{
			title: 'Elderly Care',
			description:
				'Comprehensive elderly care programs focusing on physical, emotional, and social well-being.',
			imageUrl: '/palliative-care.webp',
			alt: 'Compassionate palliative care for seniors',
			buttonText: 'Explore Services',
			buttonLink: '/services/elderly-care',
		},
		{
			title: 'Personalised Care Plans',
			description:
				'Tailor-made care plans that cater to the unique needs of your loved ones.',
			imageUrl: '/image4.jpg',
			alt: 'Personalised care plans for individual needs',
			buttonText: 'Get Started',
			buttonLink: '/appointment',
		},
	];

	return (
		<div className="carousel relative w-full h-[50vh] md:h-[calc(100vh-5rem)] overflow-hidden">
			<Slider {...slickSettings}>
				{slides.map((slide, index) => (
					<div
						key={index}
						className="relative w-full h-[50vh] md:h-[calc(100vh-5rem)]">
						<Image
							src={slide.imageUrl}
							alt={slide.alt}
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center text-white p-6">
							<div>
								<motion.h2
									key={`title-${slideKey}-${index}`}
									className="text-3xl md:text-5xl font-extrabold mb-4 text-center"
									initial={{ opacity: 0, y: -50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.5 }}>
									{slide.title}
								</motion.h2>
								<motion.p
									key={`desc-${slideKey}-${index}`}
									className="text-lg md:text-2xl max-w-2xl mx-auto mb-6"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.7 }}>
									{slide.description}
								</motion.p>
								<motion.div
									key={`btn-${slideKey}-${index}`}
									className="mt-6"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.9 }}>
									<Link href={slide.buttonLink}>
										<Button
											variant="secondary"
											size="lg"
											className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
											{slide.buttonText}
										</Button>
									</Link>
								</motion.div>
							</div>
						</div>
					</div>
				))}
			</Slider>
			<motion.div
				className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white cursor-pointer opacity-70 hover:opacity-100 hidden md:block"
				animate={{ y: [0, 10, 0] }}
				transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
				onClick={() =>
					window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
				}>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-8 h-8">
					<path d="m6 9 6 6 6-6"></path>
				</svg>
			</motion.div>
		</div>
	);
};

export default Carousel;
