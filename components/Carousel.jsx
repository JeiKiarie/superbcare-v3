import { useState } from 'react';

const Carousel = () => {
	const slides = [
		{ id: 1, image: '/images/care1.jpg', title: 'Live-in Care' },
		{ id: 2, image: '/images/care2.jpg', title: 'Personal Care' },
		{ id: 3, image: '/images/care3.jpg', title: 'Dementia Care' },
	];

	const [current, setCurrent] = useState(0);

	const nextSlide = () =>
		setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
	const prevSlide = () =>
		setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

	return (
		<div className="relative w-full h-64">
			{slides.map((slide, index) => (
				<div
					key={slide.id}
					className={`absolute w-full h-full transition-opacity duration-500 ${
						index === current ? 'opacity-100' : 'opacity-0'
					}`}>
					<img
						src={slide.image}
						alt={slide.title}
						className="w-full h-full object-cover"
					/>
					<h2 className="absolute bottom-8 left-8 text-2xl text-white font-bold">
						{slide.title}
					</h2>
				</div>
			))}
			<button
				onClick={prevSlide}
				className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
				←
			</button>
			<button
				onClick={nextSlide}
				className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
				→
			</button>
		</div>
	);
};

export default Carousel;
