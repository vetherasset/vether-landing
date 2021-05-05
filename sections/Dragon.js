import React from 'react'
import { Flex, Heading, Box } from '@chakra-ui/react'
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
				Strictly-scarce
				</Heading>
				<Box size='md' fontWeight='normal' textAlign='justify'>
				 You can’t just find it anywhere. It’s rare. Think limited edition, <i>21x rarer than Bitcoin</i>.
				 There will only be <b>1,000,000</b>&nbsp;Veth ever.</Box>
			</Flex>
		</Flex>
	)
}
