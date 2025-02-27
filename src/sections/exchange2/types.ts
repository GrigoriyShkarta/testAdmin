export interface CryptoOption {
	id: string
	name: string
	symbol: string
	icon: string
	network?: string
}

export interface FormErrors {
	amount?: string
	email?: string
	address?: string
	form?: string
}

export interface ExchangeFormData {
	address: string
	amount: number
	email: string
}
