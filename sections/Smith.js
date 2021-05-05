import React from 'react'
import { Flex, Heading, Box } from '@chakra-ui/react'
import Image from 'next/image'

export const Smith = (props) => {

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
				<Heading as='h1' size='xl'>
					Fairly distributed
				</Heading>
				<Box size='md' fontWeight='normal' textAlign='justify'>
				 An impartially divided share is distributed daily. <i>No pre-mine. No pre-sale. Full transparency.</i> Every Veth in the world was paid for by Ethereum. And you can see how much.
				 Either&nbsp;burn Ether for Vether or buy it on the open market.
				</Box>
			</Flex>
			<Flex {...style}>
				<Image
					width='487px'
					height='486px'
					src='/assets/svg/smith.svg'
				/>
			</Flex>
		</Flex>
	)
}
