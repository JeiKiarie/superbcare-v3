import Header from './components/Header';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="min-h-screen flex flex-col">
				<Header />
				<MobileMenu />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
