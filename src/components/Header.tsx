import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isAtSliders, setIsAtSliders] = useState(false)

	useEffect(() => {
		const cardStack = document.querySelector('#card-stack')
		const sliders = document.querySelector('#sliders')

		const cardObserver = new IntersectionObserver(
			([entry]) => {
				setIsScrolled(!entry.isIntersecting)
			},
			{
				threshold: 0,
				rootMargin: '-56px 0px 0px 0px',
			}
		)

		const slidersObserver = new IntersectionObserver(
			([entry]) => {
				setIsAtSliders(!entry.isIntersecting)
			},
			{
				threshold: 0,
				rootMargin: '56px 0px 0px 0px',
			}
		)

		if (cardStack) cardObserver.observe(cardStack)
		if (sliders) slidersObserver.observe(sliders)

		return () => {
			cardObserver.disconnect()
			slidersObserver.disconnect()
		}
	}, [])

	const shouldShowContact = !isScrolled || isAtSliders

	return (
		<header className='fixed left-1/2 -translate-x-1/2 top-6 flex items-center justify-between bg-[#f2f2f2]/70 backdrop-blur-xl shadow-md w-[584px] px-6 py-2 rounded-full z-20 overflow-hidden'>
			<a href='/' className='font-bold hover:opacity-80 transition-opacity'>
				Home
			</a>

			<nav className='flex items-center gap-4 relative w-[200px]'>
				<motion.a
					href='#'
					className='font-semibold hover:opacity-80 transition-opacity'
					animate={{
						x: shouldShowContact ? 0 : 100,
					}}
					transition={{ duration: 0.3 }}
				>
					Pricing
				</motion.a>
				<motion.a
					href='#'
					className='font-semibold hover:opacity-80 transition-opacity'
					animate={{
						x: shouldShowContact ? 0 : 100,
					}}
					transition={{ duration: 0.3 }}
				>
					Login
				</motion.a>
				<motion.a
					href='#'
					className='rounded-full bg-black hover:bg-gray-900 transition-colors text-white px-4 py-2 font-semibold'
					animate={{
						opacity: shouldShowContact ? 1 : 0,
						y: shouldShowContact ? 0 : 20,
						pointerEvents: shouldShowContact ? 'auto' : 'none',
					}}
					transition={{ duration: 0.3 }}
				>
					Contact
				</motion.a>
			</nav>
		</header>
	)
}
