import React from 'react'
import { Flex, Heading, Box } from '@chakra-ui/react'

export const Dragon = (props) => {

	const style = {
		w: '50%',
		minH: '615px',
		padding: { base: '0', md: '0 1.5rem', lg: '0 5rem' },
		flexFlow: 'column',
		justifyContent: 'center',
	}

	return (
		<Flex {...props}>
			<Flex {...style}>
				<img
					width='487px'
					height='486px'
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