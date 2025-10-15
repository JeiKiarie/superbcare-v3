'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function AnimatedWrapper({
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
	const ref = useRef(null);
	const isInView = useInView(ref, {
		once,
		amount: threshold,
		margin: '0px 0px -100px 0px',
	});

	const Component = typeof as === 'string' ? motion[as] || motion.div : as;

	const finalTransition = {
		...transition,
		delay,
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

export default AnimatedWrapper;
