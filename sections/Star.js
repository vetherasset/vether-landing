import React from 'react'
import { Flex, Heading, Box } from '@chakra-ui/react'
import Image from 'next/image'

export const Star = (props) => {

	const style = {
		w: '50%',
		h: '700px',
		padding: '0 5rem',
		flexFlow: 'column',
		justifyContent: 'center',
	}

	return (
		<Flex {...props}>
			<Flex {...style}>
				<Image
					width='487px'
					height='486px'
					src='/assets/svg/star.svg'
				/>
			</Flex>
			<Flex {...style}>
				<Heading as='h1' size='xl'>
					Ethereum-based
				</Heading>
				<Box size='md' fontWeight='normal' textAlign='justify'>
				Native to Ethereum, the more Vether’s worth, the scarcer Ethereum becomes. They’re naturally symbiotic.
				If&nbsp;Ethereum is the invisible backbone of a decentralized world, then Vether is the container of Ethereum’s creative value.
				The&nbsp;more sustained value that’s created on it, the&nbsp;more it’s worth.
				</Box>
			</Flex>
		</Flex>
	)
}
