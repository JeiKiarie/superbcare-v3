import './globals.css';
import { Poppins } from 'next/font/google';
import Header from '/components/Header';
import Footer from '/components/Footer';
import Script from 'next/script';

const poppins = Poppins({
	weight: ['100', '200', '300', '400'],
	subsets: ['latin'],
});

export const metadata = {
	title:
		'Superb Care Services Ltd. Providing professional live-in/elderly care services across the UK.',
	description:
		' Elderly Live-in Home Care and Supported Living, Carers and Nursing Staffing Services',
	openGraph: {
		title: 'Superb Care Services Ltd - Professional Elderly Care Services',
		description:
			'Elderly Live-in Home Care and Supported Living Services across the UK. Compassionate, professional care in the comfort of home.',
		url: 'https://superbcareservices.co.uk',
		siteName: 'Superb Care Services Ltd',
		images: [
			{
				url: 'https://superbcareservices.co.uk/SuperbLogo.webp',
				width: 1200,
				height: 630,
				alt: 'Superb Care Services Ltd Logo',
			},
		],
		locale: 'en_GB',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Superb Care Services Ltd - Professional Elderly Care Services',
		description:
			'Elderly Live-in Home Care and Supported Living Services across the UK. Compassionate care in the comfort of home.',
		images: ['https://superbcareservices.co.uk/superb-logo.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: 'https://superbcareservices.co.uk',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<Script
					id="structured-data"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Organization',
							name: 'Superb Care Services Ltd',
							description:
								'Professional elderly care services providing live-in home care, dementia care, palliative care, and companion care across the UK.',
							url: 'https://superbcareservices.co.uk',
							telephone: '+447984885069',
							email: 'info@superbcareservices.co.uk',
							address: {
								'@type': 'PostalAddress',
								streetAddress: 'Castle Hill House, 12 Castle Hill',
								addressLocality: 'Windsor',
								postalCode: 'SL4 1PD',
								addressCountry: 'GB',
							},
							sameAs: [
								'https://facebook.com/superbcare',
								'https://twitter.com/superbcare',
								'https://instagram.com/superbcare',
							],
							areaServed: [
								{
									'@type': 'Country',
									name: 'United Kingdom',
								},
							],
							serviceType: [
								'Elderly Care',
								'Live-in Care',
								'Dementia Care',
								'Palliative Care',
								'Companion Care',
								'Respite Care',
							],
							hasOfferCatalog: {
								'@type': 'OfferCatalog',
								name: 'Care Services',
								itemListElement: [
									{
										'@type': 'Offer',
										itemOffered: {
											'@type': 'Service',
											name: 'Live-in Care',
											description:
												'24/7 personalized care in the comfort of home',
										},
									},
									{
										'@type': 'Offer',
										itemOffered: {
											'@type': 'Service',
											name: 'Elderly Care',
											description:
												'Comprehensive support for seniors including personal care, medication management, and companionship',
										},
									},
									{
										'@type': 'Offer',
										itemOffered: {
											'@type': 'Service',
											name: 'Dementia Care',
											description:
												"Specialized care for individuals with dementia and Alzheimer's",
										},
									},
								],
							},
							aggregateRating: {
								'@type': 'AggregateRating',
								ratingValue: '5',
								reviewCount: '200',
							},
						}),
					}}
				/>
			</head>
			<body className={poppins.className}>
				<Header />
				<main className="overflow-auto pt-20 md:pt-0">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
