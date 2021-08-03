import React from 'react'
import { Flex, Button, useBreakpointValue } from '@chakra-ui/react'
import { Logotype } from './Logotype'
import { useRouter } from 'next/router'
import defaults from '../common/defaults'

export const Header = (props) => {

	const router = useRouter()

	const push = (e, href) => {
  	e.preventDefault()
		router.push(href)
	}

	const open = (href) => {
		const w = window.open(href, '_blank', 'noopener,noreferrer')
		if (w) w.opener = null
	}

	const style = {
		fontSize: '1rem',
		minWidth: 'initial',
		_notLast: {
			marginRight: '3rem',
		},
	}

	const link = {
		lineHeight: '48px',
	}

	const size = useBreakpointValue({
		base: 'md',
		md: 'lg',
	})

	return (
		<Flex {...props}
			p={{ base: '1.2rem 1rem', md: '1.2rem 1.5rem' }}
			maxWidth='75rem'
			m='1.5rem auto 0 auto'
		>
			<Flex w='50%'>
				<Logotype margin='0 8px 0'/>
			</Flex>
			<Flex w='50%'
				last='true'
				justifyContent='flex-end'
				alignItems='center'
				flexFlow='row'
			>
				{useBreakpointValue({
					md: <>
						<Button
							size={size}
							variant='link'
							lineHeight='normal'
							onClick={(e) => push(e, 'whitepaper')}
							{...link}
							{...style}
						>
					Whitepaper
						</Button>
						<Button
							size={size}
							variant='link'
							lineHeight='normal'
							onClick={() => open(defaults.url.docs)}
							{...link}
							{...style}
						>
					Docs
						</Button>
					</>,
				})}
				<Button
					size={size}
					variant='solid'
					{...style}
					onClick={(e) => push(e, defaults.url.dapp)}
				>
					Launch Dapp
				</Button>
			</Flex>
		</Flex>
	)
}
