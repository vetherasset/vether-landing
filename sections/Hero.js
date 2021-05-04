import React from 'react'
import { Flex, Heading, Button } from '@chakra-ui/react'
import Image from 'next/image'

export const Hero = (props) => {

	const style = {
		w: '50%',
		h: '700px',
		flexFlow: 'column',
		justifyContent: 'center',
	}

	return (
		<Flex {...props}>
			<Flex {...style}>
				<Heading as='h1' size='xl'>
					A strictly-scarce<br/>Ethereum-based asset
				</Heading>
				<Heading as='h2' size='md' fontWeight='normal'>
					Store of Value with a novel approach to proving value.
				</Heading>
				<Button
					width='130px'
					variant='outline'
				>
					{'Let\'s burn'}
				</Button>
			</Flex>
			<Flex {...style}>
				<Image
					width='487px'
					height='486px'
					src='/assets/svg/hero.svg'
				/>
			</Flex>
		</Flex>
	)
}
