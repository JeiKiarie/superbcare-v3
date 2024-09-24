import './globals.css';
import { Inter } from 'next/font/google';
import Header from '/components/Header';
import Footer from '/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Live-In Care Services',
	description: 'UK-based company providing elderly care services',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}

// import Header from '/components/Header';
// import Footer from '/components/Footer';
// import MobileMenu from '/components/MobileMenu';
// import './globals.css';

// export default function RootLayout({ children }) {
// 	return (
// 		<html lang="en">
// 			<body className="min-h-screen flex flex-col">
// 				<Header />
// 				{/* <MobileMenu /> */}
// 				<main className="flex-grow">{children}</main>
// 				<Footer />
// 			</body>
// 		</html>
// 	);
// }
