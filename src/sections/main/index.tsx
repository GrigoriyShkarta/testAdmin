import Banner from './components/banner'
import CardStack from './components/cardStack'

export default function MainSection() {
	return (
		<section
			id='sliders'
			className='container mx-auto items-center px-4 flex flex-col pt-[180px]'
		>
			<CardStack />
			<Banner />
		</section>
	)
}
