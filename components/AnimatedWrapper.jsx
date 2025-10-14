'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function AnimatedWrapper({
	children,
	as = motion.div,
	initial = { opacity: 0, y: 20 },
	animate = { opacity: 1, y: 0 },
	transition = { duration: 0.8 },
	delay = 0,
	threshold = 0.1,
	once = false,
	...props
}) {
	const Component = as;
	const ref = useRef(null);
	const isInView = useInView(ref, {
		once: once,
		amount: threshold,
		margin: '0px 0px -100px 0px', // Trigger 100px before element enters viewport
	});

	useEffect(() => {
		// Force re-animation when element comes into view
		if (isInView) {
			// Component will re-animate due to isInView state change
		}
	}, [isInView]);

	const finalTransition = {
		...transition,
		delay: delay,
	};

	return (
		<Component
			ref={ref}
			initial={initial}
			animate={isInView ? animate : initial}
			transition={finalTransition}
			{...props}>
			{children}
		</Component>
	);
}
