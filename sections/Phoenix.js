import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'

export const Phoenix = (props) => {

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
					Proof of Value
				</Heading>
				<Heading as='h2' size='md' fontWeight='normal' textAlign='justify'>
					Participants compete to purchase it by burning capital on-chain. As a result, all units of Vether are acquired at-cost.
					There was no pre-mine and anyone with Ethereum can take part in the burning process to “mine” more Veth.
					This&nbsp;mechanism is called Proof-of-Value.
				</Heading>
			</Flex>
			<Flex {...style}>
				<Image
					width='487px'
					height='486px'
					src='/assets/svg/phoenix.svg'
				/>
			</Flex>
		</Flex>
	)
}
