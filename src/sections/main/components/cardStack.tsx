import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CARD_COLORS = ['#266678', '#cb7c7a', '#36a18b', '#cda35f', '#747474']
type CardColor = (typeof CARD_COLORS)[number]

const CARD_OFFSET = 8
const SCALE_FACTOR = 0.06

export default function CardStack() {
	const [cards, setCards] = useState<CardColor[]>(CARD_COLORS)
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCards(prevCards => {
				const [firstCard, ...restCards] = prevCards
				return [...restCards, firstCard]
			})
			setCurrentIndex(prevIndex => (prevIndex + 1) % CARD_COLORS.length)
		}, 3000)

		return () => clearInterval(interval)
	}, [])

	const getCardColor = (index: number): string => {
		if (index === 1) return '#a1a1a1'
		if (index === 2) return '#d5d4d4'
		return CARD_COLORS[currentIndex]
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<div id='card-stack' />
			<ul className='relative w-[88px] h-[88px]'>
				<AnimatePresence>
					{cards.slice(0, 3).map((color, index) => (
						<motion.li
							key={color}
							className='absolute w-[88px] h-[88px] rounded-2xl shadow-md origin-top'
							style={{
								backgroundColor: getCardColor(index),
							}}
							animate={{
								top: index * -CARD_OFFSET,
								scale: 1 - index * SCALE_FACTOR,
								zIndex: CARD_COLORS.length - index,
							}}
							exit={{ opacity: 0 }}
						/>
					))}
				</AnimatePresence>
			</ul>
		</motion.div>
	)
}
