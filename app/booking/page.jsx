'use client';
import { useState } from 'react';

const AppointmentPage = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		date: '',
		time: '',
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert('Appointment booked successfully!');
	};

	return (
		<div className="min-h-screen bg-gray-100 flex justify-center items-center">
			<form
				onSubmit={handleSubmit}
				className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
				<h2 className="text-2xl font-bold mb-4 text-gray-700">
					Book an Appointment
				</h2>
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					className="border w-full p-2 mb-4 rounded-lg"
					onChange={handleInputChange}
					value={formData.name}
					required
				/>
				<input
					type="email"
					name="email"
					placeholder="Your Email"
					className="border w-full p-2 mb-4 rounded-lg"
					onChange={handleInputChange}
					value={formData.email}
					required
				/>
				<input
					type="date"
					name="date"
					className="border w-full p-2 mb-4 rounded-lg"
					onChange={handleInputChange}
					value={formData.date}
					required
				/>
				<input
					type="time"
					name="time"
					className="border w-full p-2 mb-4 rounded-lg"
					onChange={handleInputChange}
					value={formData.time}
					required
				/>
				<button
					type="submit"
					className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition">
					Book Now
				</button>
			</form>
		</div>
	);
};

export default AppointmentPage;
