'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaBars,
	FaPhone,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Logo from '/public/SuperbLogo.webp';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
	SheetClose,
} from '@/components/ui/sheet';

export default function Header() {
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Helper function to check if a link is active (handles trailing slashes and subroutes)
	const isActiveLink = (href) => {
		const normalizedPathname = pathname.replace(/\/$/, '') || '/';
		const normalizedHref = href.replace(/\/$/, '') || '/';

		// Handle exact matches
		if (normalizedPathname === normalizedHref) {
			return true;
		}

		// Handle /services and its subroutes
		if (normalizedHref === '/services') {
			return normalizedPathname.startsWith('/services');
		}

		return false;
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'About Us', href: '/about-us' },
		{ name: 'Services', href: '/services' },
		{ name: 'Contact Us', href: '/contact-us' },
	];

	const socialLinks = [
		{
			icon: FaFacebook,
			href: 'https://facebook.com',
			label: 'Facebook',
			color: '#1877F2',
		},
		{
			icon: FaXTwitter,
			href: 'https://twitter.com',
			label: 'X (Twitter)',
			color: '#000000',
		},
		{
			icon: FaInstagram,
			href: 'https://instagram.com',
			label: 'Instagram',
			color: '#E4405F',
		},
	];

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className={`sticky top-0 z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50'
					: 'bg-white/60 backdrop-blur-sm'
			}`}>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					{/* Logo and Company Name */}
					<motion.div
						className="flex items-center space-x-3"
						whileHover={{ scale: 1.02 }}
						transition={{ type: 'spring', stiffness: 300, damping: 10 }}>
						<Link
							href="/"
							className="flex items-center space-x-3 group">
							<motion.div
								whileHover={{ rotate: 10 }}
								transition={{ type: 'spring', stiffness: 300 }}>
								<Image
									className="transition-opacity duration-300 group-hover:opacity-80"
									width={60}
									height={60}
									alt="Superb Care Services Logo"
									src={Logo}
									style={{
										filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
									}}
								/>
							</motion.div>
							<div className="text-left">
								<h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-tight">
									Superb Care
								</h1>
								<p className="text-xs sm:text-sm text-gray-600 font-medium tracking-wide">
									Services Ltd
								</p>
							</div>
						</Link>
					</motion.div>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center space-x-8">
						{navItems.map((item, index) => (
							<motion.div
								key={item.name}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: index * 0.1 }}>
								<Link
									href={item.href}
									className={`relative font-medium transition-colors duration-300 group ${
										isActiveLink(item.href)
											? 'text-blue-600'
											: 'text-gray-700 hover:text-blue-600'
									}`}>
									{item.name}
									{isActiveLink(item.href) ? (
										<motion.span
											className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-[#cca6c8]"
											layoutId="activeTab"
											transition={{
												type: 'spring',
												stiffness: 300,
												damping: 30,
											}}
										/>
									) : (
										<motion.span
											className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-[#cca6c8] group-hover:w-full transition-all duration-300"
											initial={false}
										/>
									)}
								</Link>
							</motion.div>
						))}
					</nav>

					{/* Desktop Right Section */}
					<div className="hidden lg:flex items-center space-x-6">
						{/* Social Media Icons */}
						<div className="flex items-center space-x-3">
							{socialLinks.map(({ icon: Icon, href, label, color }, index) => (
								<motion.a
									key={label}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className={`transition-colors duration-300 p-2 hover:bg-gray-50 rounded-full`}
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}>
									<Icon
										size={18}
										style={{ color: color }}
									/>
								</motion.a>
							))}
						</div>

						{/* Phone Link */}
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3, delay: 0.9 }}>
							<Button
								variant="outline"
								size="sm"
								asChild
								className="text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300">
								<a
									href="tel:+447984885069"
									className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2">
									<FaPhone
										size={14}
										className="mr-2"
									/>
									Call Now
								</a>
							</Button>
						</motion.div>

						{/* CTA Button */}
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3, delay: 1.0 }}>
							<Link href="/appointment">
								<Button className="bg-gradient-to-r from-blue-600 to-[#cca6c8] hover:from-blue-700 hover:to-[#b895ba] text-white font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
									Book Appointment
								</Button>
							</Link>
						</motion.div>
					</div>

					{/* Mobile Menu */}
					<div className="lg:hidden flex items-center space-x-2">
						{/* Mobile Call Button */}
						<Button
							variant="outline"
							size="sm"
							asChild
							className="text-blue-600 border-blue-200 hover:bg-blue-50 text-xs">
							<a href="tel:+447000000000">
								<FaPhone size={14} />
								<span className="ml-1">Call</span>
							</a>
						</Button>

						{/* Mobile Menu Trigger */}
						<Sheet
							open={isMobileMenuOpen}
							onOpenChange={setIsMobileMenuOpen}>
							<SheetTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="text-gray-700 hover:text-blue-600">
									<FaBars size={24} />
									<span className="sr-only">Toggle menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent
								side="right"
								className="w-[300px] sm:w-[400px]">
								<SheetHeader className="pb-6">
									<Link
										href="/"
										className="flex items-center space-x-3"
										onClick={() => setIsMobileMenuOpen(false)}>
										<Image
											className="transition-opacity duration-300 hover:opacity-80"
											width={40}
											height={40}
											alt="Superb Care Services Logo"
											src={Logo}
											style={{
												filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
											}}
										/>
										<div>
											<h1 className="text-lg font-bold text-blue-600">
												Superb Care
											</h1>
											<p className="text-sm text-gray-600">Services Ltd</p>
										</div>
									</Link>
								</SheetHeader>

								<motion.nav
									className="flex flex-col space-y-6 mt-8"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3, delay: 0.2 }}>
									{navItems.map((item, index) => (
										<motion.div
											key={item.name}
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}>
											<SheetClose asChild>
												<Link
													href={item.href}
													className={`block text-lg font-medium transition-colors duration-300 py-2 px-4 rounded-lg ${
														isActiveLink(item.href)
															? 'text-blue-600 bg-blue-50 font-semibold'
															: 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
													}`}
													onClick={() => setIsMobileMenuOpen(false)}>
													{item.name}
												</Link>
											</SheetClose>
										</motion.div>
									))}

									{/* Mobile CTA Button */}
									<motion.div
										className="pt-4 border-t"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.3, delay: 0.7 }}>
										<SheetClose asChild>
											<Link
												href="/appointment"
												onClick={() => setIsMobileMenuOpen(false)}>
												<Button className="w-full bg-gradient-to-r from-blue-600 to-[#cca6c8] hover:from-blue-700 hover:to-[#b895ba] text-white font-semibold py-3 shadow-lg">
													Book Appointment
												</Button>
											</Link>
										</SheetClose>
									</motion.div>

									{/* Phone Link */}
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.3, delay: 0.8 }}>
										<Button
											variant="outline"
											asChild
											className="w-full text-blue-600 border-blue-200 hover:bg-blue-50">
											<a
												href="tel:+447000000000"
												className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 w-full border border-input bg-background hover:bg-accent hover:text-accent-foreground">
												<FaPhone
													size={16}
													className="mr-2"
												/>
												Call Now
											</a>
										</Button>
									</motion.div>

									{/* Social Media in Mobile */}
									<div className="pt-4 border-t">
										<p className="text-sm text-gray-600 mb-3">Follow Us</p>
										<div className="flex justify-center space-x-4">
											{socialLinks.map(({ icon: Icon, href, label, color }) => (
												<a
													key={label}
													href={href}
													target="_blank"
													rel="noopener noreferrer"
													className="transition-colors duration-300 p-3 hover:bg-gray-50 rounded-full">
													<Icon
														size={20}
														style={{ color: color }}
													/>
												</a>
											))}
										</div>
									</div>
								</motion.nav>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</motion.header>
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
