'use client';

import { motion } from 'framer-motion';

export default function AnimatedWrapper({
	children,
	as = motion.div,
	initial = { opacity: 0, y: 20 },
	animate = { opacity: 1, y: 0 },
	transition = { duration: 0.8 },
	...props
}) {
	const Component = as;

	return (
		<Component
			initial={initial}
			animate={animate}
			transition={transition}
			{...props}>
			{children}
		</Component>
	);
}
