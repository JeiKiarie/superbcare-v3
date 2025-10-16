'use client';

import { useRouter } from 'next/navigation';

const BackButton = () => {
	const router = useRouter();

	const handleBack = () => {
		router.back();
	};

	return (
		<button
			onClick={handleBack}
			className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition">
			⬅ Back to Services
		</button>
	);
};

export default BackButton;
