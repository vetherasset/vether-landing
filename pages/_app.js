import React from 'react'
import PropTypes from 'prop-types'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../themes/vether'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const Gate = ({ Component, pageProps }) => {

	Gate.propTypes = {
		Component: PropTypes.any,
		pageProps: PropTypes.any,
	}

	return (
		<ChakraProvider theme={theme}>
			<Header/>
			<Component {...pageProps} />
			<hr style={{ width: '100%', maxWidth: '60rem', height: '1px', margin: '0 auto', opacity: '0.6', backgroundImage: 'linear-gradient(90deg,#ff65ac  0%, #FFBF00 100%)', border: 'none' }}/>
			<Footer/>
		</ChakraProvider>
	)
}

export default Gate