interface WalletInfoProps {
	account: string
	balance: string
}

export default function WalletInfo({ account, balance }: WalletInfoProps) {
	return account ? (
		<div className='flex flex-col gap-1'>
			<p>Account: {account}</p>
			<p>Balance: {balance}</p>
		</div>
	) : (
		<p>Wallet not connected</p>
	)
}
