'use client';
import { InlineWidget } from 'react-calendly';

export default function AppointmentPage() {
	return (
		<div className="min-h-screen bg-gray-100 text-center">
			<section className="container mx-auto py-16 px-6">
				<h1 className="text-4xl font-bold text-blue-800 mb-8">
					Book an Appointment
				</h1>
				<p className="text-gray-700 mb-4">
					Schedule a time for a consultation with one of our care experts.
				</p>
				<div className="bg-white p-6 shadow-lg rounded-lg">
					{/* Calendly Inline Embed */}
					<InlineWidget
						url="https://calendly.com/ruth-west79"
						styles={{ height: '600px' }}
					/>
				</div>
			</section>
		</div>
	);
}

// 'use client';
// import { PopupWidget } from 'react-calendly';

// export default function AppointmentPage() {
// 	return (
// 		<div className="min-h-screen bg-gray-100">
// 			<section className="container mx-auto py-16 px-6">
// 				<h1 className="text-4xl font-bold text-blue-700 mb-8">
// 					Book an Appointment
// 				</h1>
// 				<p className="text-gray-700 mb-4">
// 					Schedule a time for a consultation with one of our care experts.
// 				</p>
// 				{/* Calendly Popup Button */}
// 				<PopupWidget
// 					url="https://calendly.com/kiariejkagure/event-type"
// 					rootElement={document.getElementById('__next')}
// 					text="Book an Appointment"
// 					textColor="#ffffff"
// 					color="#0073e6"
// 				/>
// 			</section>
// 		</div>
// 	);
// }
