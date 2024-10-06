'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const ThankYou = () => {
	const router = useRouter();

	return (
		<section className="bg-[#cca6c8] h-[75vh] w-full flex items-center justify-center">
			<article className="text-center flex flex-col items-center gap-8">
				<div className="text-3xl">🙏</div>
				<p className="text-xl text-white text-center">
					Thank you. Your form has been submitted. We will be contacting you as
					soon as possible.
				</p>
				<motion.button
					onClick={() => router.push('/contact-us')}
					className="bg-white text-blue-800 py-3 px-8 rounded-lg font-semibold text-center hover:bg-blue-800 hover:text-white transition"
					initial={{ scale: 0.9 }}
					animate={{ scale: 1 }}
					transition={{ delay: 0.4 }}>
					Back
				</motion.button>
			</article>
		</section>
	);
};

export default ThankYou;
