import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
	{
		id: 1,
		title: 'First Block',
		content: 'This is the first block content',
		bgColor: 'bg-[#266678]',
	},
	{
		id: 2,
		title: 'Second Block',
		content: 'This is the second block content',
		bgColor: 'bg-[#cb7c7a]',
	},
	{
		id: 3,
		title: 'Third Block',
		content: 'This is the third block content',
		bgColor: 'bg-[#36a18b]',
	},
]

export default function Slider() {
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex(prev => (prev + 1) % slides.length)
		}, 3000)

		return () => clearInterval(timer)
	}, [])

	return (
		<div className='container mt-[180px] pl-[96px] pt-[96px] pr-[96px] w-full bg-black rounded-[24px]'>
			<motion.div
				initial={{ opacity: 0, scale: 1.2 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.8 }}
				transition={{ duration: 0.5 }}
				className='relative h-[673px] w-full overflow-hidden mx-auto rounded-t-[24px]'
			>
				<AnimatePresence mode='wait'>
					<motion.div
						key={currentIndex}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						className={`absolute inset-0 flex items-center justify-center ${slides[currentIndex].bgColor}`}
					>
						<div className='text-white text-center'>
							<h2 className='text-3xl font-bold mb-4'>
								{slides[currentIndex].title}
							</h2>
							<p className='text-xl'>{slides[currentIndex].content}</p>
						</div>
					</motion.div>
				</AnimatePresence>
			</motion.div>
		</div>
	)
}
