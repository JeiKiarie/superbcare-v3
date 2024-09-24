export default function FAQsPage() {
	return (
		<div className="min-h-screen bg-gray-100">
			<section className="container mx-auto py-16 px-6">
				<h1 className="text-4xl font-bold text-blue-700 mb-8">FAQs</h1>
				<div className="space-y-8">
					<div>
						<h2 className="text-2xl font-semibold text-gray-800">
							How do I arrange care services?
						</h2>
						<p className="text-gray-700">
							Contact us via phone or through our online contact form, and we
							will help you through the process of setting up care for your
							loved one.
						</p>
					</div>
					<div>
						<h2 className="text-2xl font-semibold text-gray-800">
							Are your caregivers trained?
						</h2>
						<p className="text-gray-700">
							Yes, all of our caregivers are thoroughly trained and experienced
							in elderly care, including dementia and personal care.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
