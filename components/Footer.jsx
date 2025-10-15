import Link from 'next/link';
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaLinkedin,
	FaPhone,
	FaEnvelope,
	FaMapMarkerAlt,
	FaHeart,
} from 'react-icons/fa';
import AnimatedWrapper from './AnimatedWrapper';
import { Button } from './ui/button';

const Footer = () => {
	return (
		<footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				/>
			</div>

			{/* Main Footer Content */}
			<div className="relative z-10">
				{/* Top Section */}
				<AnimatedWrapper
					className="container mx-auto px-6 py-16"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Company Info */}
						<AnimatedWrapper
							className="space-y-6"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}>
							<div className="space-y-4">
								<h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
									Superb Care Services Ltd
								</h3>
								<p className="text-slate-300 leading-relaxed">
									Providing quality live-in care for the elderly across the UK.
									Compassionate care from experienced professionals with a heart
									for service.
								</p>
							</div>

							{/* Social Media */}
							<div className="flex space-x-4">
								<Link
									href="https://facebook.com"
									className="group p-3 rounded-full bg-slate-700/50 hover:bg-blue-600 transition-all duration-300 hover:scale-110">
									<div className="text-blue-600 group-hover:text-white">
										<FaFacebook size={20} />
									</div>
								</Link>
								<Link
									href="https://twitter.com"
									className="group p-3 rounded-full bg-slate-700/50 hover:bg-blue-400 transition-all duration-300 hover:scale-110">
									<div className="text-blue-400 group-hover:text-white">
										<FaTwitter size={20} />
									</div>
								</Link>
								<Link
									href="https://instagram.com"
									className="group p-3 rounded-full bg-slate-700/50 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 transition-all duration-300 hover:scale-110">
									<div className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-pink-500 group-hover:text-white">
										<FaInstagram size={20} />
									</div>
								</Link>
								<Link
									href="https://linkedin.com"
									className="group p-3 rounded-full bg-slate-700/50 hover:bg-blue-700 transition-all duration-300 hover:scale-110">
									<div className="text-blue-700 group-hover:text-white">
										<FaLinkedin size={20} />
									</div>
								</Link>
							</div>
						</AnimatedWrapper>

						{/* Quick Links */}
						<AnimatedWrapper
							className="space-y-6"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}>
							<h4 className="text-xl font-semibold text-white border-b border-slate-600 pb-2">
								Quick Links
							</h4>
							<ul className="space-y-3">
								{[
									{ href: '/', label: 'Home' },
									{ href: '/about-us', label: 'About Us' },
									{ href: '/services', label: 'Services' },
									{ href: '/contact-us', label: 'Contact Us' },
									{ href: '/appointment', label: 'Book Appointment' },
								].map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											className="text-slate-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block">
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</AnimatedWrapper>

						{/* Our Services */}
						<AnimatedWrapper
							className="space-y-6"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.5 }}>
							<h4 className="text-xl font-semibold text-white border-b border-slate-600 pb-2">
								Our Services
							</h4>
							<ul className="space-y-3">
								{[
									{ href: '/services/live-in-care', label: 'Live-In Care' },
									{ href: '/services/dementia-care', label: 'Dementia Care' },
									{ href: '/services/respite-care', label: 'Respite Care' },
									{
										href: '/services/palliative-care',
										label: 'Palliative Care',
									},
									{ href: '/services/companion-care', label: 'Companion Care' },
								].map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											className="text-slate-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block">
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</AnimatedWrapper>

						{/* Contact */}
						<AnimatedWrapper
							className="space-y-6"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}>
							<h4 className="text-xl font-semibold text-white border-b border-slate-600 pb-2">
								Contact Us
							</h4>

							{/* Contact Info */}
							<div className="space-y-6">
								<div className="flex items-center space-x-3 text-slate-300">
									<FaPhone className="text-blue-400 min-w-[16px]" />
									<span>+44 7984 885069</span>
								</div>
								<div className="flex items-center space-x-3 text-slate-300">
									<FaEnvelope className="text-blue-400 min-w-[16px]" />
									<span>info@superbcareservices.co.uk</span>
								</div>
								<div className="flex items-start space-x-3 text-slate-300">
									<FaMapMarkerAlt className="text-blue-400 min-w-[16px] mt-0.5" />
									<span className="text-sm">
										Castle Hill House, 12 Castle Hill, Windsor, SL4 1PD
									</span>
								</div>
							</div>
						</AnimatedWrapper>
					</div>
				</AnimatedWrapper>

				{/* Bottom Section */}
				<div className="border-t border-slate-700/50">
					<div className="container mx-auto px-6 py-6 text-center">
						<div className="flex flex-col items-center space-y-2">
							<div className="flex items-center space-x-2 text-slate-300">
								<FaHeart className="text-red-500" />
								<span className="text-sm">
									© {new Date().getFullYear()} Superb Care Services Ltd. All
									rights reserved.
								</span>
							</div>
							<Link
								href="https://microstation.co.ke"
								target="_blank"
								className="text-xs text-slate-300 hover:text-blue-400 transition-colors duration-200 underline decoration-dotted underline-offset-4">
								Website by JeiKiarie
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
