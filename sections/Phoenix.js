import React from 'react'
import { Flex, Heading, Box } from '@chakra-ui/react'
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
					Decentralized
				</Heading>
				<Box size='md' fontWeight='normal' textAlign='justify'>
					No one can control it and there’s no blacklist. Every day a portion gets released to whoever burns Ether for it.
					This&nbsp;mechanism is called <b>Proof-of-Value</b>.
				</Box>
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
