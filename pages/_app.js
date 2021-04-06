import React from 'react'
import PropTypes from 'prop-types'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../themes/vether'
import '../styles.css'

const Gate = ({ Component, pageProps }) => {

	Gate.propTypes = {
		Component: PropTypes.any,
		pageProps: PropTypes.any,
	}

	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default Gate