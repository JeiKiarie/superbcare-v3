'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { redirect } from 'next/navigation';
import { FiSend } from 'react-icons/fi';

const ContactForm = () => {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	function submit(e) {
		e.preventDefault();
		setIsLoading(true);
		setError('');

		fetch('https://formcarry.com/s/y3E1LMY9xUR', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				name: name,
				phone: phone,
				email: email,
				message: message,
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				setIsLoading(false);
				if (res.code === 200) {
					setSubmitted(true);
				} else {
					setError(res.message);
				}
			})
			.catch((error) => {
				setIsLoading(false);
				setError('An error occurred. Please try again.');
			});
	}

	if (error) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gray-50">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
					className="text-center p-8 bg-white rounded-lg shadow-lg">
					<p className="text-red-600 text-xl">{error}</p>
				</motion.div>
			</div>
		);
	}

	if (submitted) {
		redirect('/thank-you');
	}

	return (
		<div className="max-w-2xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				className="bg-white rounded-2xl shadow-2xl overflow-hidden">
				<form
					onSubmit={submit}
					className="p-8 md:p-12">
					<div className="space-y-8">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-semibold text-gray-700 mb-2">
									Full Name *
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-all duration-200 text-gray-900"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="phone"
									className="block text-sm font-semibold text-gray-700 mb-2">
									Phone Number
								</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-all duration-200 text-gray-900"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-semibold text-gray-700 mb-2">
								Email Address *
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-all duration-200 text-gray-900"
								required
							/>
						</div>

						<div>
							<label
								htmlFor="message"
								className="block text-sm font-semibold text-gray-700 mb-2">
								Message *
							</label>
							<textarea
								id="message"
								name="message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								rows="6"
								className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-all duration-200 text-gray-900 resize-none"
								placeholder="Tell us about your needs..."
								required
							/>
						</div>

						<motion.button
							type="submit"
							disabled={isLoading}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
							{isLoading ? (
								<>
									<motion.div
										animate={{ rotate: 360 }}
										transition={{
											duration: 1,
											repeat: Infinity,
											ease: 'linear',
										}}
										className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
									/>
									<span>Sending...</span>
								</>
							) : (
								<>
									<FiSend className="text-lg" />
									<span>Send Message</span>
								</>
							)}
						</motion.button>
					</div>
				</form>
			</motion.div>
		</div>
	);
};

export default ContactForm;
