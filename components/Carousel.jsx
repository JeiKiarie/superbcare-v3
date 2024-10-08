'use client';

import Slider from 'react-slick';
import Image from 'next/image'; // Optional: For optimized images in Next.js
import image1 from '../public/live-in-care1.jpg';
import image3 from '../public/palliative-care.webp';
import image4 from '../public/image4.jpg';
import { motion } from 'framer-motion';
console.log(image1);
const Carousel = () => {
	const slickSettings = {
		dots: true,

		infinite: true,
		speed: 500,
		pauseOnHover: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	const slides = [
		{
			title: 'Live-In Care',
			description:
				'Around-the-clock care services to ensure your loved ones receive personalized assistance at home.',
			imageUrl: image1, // Replace with actual image paths
		},
		{
			title: 'Elderly Care',
			description:
				'Comprehensive elderly care programs focusing on physical, emotional, and social well-being.',
			imageUrl: image3, // Replace with actual image paths
		},
		{
			title: 'Personalized Care Plans',
			description:
				'Tailor-made care plans that cater to the unique needs of your loved ones.',
			imageUrl: image4, // Replace with actual image paths
		},
	];

	return (
		<div className="carousel relative w-full overflow-hidden">
			<Slider {...slickSettings}>
				{slides.map((slide, index) => (
					<div
						key={index}
						className="relative w-full h-[calc(100vh-25rem)] md:h-[calc(100vh-10rem)]">
						<Image
							src={slide.imageUrl}
							alt={slide.alt}
							layout="fill"
							objectFit="cover"
							className="w-full h-full"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-justify text-white p-6">
							<div>
								<motion.h2
									className="text-3xl md:text-5xl font-extrabold mb-4 text-center"
									initial={{ opacity: 0, y: -50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8 }}>
									{slide.title}
								</motion.h2>
								<motion.p
									className="text-lg md:text-2xl"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8 }}>
									{slide.description}
								</motion.p>
							</div>
						</div>
					</div>
				))}
			</Slider>
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
