import React from 'react'
import { Flex, Button } from '@chakra-ui/react'

import { Logotype } from './Logotype'

export const Header = (props) => {

	const style = {
		size: 'md',
		minWidth: 'initial',
		fontSize: { base: '0.65rem', sm: 'sm' },
	}

	return (
		<Flex {...props} maxWidth='75rem' m='1.5rem auto 0 auto'>
			<Flex w='50%'>
				<Logotype margin='0 8px 0'/>
			</Flex>
			<Flex w='50%'
				justifyContent='end'
				alignItems='center'
			>
				<Button
					{...style}
					variant='solid'
				>
					Open Dapp
				</Button>
			</Flex>
		</Flex>
	)
}
