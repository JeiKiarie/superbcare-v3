'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaSearch,
	FaFacebook,
} from 'react-icons/fa'; // Import FontAwesome Icons
import Image from 'next/image';
import Logo from '/public/SuperbLogo.webp';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="bg-gradient-to-r from-white to-[#cca6c8] text-blue-800 shadow-lg sticky top-0 z-50">
			<div className="container flex justify-between items-center py-2 px-1">
				{/* Logo */}
				<div>
					<Link href="/">
						<Image
							className="hover:opacity-50"
							width={100}
							height={100}
							alt="logo"
							src={Logo}></Image>
						{/* <span className="bg-white text-blue-700 px-2 py-1 rounded-full">
							Care
						</span>{' '}
						Services */}
					</Link>
				</div>

				{/* Desktop Navigation */}
				<div className="hidden lg:flex space-x-8 items-center">
					<Link
						className="text-lg font-medium hover:opacity-50"
						href="/">
						Home
					</Link>
					<Link
						className="text-lg font-medium hover:opacity-50"
						href="/services">
						Services
					</Link>
					<Link
						className="text-lg font-medium hover:opacity-50"
						href="/about">
						About Us
					</Link>
					<Link
						className="text-lg font-medium hover:opacity-50"
						href="/contact-us">
						Contact Us
					</Link>
					<Link
						className="bg-white text-blue-800 font-semibold py-2 px-4 rounded-lg hover:bg-blue-100"
						href="/appointment">
						Book Appointment
					</Link>
				</div>

				{/* Social Media Icons */}
				<div className="hidden md:flex space-x-4 items-center">
					<Link
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-gray-300">
						<FaFacebook />
					</Link>
					<Link
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-gray-300">
						<FaTwitter />
					</Link>
					<Link
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-gray-300">
						<FaInstagram />
					</Link>
					{/* <Link
						href="/search"
						className="hover:text-gray-300">
						<FaSearch />
					</Link> */}
				</div>

				{/* Mobile Hamburger Menu Button */}
				<div className="lg:hidden">
					<button
						onClick={toggleMenu}
						className="focus:outline-none text-white">
						{isOpen ? (
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="lg:hidden bg-blue-700 text-white shadow-lg">
					<nav className="space-y-4 p-6">
						<Link
							className="block text-lg font-medium hover:text-gray-300"
							href="/">
							Home
						</Link>
						<Link
							className="block text-lg font-medium hover:text-gray-300"
							href="/services">
							Services
						</Link>
						<Link
							className="block text-lg font-medium hover:text-gray-300"
							href="/about-us">
							About Us
						</Link>
						<Link
							className="block text-lg font-medium hover:text-gray-300"
							href="/contact-us">
							Contact Us
						</Link>
						<Link
							className="block bg-white text-blue-700 font-semibold py-2 px-4 rounded-lg text-center hover:bg-blue-100"
							href="/appointment">
							Book Appointment
						</Link>
					</nav>
				</div>
			)}
		</header>
	);
}

// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';

// export default function Header() {
// 	const [isOpen, setIsOpen] = useState(false);

// 	const toggleMenu = () => {
// 		setIsOpen(!isOpen);
// 	};

// 	return (
// 		<header className="bg-white shadow-md sticky top-0 z-50">
// 			<nav className="container mx-auto flex justify-between items-center p-6">
// 				{/* Logo */}
// 				<div>
// 					<Link
// 						className="text-2xl font-bold text-blue-700"
// 						href="/">
// 						Care Services
// 					</Link>
// 				</div>

// 				{/* Desktop Navigation */}
// 				<div className="hidden md:flex space-x-6">
// 					<Link
// 						className="text-gray-700 hover:text-blue-700"
// 						href="/">
// 						Home
// 					</Link>
// 					<Link
// 						className="text-gray-700 hover:text-blue-700"
// 						href="/about-us">
// 						About Us
// 					</Link>
// 					<Link
// 						className="text-gray-700 hover:text-blue-700"
// 						href="/services">
// 						Services
// 					</Link>
// 					<Link
// 						className="text-gray-700 hover:text-blue-700"
// 						href="/appointment">
// 						Book Appointment
// 					</Link>
// 					<Link
// 						className="text-gray-700 hover:text-blue-700"
// 						href="/contact-us">
// 						Contact Us
// 					</Link>
// 				</div>

// 				{/* Mobile Hamburger Menu Button */}
// 				<div className="md:hidden">
// 					<button
// 						onClick={toggleMenu}
// 						className="focus:outline-none text-gray-700">
// 						{isOpen ? (
// 							<svg
// 								className="w-6 h-6"
// 								fill="none"
// 								stroke="currentColor"
// 								viewBox="0 0 24 24"
// 								xmlns="http://www.w3.org/2000/svg">
// 								<path
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 									strokeWidth="2"
// 									d="M6 18L18 6M6 6l12 12"
// 								/>
// 							</svg>
// 						) : (
// 							<svg
// 								className="w-6 h-6"
// 								fill="none"
// 								stroke="currentColor"
// 								viewBox="0 0 24 24"
// 								xmlns="http://www.w3.org/2000/svg">
// 								<path
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 									strokeWidth="2"
// 									d="M4 6h16M4 12h16m-7 6h7"
// 								/>
// 							</svg>
// 						)}
// 					</button>
// 				</div>
// 			</nav>

// 			{/* Mobile Menu */}
// 			{isOpen && (
// 				<div className="md:hidden bg-white shadow-lg">
// 					<nav className="space-y-4 p-6">
// 						<Link
// 							className="block text-gray-700 hover:text-blue-700"
// 							href="/">
// 							Home
// 						</Link>
// 						<Link
// 							className="block text-gray-700 hover:text-blue-700"
// 							href="/about-us">
// 							About Us
// 						</Link>
// 						<Link
// 							className="block text-gray-700 hover:text-blue-700"
// 							href="/services">
// 							Services
// 						</Link>
// 						<Link
// 							className="block text-gray-700 hover:text-blue-700"
// 							href="/appointment">
// 							Book Appointment
// 						</Link>
// 						<Link
// 							className="block text-gray-700 hover:text-blue-700"
// 							href="/contact-us">
// 							Contact Us
// 						</Link>
// 					</nav>
// 				</div>
// 			)}
// 		</header>
// 	);
// }

// 'use client';
// import Link from 'next/link';
// import { useState } from 'react';

// const Header = () => {
// 	const [isOpen, setIsOpen] = useState(false);

// 	const toggleMenu = () => setIsOpen(!isOpen);

// 	return (
// 		<header className="bg-blue-700 text-white py-4 px-6">
// 			<div className="container mx-auto flex justify-between items-center">
// 				<Link
// 					href="/"
// 					className="text-2xl font-bold">
// 					Elderly Care UK
// 				</Link>
// 				<nav className="hidden md:flex space-x-6">
// 					<Link href="/about-us">About Us</Link>
// 					<Link href="/services">Services</Link>
// 					<Link href="/testimonials">Testimonials</Link>
// 					<Link href="/contact-us">Contact Us</Link>
// 					<Link href="/faqs">FAQs</Link>
// 				</nav>
// 				<button
// 					onClick={toggleMenu}
// 					className="md:hidden">
// 					<svg
// 						className="w-6 h-6"
// 						fill="none"
// 						stroke="currentColor"
// 						viewBox="0 0 24 24">
// 						<path
// 							strokeLinecap="round"
// 							strokeLinejoin="round"
// 							strokeWidth="2"
// 							d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
// 						/>
// 					</svg>
// 				</button>
// 			</div>
// 		</header>
// 	);
// };

// export default Header;
