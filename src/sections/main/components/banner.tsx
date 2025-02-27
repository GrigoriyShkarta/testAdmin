import { FaCircleArrowRight } from 'react-icons/fa6'
import { FaUber } from 'react-icons/fa'
import { SiHeadspace, SiMeta, SiAirbnb, SiRevolut } from 'react-icons/si'
import { PiPinterestLogoFill } from 'react-icons/pi'
import { motion } from 'framer-motion'

export default function Banner() {
	return (
		<div className='w-[700px] grid place-items-center'>
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.4 }}
				className='text-[80px] text-center leading-[80px] tracking-[-.01em] font-[600] pt-[24px]'
			>
				Discover real-world design inspiration.
			</motion.h1>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.6 }}
				className='text-[#747474] text-center text-[20px] pt-[24px]'
			>
				Featuring over 300,000 screens and 1,000 iOS, Android & Web apps — New
				content weekly.
			</motion.p>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.8 }}
				className='flex gap-2 pt-[32px]'
			>
				<button className='bg-black hover:bg-gray-900 transition-colors cursor-pointer text-white px-4 py-2 rounded-full'>
					Join for free
				</button>
				<button className='flex items-center border border-gray-300 hover:bg-gray-100 gap-2 bg-white cursor-pointer text-black px-4 py-2 rounded-full'>
					<span>Learn more</span>
					<FaCircleArrowRight size={24} fill='#808080' />
				</button>
			</motion.div>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 1.0 }}
				className='pt-[80px] text-sm text-[#747474]'
			>
				Trusted by design teams at
			</motion.p>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 1.0 }}
				className='pt-[32px]'
			>
				<div className='flex items-center justify-between w-full gap-8 opacity-50'>
					<FaUber size={22} />
					<SiHeadspace size={22} />
					<SiMeta size={22} />
					<SiAirbnb size={22} />
					<SiRevolut size={22} />
					<span className='text-2xl font-medium'>Metalab</span>
					<PiPinterestLogoFill size={22} />
				</div>
			</motion.div>
		</div>
	)
}
