export default function ServicesPage() {
	return (
		<div className="min-h-screen bg-gray-100">
			<section className="container mx-auto py-16 px-6">
				<h1 className="text-4xl font-bold text-blue-700 mb-8">Our Services</h1>
				<div className="space-y-8">
					<div>
						<h2 className="text-2xl font-semibold text-gray-800">
							24/7 Live-in Care
						</h2>
						<p className="text-gray-700">
							Our dedicated caregivers live with your loved ones, offering
							round-the-clock care and support.
						</p>
					</div>
					<div>
						<h2 className="text-2xl font-semibold text-gray-800">
							Dementia Care
						</h2>
						<p className="text-gray-700">
							Our team provides specialized care for individuals living with
							dementia.
						</p>
					</div>
					<div>
						<h2 className="text-2xl font-semibold text-gray-800">
							Personal Care
						</h2>
						<p className="text-gray-700">
							Assistance with daily activities like bathing, dressing, and
							grooming.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
