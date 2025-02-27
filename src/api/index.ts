import config from '../config'

const { CRYPTO_KEY, CRYPTO_URL } = config

interface CryptoPrice {
	[key: string]: number
}

export const getCryptoExchangeRate = async (
	fromCurrency: string,
	toCurrency: string
): Promise<number> => {
	try {
		const response = await fetch(
			`${CRYPTO_URL}/data/price?fsym=${fromCurrency}&tsyms=${toCurrency}&api_key=${CRYPTO_KEY}`
		)
		const data: CryptoPrice = await response.json()
		return data[toCurrency]
	} catch (error) {
		console.error('Error fetching exchange rate:', error)
		throw error
	}
}
