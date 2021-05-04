import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
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
					A strictly-scarce Ethereum-based asset
				</Heading>
				<Heading as='h2' size='md' fontWeight='normal'>
					Store of Value with a novel approach to proving value.
				</Heading>
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
