import React from 'react'
import { Flex, Heading, Box, Button } from '@chakra-ui/react'
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
					A strictly-scarce, decentralized, and fairly distributed Ethereum based asset
				</Heading>
				<Box as='h2' size='md' fontWeight='normal'>
				That stores value created by dreamers and builders. With limited supply and with technical properties that allow for even fairer distribution and transparent costs.
				</Box>
				<Button
					width='130px'
					variant='outline'
				>
					Acquire
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
