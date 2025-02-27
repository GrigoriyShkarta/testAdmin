import { useState } from 'react'
import {
	MIN_AMOUNT,
	EMAIL_REGEX,
	MIN_ADDRESS_LENGTH,
} from '../sections/exchange2/constants'
import { ExchangeFormData } from '../sections/exchange2/types'
import { FormErrors } from '../types/types'

export const useFormValidation = () => {
	const [errors, setErrors] = useState<FormErrors>({})

	const validateForm = (data: ExchangeFormData): boolean => {
		const newErrors: FormErrors = {}

		if (!data.amount || data.amount <= MIN_AMOUNT) {
			newErrors.amount = 'Введите корректную сумму'
		}

		if (!data.email || !EMAIL_REGEX.test(data.email)) {
			newErrors.email = 'Введите корректный email'
		}

		if (!data.address || data.address.trim().length < MIN_ADDRESS_LENGTH) {
			newErrors.address = 'Введите корректный адрес кошелька'
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	return { errors, validateForm }
}
