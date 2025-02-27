import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { ethers } from 'ethers'
import Header from './header'
import { useFormValidation } from '../../hooks/useFormValidation'
import Form from './form'
import { getCryptoExchangeRate } from '../../api'
import WalletInfo from './walletInfo'
import LinksText from './linksText'

export default function Exchange() {
	const [amount, setAmount] = useState(1)
	const [fromCurrency, setFromCurrency] = useState('BTC')
	const [toCurrency, setToCurrency] = useState('USDT')
	const [exchangeRate, setExchangeRate] = useState(0)
	const [timeLeft, setTimeLeft] = useState(30)
	const [email, setEmail] = useState('')
	const [address, setAddress] = useState('')
	// const [loading, setLoading] = useState(false)
	const [account, setAccount] = useState('')
	const [balance, setBalance] = useState('')
	const { errors, validateForm } = useFormValidation()

	useEffect(() => {
		const connectWallet = async () => {
			try {
				if (!window.ethereum) return
				const provider = new ethers.BrowserProvider(window.ethereum)
				await window.ethereum.request({ method: 'eth_requestAccounts' })
				const signer = await provider.getSigner()
				const address = await signer.getAddress()
				const balance = await provider.getBalance(address)
				const formattedBalance = ethers.formatEther(balance)

				setAccount(address)
				setBalance(Number(formattedBalance).toFixed(4))
			} catch (error) {
				console.error('Error connecting to MetaMask:', error)
			}
		}

		connectWallet()
	}, [])

	useEffect(() => {
		const fetchExchangeRate = async () => {
			// setLoading(true)
			try {
				const rate = await getCryptoExchangeRate(fromCurrency, toCurrency)
				setExchangeRate(rate)
				setTimeLeft(30)
			} catch (error) {
				console.error('Error fetching exchange rate:', error)
			} finally {
				// setLoading(false)
			}
		}

		fetchExchangeRate()

		const interval = setInterval(fetchExchangeRate, 30000)

		return () => clearInterval(interval)
	}, [fromCurrency, toCurrency])

	useEffect(() => {
		if (timeLeft > 0) {
			const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000)
			return () => clearInterval(timer)
		}
	}, [timeLeft])

	const handleSwapCurrencies = () => {
		setFromCurrency(toCurrency)
		setToCurrency(fromCurrency)
	}

	const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
		setAmount(Number(e.target.value))
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		if (!validateForm({ email, amount, address })) return
	}

	return (
		<div className='w-full rounded-[1.5em] bg-white p-[3em] shadow-[0_0.25em_0.75em_0_rgba(49,54,56,0.05)]'>
			<div className='flex flex-col gap-8'>
				<WalletInfo account={account} balance={balance} />
				<Header
					fromCurrency={fromCurrency}
					toCurrency={toCurrency}
					exchangeRate={exchangeRate}
					timeLeft={timeLeft}
				/>
				<Form
					handleSwapCurrencies={handleSwapCurrencies}
					amount={amount}
					fromCurrency={fromCurrency}
					toCurrency={toCurrency}
					exchangeRate={exchangeRate}
					handleAmountChange={handleAmountChange}
					handleFromCurrencyChange={setFromCurrency}
					handleToCurrencyChange={setToCurrency}
					setEmail={setEmail}
					email={email}
					setAddress={setAddress}
					address={address}
					handleSubmit={handleSubmit}
					errors={errors}
				/>
				<LinksText />
			</div>
		</div>
	)
}
