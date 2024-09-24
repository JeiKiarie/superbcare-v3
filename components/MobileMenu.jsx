import { useState } from 'react';
import Link from 'next/link';

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<div
			className={`fixed inset-0 bg-blue-700 text-white transform ${
				isOpen ? 'translate-x-0' : '-translate-x-full'
			} transition-transform duration-300 z-50 md:hidden`}>
			<button
				onClick={toggleMenu}
				className="absolute top-4 right-4">
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
			<nav className="flex flex-col items-center space-y-6 mt-16">
				<Link
					href="/"
					onClick={toggleMenu}>
					Home
				</Link>
				<Link
					href="/about"
					onClick={toggleMenu}>
					About
				</Link>
				<Link
					href="/services"
					onClick={toggleMenu}>
					Services
				</Link>
				<Link
					href="/testimonials"
					onClick={toggleMenu}>
					Testimonials
				</Link>
				<Link
					href="/contact"
					onClick={toggleMenu}>
					Contact
				</Link>
				<Link
					href="/faqs"
					onClick={toggleMenu}>
					FAQs
				</Link>
			</nav>
		</div>
	);
};

export default MobileMenu;
