import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { TbLockSquareRounded } from 'react-icons/tb'

interface TooltipProps {
	showTooltip: boolean
}

export default function Tooltip({ showTooltip }: TooltipProps) {
	return (
		<div
			className={`absolute 
        left-full 
        bottom-full 
        w-[580px] 
        p-[1.5em]
        bg-white 
        text-black 
        text-sm 
				rounded-[1rem_1rem_1rem_0.5rem]
        shadow-lg
        z-10
        transition-opacity duration-300
        ${showTooltip ? 'opacity-100 visible' : 'opacity-0 invisible'}
    `}
		>
			<div className='flex flex-col gap-4'>
				<div className='flex gap-4'>
					<IoCheckmarkDoneCircleOutline size={48} />
					<div>
						<p className='font-semibold text-[1.125em] flex'>Лучший курс</p>
						<p className='text-xs text-gray-600 text-[1.125em] text-justify'>
							Система автоматически пересчитает Вашу заявку при резких
							колебаниях курса. Сумма к получению изменяется как в меньшую, так
							и в большую сторону.
						</p>
					</div>
				</div>

				<div className='flex gap-4'>
					<TbLockSquareRounded size={48} />
					<div>
						<p className='font-semibold text-[1.125em] flex'>Лучший курс</p>
						<p className='text-xs text-gray-600 text-[1.125em] text-justify'>
							Система автоматически пересчитает Вашу заявку при резких
							колебаниях курса. Сумма к получению изменяется как в меньшую, так
							и в большую сторону.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
