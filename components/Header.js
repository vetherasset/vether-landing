import React from 'react'
import { Flex, Spacer, Button } from '@chakra-ui/react'

import { Logotype } from './Logotype'

export const Header = (props) => {

	const style = {
		size: 'md',
		minWidth: 'initial',
		fontSize: { base: '0.65rem', sm: 'sm' },
	}

	return (
		<Flex {...props}>
			<Flex w="33%">
				<Logotype margin='3px 8px 0'/>
			</Flex>
			<Spacer />
			<Flex w="33%"
				justifyContent='space-between'
				alignItems='flex-end'
			>
				<Button
					{...style}
					variant='ghost'
				>
					Media
				</Button>
				<Button
					{...style}
					variant='ghost'
				>
					Community
				</Button>
				<Button
					{...style}
					variant='ghost'
				>
					Whitepaper
				</Button>
				<Button
					{...style}
					variant='outline'
				>
					Open Dapp
				</Button>
			</Flex>
		</Flex>
	)
}
