import { motion } from 'framer-motion'

const BLOCKS = [
	{ color: '#FF6B6B', x: '10%', y: '10%', type: 'diagonal' },
	{ color: '#FFD166', x: '30%', y: '20%', type: 'oval' },
	{ color: '#06D6A0', x: '50%', y: '10%', type: 'diagonal' },
	{ color: '#118AB2', x: '70%', y: '20%', type: 'oval' },
	{ color: '#073B4C', x: '90%', y: '10%', type: 'diagonal' },
	{ color: '#EF476F', x: '20%', y: '50%', type: 'oval' },
	{ color: '#FFD166', x: '40%', y: '80%', type: 'diagonal' },
	{ color: '#06D6A0', x: '60%', y: '80%', type: 'oval' },
	{ color: '#118AB2', x: '80%', y: '60%', type: 'diagonal' },
	{ color: '#073B4C', x: '10%', y: '85%', type: 'oval' },
	{ color: '#EF476F', x: '90%', y: '90%', type: 'diagonal' },
]

const AMPLITUDE = 15

export default function AnimatedBlocks() {
	return (
		<>
			{BLOCKS.map((block, index) => {
				let animation
				if (block.type === 'diagonal') {
					animation = {
						x: [0, AMPLITUDE, 0, -AMPLITUDE, 0],
						y: [0, AMPLITUDE, 0, -AMPLITUDE, 0],
					}
				} else if (block.type === 'oval') {
					const ovalRadiusX = AMPLITUDE * 1.5
					const ovalRadiusY = AMPLITUDE
					animation = {
						x: [0, ovalRadiusX, 0, -ovalRadiusX, 0],
						y: [0, ovalRadiusY * 0.5, ovalRadiusY, ovalRadiusY * 0.5, 0],
					}
				}

				return (
					<motion.div
						key={index}
						className={`absolute w-[80px] h-[80px] rounded-3xl`}
						style={{
							backgroundColor: block.color,
							left: block.x,
							top: block.y,
						}}
						animate={animation}
						transition={{
							duration: 6 + Math.random() * 2,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>
				)
			})}
		</>
	)
}
