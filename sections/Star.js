import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
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
					Foundation for a decentralized ecosystem
				</Heading>
				<Heading as='h2' size='md' fontWeight='normal'>
					Vether is built to be the foundation for a larger decentralized ecosystem.
				</Heading>
			</Flex>
		</Flex>
	)
}
