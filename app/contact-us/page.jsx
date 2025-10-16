import Link from 'next/link';
import HeroSection from '../../components/HeroSection';
import ContactForm from '../../components/ContactForm';
import ContactClientSection from '../../components/ContactClientSection';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const metadata = {
	title:
		'Contact Superb Care Services Ltd | Get In Touch | Elderly Care Providers',
	description:
		'Contact Superb Care Services Ltd for professional elderly care, live-in care, and home care services. Call +447984885069 or visit Windsor office. Free consultations available.',
	keywords: [
		'contact superb care',
		'elderly care contact',
		'home care services contact',
		'live in care booking',
		'care services windsor',
		'professional care providers',
	],
	openGraph: {
		title: 'Contact Superb Care Services Ltd',
		description:
			'Get in touch with our professional elderly care team. Free consultations available for live-in care, dementia care, and palliative care services.',
		url: 'https://superbcareservices.co.uk/contact-us',
		type: 'website',
	},
	twitter: {
		title: 'Contact Superb Care Services Ltd',
		description:
			'Professional elderly care providers. Contact us today for live-in care consultations and home care services across the UK.',
	},
	alternates: {
		canonical: 'https://superbcareservices.co.uk/contact-us',
	},
};

const ContactPage = () => {
	return (
		<main>
			{/* Hero Section */}
			<HeroSection
				title="Let's Start a Conversation"
				subtitle="We're here to help you find the perfect care solution"
				backgroundImage="/contact-image.jpg"
				titleSize="text-6xl md:text-7xl"
				className="relative overflow-hidden"
			/>

			{/* Contact Information Section */}
			<ContactClientSection />

			{/* Contact Form Section */}
			<section className="py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
							Send Us a <span className="text-blue-600">Message</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
							Ready to take the next step? Fill out the form below and our team
							will get back to you within 24 hours.
						</p>
					</div>

					<ContactForm />
				</div>
			</section>

			{/* Map Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="bg-white rounded-2xl shadow-lg overflow-hidden">
						<div className="h-96 md:h-[450px]">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.665846005358!2d-0.609198124191054!3d51.48264761251231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767ae4a576aaab%3A0x3551638a20b9030a!2sCastle%20Hill%20House!5e0!3m2!1sen!2ske!4v1720967565567!5m2!1sen!2ske"
								width="100%"
								height="100%"
								frameBorder="0"
								allowFullScreen=""
								aria-hidden="false"
								tabIndex="0"
								className="w-full h-full"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Social Media & CTA Section */}
			<section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold mb-6">Follow Us</h2>
						<p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
							Stay connected and get the latest updates on our services, tips,
							and community stories.
						</p>
					</div>

					<div className="flex justify-center space-x-8 mb-12">
						<a
							href="#"
							className="w-16 h-16 bg-[#1877F2] rounded-full flex items-center justify-center hover:bg-[#1465C0] transition-all duration-300">
							<FaFacebook className="text-2xl text-white" />
						</a>
						<a
							href="#"
							className="w-16 h-16 bg-gradient-to-br from-[#f09433] via-[#bc1888] to-[#405de6] rounded-full flex items-center justify-center hover:opacity-80 transition-all duration-300 p-1">
							<FaInstagram className="text-2xl text-white" />
						</a>
						<a
							href="#"
							className="w-16 h-16 bg-[#1DA1F2] rounded-full flex items-center justify-center hover:bg-[#0d95e8] transition-all duration-300">
							<FaXTwitter className="text-2xl text-white" />
						</a>
					</div>

					<div className="text-center">
						<h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
						<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
							Book a free consultation to discuss your care needs and find the
							perfect solution.
						</p>
						<Link href="/appointment">
							<button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
								<span>Book Your Consultation</span>
								<FiArrowRight className="ml-2" />
							</button>
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ContactPage;
