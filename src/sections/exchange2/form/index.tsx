import { ChangeEvent, FormEvent } from 'react'
import Input from './Input'
import { RiExchangeBoxFill } from 'react-icons/ri'
import { FormErrors } from '../types'

interface FormProps {
	handleSwapCurrencies: () => void
	amount: number
	fromCurrency?: string
	toCurrency?: string
	exchangeRate: number
	email?: string
	address?: string
	errors?: FormErrors
	handleAmountChange: (e: ChangeEvent<HTMLInputElement>) => void
	handleFromCurrencyChange: (symbol: string) => void
	handleToCurrencyChange: (symbol: string) => void
	setEmail: (email: string) => void
	setAddress: (address: string) => void
	handleSubmit: (e: FormEvent) => void
}

export default function Form({
	handleSwapCurrencies,
	amount,
	fromCurrency,
	toCurrency,
	exchangeRate,
	email,
	address,
	errors,
	handleAmountChange,
	handleFromCurrencyChange,
	handleToCurrencyChange,
	setEmail,
	setAddress,
	handleSubmit,
}: FormProps) {
	return (
		<form className='w-full flex flex-col gap-2' onSubmit={handleSubmit}>
			<div className='flex gap-3 items-center'>
				<Input
					label='Отдаю'
					type='number'
					currency={fromCurrency}
					withButton
					value={amount}
					onChange={handleAmountChange}
					onCurrencyChange={handleFromCurrencyChange}
					zInput='z-[2]'
					error={errors?.amount}
				/>
				<div
					className='w-[50px] h-[50px] cursor-pointer'
					onClick={handleSwapCurrencies}
				>
					<RiExchangeBoxFill size={50} />
				</div>
				<Input
					label='Получаю'
					type='number'
					withButton
					currency={toCurrency}
					disabled
					value={amount * exchangeRate}
					onCurrencyChange={handleToCurrencyChange}
					zInput='z-[2]'
				/>
			</div>
			<div className='flex gap-3 items-center'>
				<Input
					label='Email'
					type='email'
					placeholder='Ваш email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					zIndex='0'
					error={errors?.email}
				/>
				<Input
					label='Адрес кошелька в сети Dogecoin'
					placeholder='Адрес кошелька Dogecoin'
					type='text'
					value={address}
					onChange={e => setAddress(e.target.value)}
					zIndex='0'
					error={errors?.address}
				/>
			</div>
			<button
				className='w-fit h-[5em] bg-[#f06543] px-[1.5em] rounded-2xl text-white cursor-pointer my-0 mx-auto'
				type='submit'
			>
				Перейти к оплате
			</button>
		</form>
	)
}
