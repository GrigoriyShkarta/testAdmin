import { RefObject } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function AnimatedText({
	sectionRef,
}: {
	sectionRef: RefObject<HTMLDivElement | null>
}) {
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start center', 'end center'],
	})

	const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])

	const text1Y = useTransform(scrollYProgress, [0.1, 0.3], ['40vh', '0vh'])
	const text1Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0, 0, 1])

	const text2Y = useTransform(scrollYProgress, [0.3, 0.5], ['40vh', '0vh'])
	const text2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [0, 0, 1])

	const text3Y = useTransform(scrollYProgress, [0.5, 0.7], ['40vh', '0vh'])
	const text3Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 0, 1])

	return (
		<div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pointer-events-none'>
			<motion.p className='text-2xl' style={{ opacity: titleOpacity }}>
				A growing library of
			</motion.p>

			<motion.div
				className='text-4xl font-bold max-w-[600px] text-center'
				style={{ y: text1Y, opacity: text1Opacity }}
			>
				<p className='text-[80px] font-[652px]'>1,150 apps</p>
			</motion.div>

			<motion.div
				className='text-4xl font-bold max-w-[600px] text-center'
				style={{ y: text2Y, opacity: text2Opacity }}
			>
				<p className='text-[80px] font-[652px]'>405,800 screens</p>
			</motion.div>

			<motion.div
				className='text-4xl font-bold max-w-[600px] text-center'
				style={{ y: text3Y, opacity: text3Opacity }}
			>
				<p className='text-[80px] font-[652px]'>81,700 flows</p>
			</motion.div>
		</div>
	)
}
