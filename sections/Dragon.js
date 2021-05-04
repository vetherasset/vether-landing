import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'

export const Dragon = (props) => {

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
					src='/assets/svg/dragon.svg'
				/>
			</Flex>
			<Flex {...style}>
				<Heading as='h1' size='xl'>
					Stock to Flow
				</Heading>
				<Heading as='h2' size='md' fontWeight='normal' textAlign='justify'>
				 Vether has properties of strict scarcity, unforgeable costliness and a <i>fixed emission schedule</i>.
				 There will only be <b>1,000,000</b> Veth ever.
				</Heading>
			</Flex>
		</Flex>
	)
}
