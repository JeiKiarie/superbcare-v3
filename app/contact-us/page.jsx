export default function ContactPage() {
	return (
		<div className="min-h-screen bg-gray-100">
			<section className="container mx-auto py-16 px-6">
				<h1 className="text-4xl font-bold text-blue-700 mb-8">Contact Us</h1>
				<form className="space-y-6 max-w-lg mx-auto">
					<input
						type="text"
						placeholder="Your Name"
						className="w-full px-4 py-2 border border-gray-300 rounded-lg"
					/>
					<input
						type="email"
						placeholder="Your Email"
						className="w-full px-4 py-2 border border-gray-300 rounded-lg"
					/>
					<textarea
						placeholder="Your Message"
						className="w-full px-4 py-2 border border-gray-300 rounded-lg h-40"></textarea>
					<button
						type="submit"
						className="w-full py-3 bg-blue-700 text-white font-bold rounded-lg">
						Send Message
					</button>
				</form>
			</section>
		</div>
	);
}
