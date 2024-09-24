import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<header className="bg-blue-700 text-white py-4 px-6">
			<div className="container mx-auto flex justify-between items-center">
				<Link
					href="/"
					className="text-2xl font-bold">
					Elderly Care UK
				</Link>
				<nav className="hidden md:flex space-x-6">
					<Link href="/about">About</Link>
					<Link href="/services">Services</Link>
					<Link href="/testimonials">Testimonials</Link>
					<Link href="/contact">Contact</Link>
					<Link href="/faqs">FAQs</Link>
				</nav>
				<button
					onClick={toggleMenu}
					className="md:hidden">
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
						/>
					</svg>
				</button>
			</div>
		</header>
	);
};

export default Header;
