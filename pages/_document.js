import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Global } from '@emotion/react'
import { ColorModeScript } from '@chakra-ui/react'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="preload" href="fonts/sequel.ttf" as="font" crossOrigin="anonymous"/>
					<link rel="preload" href="fonts/average-sans-v9-latin-regular.woff2" as="font" crossOrigin="anonymous" />
					<link rel="preload" href="fonts/lato-v17-latin-300.woff2" as="font" crossOrigin="anonymous" />
					<link rel="preload" href="fonts/lato-v17-latin-300italic.woff2" as="font" crossOrigin="anonymous" />
					<link rel="preload" href="fonts/lato-v17-latin-italic.woff2" as="font" crossOrigin="anonymous" />
					<link rel="preload" href="fonts/lato-v17-latin-regular.woff2" as="font" crossOrigin="anonymous" />
					<link rel="preload" href="fonts/lato-v17-latin-700.woff2" as="font" crossOrigin="anonymous" />
					<link rel="preload" href="fonts/lato-v17-latin-700italic.woff2" as="font" crossOrigin="anonymous" />
					<Global styles={`
						html {
							background: #000;
						}
						@font-face {
							font-family: 'Heading';
							font-style: normal;
							src: url('./fonts/sequel.ttf') format('truetype');
						}
						/* average-sans-regular - latin */
						@font-face {
							font-family: 'Button';
							font-style: normal;
							font-weight: 400;
							src: local(''),
									url('./fonts/average-sans-v9-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
									url('./fonts/average-sans-v9-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
						}
						/* lato-300 - latin */
						@font-face {
							font-family: 'Body';
							font-style: normal;
							font-weight: 300;
							src: local(''),
									url('./fonts/lato-v17-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
									url('./fonts/lato-v17-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
						}
						/* lato-300italic - latin */
						@font-face {
							font-family: 'Body';
							font-style: italic;
							font-weight: 300;
							src: local(''),
									url('./fonts/lato-v17-latin-300italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
									url('./fonts/lato-v17-latin-300italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
						}
						/* lato-italic - latin */
						@font-face {
							font-family: 'Body';
							font-style: italic;
							font-weight: 400;
							src: local(''),
									url('./fonts/lato-v17-latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
									url('./fonts/lato-v17-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
						}
						/* lato-regular - latin */
						@font-face {
							font-family: 'Body';
							font-style: normal;
							font-weight: 400;
							src: local(''),
									url('./fonts/lato-v17-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
									url('./fonts/lato-v17-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
						}
						/* lato-700 - latin */
						@font-face {
							font-family: 'Body';
							font-style: normal;
							font-weight: 700;
							src: local(''),
									url('./fonts/lato-v17-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
									url('./fonts/lato-v17-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
						}
						/* lato-700italic - latin */
						@font-face {
							font-family: 'Body';
							font-style: italic;
							font-weight: 700;
							src: local(''),
									url('./fonts/lato-v17-latin-700italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
									url('./fonts/lato-v17-latin-700italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
						}
					`}/>
				</Head>
				<body>
					<ColorModeScript />
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument