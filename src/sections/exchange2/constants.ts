import { CryptoOption } from './types'

export const TIMER_DURATION = 30
export const MIN_AMOUNT = 0
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const MIN_ADDRESS_LENGTH = 10

export const cryptoOptions: CryptoOption[] = [
	{ id: 'btc', name: 'Bitcoin', symbol: 'BTC', icon: '/bitcoin-logo.png' },
	{
		id: 'usdt-erc20',
		name: 'Tether ERC20',
		symbol: 'USDT',
		icon: '/tether-logo.png',
	},
	{ id: 'eth', name: 'Ethereum', symbol: 'ETH', icon: '/ethereum-logo.png' },
	{ id: 'ltc', name: 'Litecoin', symbol: 'LTC', icon: '/litecoin-logo.png' },
]
