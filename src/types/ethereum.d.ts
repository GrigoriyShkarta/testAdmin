import { BrowserProvider } from 'ethers'

declare global {
	interface Window {
		ethereum?: {
			request: (args: { method: string; params?: any[] }) => Promise<any>
			on: (event: string, callback: (params: any) => void) => void
			removeListener: (event: string, callback: (params: any) => void) => void
			isMetaMask?: boolean
			isConnected: () => boolean
			selectedAddress: string | null
			chainId: string
			networkVersion: string
			_state: {
				accounts: string[]
				isConnected: boolean
				isUnlocked: boolean
				initialized: boolean
			}
		}
	}
}

export {}
