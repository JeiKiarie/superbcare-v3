'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SearchPage() {
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	// Placeholder function to simulate search results
	const handleSearch = (e) => {
		e.preventDefault();
		// Simulate a search by setting static results (replace this with real search logic later)
		const dummyResults = [
			{ title: 'Live-In Care Services', url: '/services/live-in-care' },
			{ title: 'Elderly Care Programs', url: '/services/elderly-care' },
			{ title: 'Personalized Care Plans', url: '/services/personalized-care' },
		];

		const filteredResults = dummyResults.filter((result) =>
			result.title.toLowerCase().includes(searchQuery.toLowerCase())
		);

		setSearchResults(filteredResults);
	};

	return (
		<div className="container mx-auto p-6">
			<h1 className="text-3xl font-semibold text-center text-blue-700 mb-8">
				Search Our Services
			</h1>

			{/* Search Form */}
			<form
				onSubmit={handleSearch}
				className="flex justify-center mb-8">
				<input
					type="text"
					className="border border-gray-300 p-3 rounded-lg w-1/2 focus:outline-none focus:border-blue-500"
					placeholder="Enter your search query..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<button
					type="submit"
					className="ml-4 bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-500">
					Search
				</button>
			</form>

			{/* Search Results */}
			<div>
				{searchResults.length > 0 ? (
					<ul className="space-y-4">
						{searchResults.map((result, index) => (
							<li
								key={index}
								className="border border-gray-300 p-4 rounded-lg hover:bg-gray-100">
								<Link
									className="text-lg font-medium text-blue-700"
									href={result.url}>
									{result.title}
								</Link>
							</li>
						))}
					</ul>
				) : (
					<p className="text-center text-gray-500">
						No results found for &#34;{searchQuery}&#34;.
					</p>
				)}
			</div>
		</div>
	);
}
