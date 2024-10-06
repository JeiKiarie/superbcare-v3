'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import contactImg from '/public/contact-image.jpg';
import Image from 'next/image';
import { useState } from 'react';
import { redirect } from 'next/navigation';

const ContactPage = () => {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [name, setName] = useState('');
	// const [lastName, setLastName] = useState('');

	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState('');

	function submit(e) {
		// This will prevent page refresh
		e.preventDefault();

		// replace this with your own unique endpoint URL
		fetch('https://formcarry.com/s/y3E1LMY9xUR', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				name: name,
				// lastName: lastName,
				email: email,
				message: message,
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.code === 200) {
					setSubmitted(true);
				} else {
					setError(res.message);
				}
			})
			.catch((error) => setError(error));
	}

	if (error) {
		return <p>{error}</p>;
	}

	if (submitted) {
		redirect('/thank-you');
		// return <p>We have received your message, thank you for contacting us!</p>;
		// redirect('/contact-us');
		// permanentRedirect('/thank-you');
	}
	return (
		<>
			{/* Hero Section */}
			<section className="relative h-[50vh] md:h-[76vh] bg-cover bg-center text-white mb-4">
				<Image
					src={contactImg}
					alt="Hero Background"
					// layout="fill"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<motion.h1
						className="text-5xl font-bold"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						Contact Us
					</motion.h1>
				</div>
			</section>

			{/* Contact Information Section */}
			<section className="container mx-auto space-y-6 mb-8 px-4">
				<motion.h2
					className="text-4xl font-semibold text-blue-800 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Get in Touch with Us
				</motion.h2>
				<motion.p
					className="text-lg text-gray-600 leading-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					Whether you have questions about our live-in care services, need
					assistance with an ongoing service, or want to book an appointment,
					our team is here to help you. Reach out to us through any of the
					following channels.
				</motion.p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* Contact Details */}
					<motion.div
						className="space-y-6 text-lg text-gray-700"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}>
						<div>
							<h3 className="text-2xl font-semibold text-blue-600">
								Office Hours
							</h3>
							<p>Visit us: 09.00 - 17.00 hours</p>
						</div>
						<div>
							<h3 className="text-2xl font-semibold text-blue-600">Phone</h3>
							<p>
								Call us:{' '}
								<a
									href="tel:+441234567890"
									className="text-blue-500 hover:underline">
									+44 7984 885069
								</a>
							</p>
						</div>

						<div>
							<h3 className="text-2xl font-semibold text-blue-600">Email</h3>
							<p>
								Email us:{' '}
								<a
									href="mailto:info@superbcareservices.co.uk"
									className="text-blue-500 hover:underline">
									info@superbcareservices.co.uk
								</a>
							</p>
						</div>

						<div>
							<h3 className="text-2xl font-semibold text-blue-600">Location</h3>
							<p>
								Our office: Castle Hill House, 12 Castle Hill, Windsor, SL4 1PD
							</p>
						</div>
					</motion.div>

					{/* Google Map */}
					<motion.div
						className="relative overflow-hidden rounded-lg shadow-lg"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.665846005358!2d-0.609198124191054!3d51.48264761251231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767ae4a576aaab%3A0x3551638a20b9030a!2sCastle%20Hill%20House!5e0!3m2!1sen!2ske!4v1720967565567!5m2!1sen!2ske"
							width="100%"
							height="400"
							frameBorder="0"
							allowFullScreen=""
							aria-hidden="false"
							tabIndex="0"
							className="w-full h-full"
						/>
					</motion.div>
				</div>
			</section>

			{/* Contact Form Section */}
			<section className="mx-auto space-y-6 px-4 bg-[#cca6c8] mb-8 py-8">
				<div className="container mx-auto">
					<motion.h2
						className="text-4xl font-semibold text-blue-800 text-center mb-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						Send Us A Message
					</motion.h2>
					<motion.p
						className="text-lg text-white leading-8 text-justify md:text-center mb-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}>
						Use the form below to send us your inquiry. Our team will get back
						to you within 24 hours.
					</motion.p>

					<motion.div
						className="bg-white p-8 shadow-lg rounded-lg max-w-lg mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}>
						<form
							onSubmit={submit}
							action="#"
							method="POST"
							className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-lg font-medium text-gray-700">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
									required
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-lg font-medium text-gray-700">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
									required
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-lg font-medium text-gray-700">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									rows="4"
									className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
									required
								/>
							</div>

							<button
								type="submit"
								className="w-full py-3 bg-[#cca6c8] text-white font-semibold rounded-lg hover:bg-blue-700 transition">
								Send Message
							</button>
						</form>
					</motion.div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="text-center py-12 bg-[#cca6c8] text-white rounded-lg">
				<motion.h2
					className="text-4xl font-bold mb-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Ready to Talk?
				</motion.h2>
				<motion.p
					className="text-lg mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					Reach out to us today for more information on our services or to
					schedule a free consultation.
				</motion.p>
				<Link href="/appointment">
					<motion.button
						className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition"
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.4 }}>
						Book Appointment
					</motion.button>
				</Link>
			</section>
		</>
	);
};

export default ContactPage;
