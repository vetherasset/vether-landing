import React from 'react'
import { Flex, Grid, Heading, GridItem, Link } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import defaults from '../common/defaults'

export const Footer = (props) => {

	const router = useRouter()

	const push = (e, href) => {
  	e.preventDefault()
		router.push(href)
	}

	return (
		<>
			<Flex {...props}
				width='100%'
				height='auto'
				flexDirection='column'
				m='0 auto'
				fontWeight='300'
				p={{ base: '5.5rem 1.5rem', md: '10rem 1.5rem' }}>
				<Grid
					width='100%'
					maxWidth='70rem'
					m='0 auto'
					templateRows={{ base: 'repeat(2, 1fr)', sm: 'repeat(1, 1fr)' }}
					templateColumns={{ base: 'repeat(3, 1fr)', sm: 'repeat(7, 1fr)' }}
					gap='5'
				>
					<GridItem colSpan={1} textAlign={{ base: 'center', sm: 'left' }}>
						<Heading as='h3' size='sm'>Resources</Heading>
						<ul style={{ listStyleType: 'none' }}>
							<li><Link onClick={(e) => push(e, defaults.url.dapp)}>Launch Dapp</Link></li>
							<li><Link isExternal href={defaults.url.docs}>Docs</Link></li>
							<li><Link onClick={(e) => push(e, 'whitepaper')}>Whitepaper</Link></li>
						</ul>
					</GridItem>
					<GridItem colSpan={1} textAlign={{ base: 'center', sm: 'left' }}>
						<Heading as='h3' size='sm'>Media</Heading>
						<ul style={{ listStyleType: 'none' }}>
							<li><Link isExternal href={defaults.url.etherscan}>Etherscan</Link></li>
							<li><Link isExternal href={defaults.url.coingecko}>Coingecko</Link></li>
						</ul>
					</GridItem>
					<GridItem colSpan={1} textAlign={{ base: 'center', sm: 'left' }}>
						<Heading as='h3' size='sm'>Exchange</Heading>
						<ul style={{ listStyleType: 'none' }}>
							<li><Link isExternal href={defaults.url.uniswap}>Uniswap</Link></li>
						</ul>
					</GridItem>
					<GridItem colSpan={{ base: '3', sm: '4' }} textAlign={{ base: 'center', sm: 'right' }}>
						<Heading as='h3' size='sm'>Community</Heading>
						<ul style={{ listStyleType: 'none' }}>
							<li><Link isExternal href={defaults.url.discord}>Discord</Link></li>
							<li><Link isExternal href={defaults.url.telegram}>Telegram</Link></li>
							<li><Link isExternal href={defaults.url.github}>Github</Link></li>
						</ul>
					</GridItem>
				</Grid>
			</Flex>
		</>
	)
}
