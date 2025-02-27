import { useState } from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import Tooltip from '../tooltip'

enum ActiveButton {
	BEST = 'best',
	FIXED = 'fixed',
}

interface HeaderProps {
	timeLeft: number | null
	fromCurrency: string
	toCurrency: string
	exchangeRate: number
}

export default function Header({
	timeLeft,
	exchangeRate,
	fromCurrency,
	toCurrency,
}: HeaderProps) {
	const [showTooltip, setShowTooltip] = useState(false)
	const [activeButton, setActiveButton] = useState<ActiveButton>(
		ActiveButton.BEST
	)

	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60)
		const secs = seconds % 60
		return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(
			2,
			'0'
		)}`
	}

	return (
		<div className='w-full rounded-[1rem] flex justify-between bg-[#f7f7f7] border border-[#eaebeb] p-[1em] px-[1.5em]'>
			<div className='flex gap-3 items-center'>
				<div className=' relative'>
					<div
						className='flex items-center gap-[.5em] cursor-pointer relative'
						onMouseEnter={() => setShowTooltip(true)}
						onMouseLeave={() => setShowTooltip(false)}
					>
						<span className='font-[1.125em] '>Выберите тип курса</span>
						<AiFillInfoCircle size={24} />
					</div>
					<Tooltip showTooltip={showTooltip} />
				</div>

				<div className='flex gap-2'>
					<button
						className={`h-[2.5em] px-[1em] font-semibold rounded-[.5em] cursor-pointer ${
							activeButton === ActiveButton.BEST
								? 'bg-[#313638] text-white'
								: 'bg-[#eaebeb] text-gray-700'
						}`}
						onClick={() => setActiveButton(ActiveButton.BEST)}
					>
						Лучший курс
					</button>
					<button
						className={`h-[2.5em] px-[1em] font-semibold rounded-[.5em] cursor-pointer ${
							activeButton === ActiveButton.FIXED
								? 'bg-[#313638] text-white'
								: 'bg-[#eaebeb] text-gray-700'
						}`}
						onClick={() => setActiveButton(ActiveButton.FIXED)}
					>
						Фиксированный курс
					</button>
				</div>
				<div className='w-[1px] h-[40px] bg-[#eaebeb]'></div>
				<p className='font-semibold text-[#313638]'>{`1 ${fromCurrency} = ${
					1 * exchangeRate
				} ${toCurrency}`}</p>
			</div>

			<div className='flex gap-3 items-center'>
				<p>
					До обновления курса:{' '}
					<span className='font-semibold text-[#f06543]'>
						{formatTime(timeLeft ?? 0)}
					</span>
				</p>
			</div>
		</div>
	)
}
