import React from 'react'
import { Flex, Box, Button, useBreakpointValue } from '@chakra-ui/react'
import { Logotype } from './Logotype'
import { useRouter } from 'next/router'
import defaults from '../common/defaults'

export const Header = (props) => {

	const router = useRouter()

	const startDapp = (e) => {
  	e.preventDefault()
		router.push(defaults.urlDapp)
	}

	const style = {
		fontSize: '1rem',
		minWidth: 'initial',
		variant: 'solid',
		float: 'right',
	}

	const size = useBreakpointValue({
		base: 'md',
		md: 'lg',
	})

	return (
		<Flex {...props} maxWidth='75rem' m='1.5rem auto 0 auto'>
			<Flex w='50%'>
				<Logotype margin='0 8px 0'/>
			</Flex>
			<Box w='50%'
				justifyContent='end'
				alignItems='center'
			>
				<Button
					size={size}
					{...style}
					onClick={startDapp}
				>
					Launch Dapp
				</Button>
			</Box>
		</Flex>
	)
}
