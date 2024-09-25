export default function TestimonialsPage() {
	return (
		<div className="min-h-screen bg-gray-50">
			<section className="container mx-auto py-16 px-6">
				<h1 className="text-4xl font-bold text-blue-700 mb-8">
					What Our Clients Say
				</h1>
				<div className="space-y-8">
					<div className="bg-white p-6 rounded-lg shadow-md">
						<p className="text-gray-700">
							&#34;Elderly Care UK provided exceptional care for my mother.&#34;
						</p>
						<p className="text-blue-700 mt-4 font-semibold">- Sarah J.</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-md">
						<p className="text-gray-700">
							&#34;I couldn't have asked for better care for my father.&#34;
						</p>
						<p className="text-blue-700 mt-4 font-semibold">- Mark R.</p>
					</div>
				</div>
			</section>
		</div>
	);
}
