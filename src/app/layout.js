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
	title: 'Пряники',
	description:
		'Наша любимая сладкая пряничная. Закажите вкусные пряники прямо сейчас!',
	keywords: ['пряники', 'сладости', 'выпечка', 'десерты'],
	authors: [{ name: 'Название компании' }],
	openGraph: {
		title: 'Пряники — вкус и уют',
		description: 'Самые вкусные домашние пряники с доставкой.',
		url: 'https://gingerbread-pi.vercel.app/',
		siteName: 'Пряники',
		images: [
			{
				url: '/col4.png',
				width: 1200,
				height: 630,
				alt: 'Пряники',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Пряники — вкус и уют',
		description: 'Самые вкусные домашние пряники с доставкой.',
		images: ['/col4.png'],
	},
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
			{ url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
			{ url: '/favicon.svg', type: 'image/svg+xml' },
		],
		apple: [{ url: '/favicon-180x180.png', sizes: '180x180' }],
	},
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
