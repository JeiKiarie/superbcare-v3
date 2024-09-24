import Carousel from './components/Carousel';

export default function HomePage() {
	return (
		<div className="min-h-screen">
			<section className="bg-blue-700 text-white py-16 text-center">
				<h1 className="text-5xl font-bold mb-4">
					Professional Live-in Care Services
				</h1>
				<p className="text-lg">
					Supporting elderly people in the comfort of their own homes across the
					UK.
				</p>
			</section>

			<section className="container mx-auto py-16 px-6">
				<h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
					Our Services
				</h2>
				<Carousel />
			</section>
		</div>
	);
}
