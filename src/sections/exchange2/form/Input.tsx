import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
import { cryptoOptions } from '../constants'

interface InputProps {
	label: string
	type: 'number' | 'text' | 'email'
	withButton?: boolean
	value?: number | string
	currency?: string
	placeholder?: string
	disabled?: boolean
	zInput?: string
	zIndex?: string
	error?: string
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	onCurrencyChange?: (symbol: string) => void
}

export default function Input({
	label,
	type,
	withButton,
	value,
	placeholder,
	disabled,
	currency,
	zInput,
	zIndex,
	error,
	onChange,
	onCurrencyChange,
}: InputProps) {
	const [isOpen, setIsOpen] = useState(false)
	const [searchQuery, setSearchQuery] = useState('')

	const selectedCrypto = cryptoOptions.find(
		option => option.symbol === currency
	)

	const dropdownRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
				setSearchQuery('')
			}
		}

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpen])

	return (
		<div className={`relative w-full z-[${zIndex}]`}>
			<label
				className={`block
            text-[1.125em] 
            leading-[142%] 
            absolute 
            top-[0.75em] 
            left-[1.42em] 
            pointer-events-none 
            translate-x-[1px]
            text-[#313638]
						z-[3]
        `}
			>
				{label}
			</label>
			<input
				type={type}
				value={value === 0 ? '' : value}
				disabled={disabled}
				placeholder={placeholder}
				className={`
                w-full 
                h-[4.44em] 
                text-[1.125em] 
                leading-[142%] 
                rounded-[0.88em] 
                border-2 
                border-[#eaebeb] 
                px-[1.42em] 
                pt-[2.12em] 
                pb-[0.47em] 
                bg-white 
                text-black 
                truncate
                relative
                ${zInput ?? 'z-[0]'}
            `}
				onChange={onChange}
			/>
			{error && (
				<span className='text-justify text-sm text-red-500'>{error}</span>
			)}
			{withButton && (
				<div
					className='
                    absolute right-[4px] top-[4px] w-[300px]
                    h-[4.44em] 
                    rounded-[0.88em] 
                    border-2 
                    border-[#eaebeb] 
                    bg-[#313638] 
                    text-white 
                    cursor-pointer
                    flex 
                    items-center 
                    justify-between 
                    px-[1.42em]
										z-[3]
                '
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className='flex items-center gap-3'>
						<img
							src={selectedCrypto?.icon}
							alt={selectedCrypto?.symbol}
							className='w-6 h-6'
						/>
						<div className='flex flex-col'>
							<span className='text-gray-400 text-sm'>
								{selectedCrypto?.name}
							</span>
							<span>{selectedCrypto?.symbol}</span>
						</div>
					</div>
					{isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
				</div>
			)}
			{isOpen && (
				<div
					ref={dropdownRef}
					className='
                    absolute 
                    left-0 
                    right-0
										top-[60px] 
                    bg-white 
                    rounded-[0.88em] 
                    border-2 
                    border-[#eaebeb] 
                    shadow-lg
										transition-opacity duration-300
                    z-1
                '
				>
					<div className='p-4 mt-[20px] '>
						<input
							type='text'
							placeholder='Поиск'
							value={searchQuery}
							onChange={e => setSearchQuery(e.target.value)}
							className='
													w-full 
													h-[2.5em] 
													rounded-[0.88em] 
													border-2 
													border-[#eaebeb] 
													px-4
													text-[1.125em]
											'
						/>
					</div>

					<div className='max-h-[300px] overflow-y-auto'>
						{cryptoOptions
							.filter(
								option =>
									option.name
										.toLowerCase()
										.includes(searchQuery.toLowerCase()) ||
									option.symbol
										.toLowerCase()
										.includes(searchQuery.toLowerCase())
							)
							.map(option => (
								<button
									key={option.id}
									className='
															w-full 
															px-4 
															py-3 
															flex 
															items-center 
															gap-3 
															hover:bg-gray-50 
															transition-colors
													'
									onClick={() => {
										onCurrencyChange(option?.symbol)
										setIsOpen(false)
										setSearchQuery('')
									}}
								>
									<img
										src={option.icon}
										alt={option.symbol}
										className='w-6 h-6'
									/>
									<span>
										{option.name} {option.symbol}
									</span>
								</button>
							))}
					</div>
				</div>
			)}
		</div>
	)
}
