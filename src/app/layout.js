import { Montserrat_Alternates } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const montserratAlternates = Montserrat_Alternates({
	variable: '--font-montserrat',
	subsets: ['latin'],
	weight: [
		'100', // Thin
		'200', // ExtraLight
		'300', // Light
		'400', // Regular
		'500', // Medium
		'600', // SemiBold
		'700', // Bold
		'800', // ExtraBold
		'900', // Black
	],
	display: 'swap',
})

export const valisca = localFont({
	src: [
		{
			path: './fonts/valisca.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/valisca.woff',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-valisca',
	display: 'swap',
})

export const metadata = {
	title: 'Пряник',
	description: 'Наша любимая сладкая пряничная',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${montserratAlternates.variable} ${valisca.variable}`}>
				{children}
			</body>
		</html>
	)
}
