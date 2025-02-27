import { useRef } from 'react'
import AnimatedBlock from './components/animationBlock'
import AnimatedText from './components/animationText'

export default function AnimatedBlocks() {
	const sectionRef = useRef(null)

	return (
		<div ref={sectionRef} className='relative w-full h-[400vh]'>
			<div className='sticky top-0 h-screen flex items-center justify-center overflow-hidden'>
				<AnimatedBlock />
				<AnimatedText sectionRef={sectionRef} />
			</div>
		</div>
	)
}
