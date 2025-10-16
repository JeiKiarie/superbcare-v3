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
				'Around-the-clock care services to ensure your loved ones receive personalized assistance at home.',
			imageUrl: '/live-in-care1.jpg',
			buttonText: 'Learn More',
			buttonLink: '/services/live-in-care',
		},
		{
			title: 'Elderly Care',
			description:
				'Comprehensive elderly care programs focusing on physical, emotional, and social well-being.',
			imageUrl: '/palliative-care.webp',
			buttonText: 'Explore Services',
			buttonLink: '/services/elderly-care',
		},
		{
			title: 'Personalized Care Plans',
			description:
				'Tailor-made care plans that cater to the unique needs of your loved ones.',
			imageUrl: '/image4.jpg',
			buttonText: 'Get Started',
			buttonLink: '/appointment',
		},
	];

	return (
		<div className="carousel relative w-full h-[calc(100vh-5rem)] overflow-hidden">
			<Slider {...slickSettings}>
				{slides.map((slide, index) => (
					<div
						key={index}
						className="relative w-full h-screen">
						<Image
							src={slide.imageUrl}
							alt={slide.alt}
							layout="fill"
							objectFit="cover"
							className="w-full h-full"
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
				className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white cursor-pointer opacity-70 hover:opacity-100"
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

// 'use client';

// import Slider from 'react-slick';

// const Carousel = () => {
// 	const slickSettings = {
// 		dots: true,
// 		infinite: true,
// 		speed: 500,
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		autoplaySpeed: 3000,
// 	};

// 	return (
// 		<Slider {...slickSettings}>
// 			<div>
// 				<div className="bg-white p-6 rounded-lg shadow-lg text-center">
// 					<h3 className="text-2xl font-bold text-blue-600 mb-4">
// 						Live-In Care
// 					</h3>
// 					<p className="text-gray-500">
// 						Around-the-clock care services to ensure that your loved ones
// 						receive personalized assistance at home.
// 					</p>
// 				</div>
// 			</div>
// 			<div>
// 				<div className="bg-white p-6 rounded-lg shadow-lg text-center">
// 					<h3 className="text-2xl font-bold text-blue-600 mb-4">
// 						Elderly Care
// 					</h3>
// 					<p className="text-gray-500">
// 						Comprehensive elderly care programs that focus on physical,
// 						emotional, and social well-being.
// 					</p>
// 				</div>
// 			</div>
// 			<div>
// 				<div className="bg-white p-6 rounded-lg shadow-lg text-center">
// 					<h3 className="text-2xl font-bold text-blue-600 mb-4">
// 						Personalized Care Plans
// 					</h3>
// 					<p className="text-gray-500">
// 						Tailor-made care plans that cater to the unique needs of your loved
// 						ones, ensuring a high quality of life.
// 					</p>
// 				</div>
// 			</div>
// 		</Slider>
// 	);
// };

// export default Carousel;

// 'use client';

// import { useState } from 'react';

// const Carousel = () => {
// 	const slides = [
// 		{ id: 1, image: '/images/care1.jpg', title: 'Live-in Care' },
// 		{ id: 2, image: '/images/care2.jpg', title: 'Personal Care' },
// 		{ id: 3, image: '/images/care3.jpg', title: 'Dementia Care' },
// 	];

// 	const [current, setCurrent] = useState(0);

// 	const nextSlide = () =>
// 		setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
// 	const prevSlide = () =>
// 		setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

// 	return (
// 		<div className="relative w-full h-64">
// 			{slides.map((slide, index) => (
// 				<div
// 					key={slide.id}
// 					className={`absolute w-full h-full transition-opacity duration-500 ${
// 						index === current ? 'opacity-100' : 'opacity-0'
// 					}`}>
// 					<img
// 						src={slide.image}
// 						alt={slide.title}
// 						className="w-full h-full object-cover"
// 					/>
// 					<h2 className="absolute bottom-8 left-8 text-2xl text-white font-bold">
// 						{slide.title}
// 					</h2>
// 				</div>
// 			))}
// 			<button
// 				onClick={prevSlide}
// 				className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
// 				←
// 			</button>
// 			<button
// 				onClick={nextSlide}
// 				className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
// 				→
// 			</button>
// 		</div>
// 	);
// };

// export default Carousel;
