import React from 'react'
import { Flex, Grid, Heading, GridItem, Link } from '@chakra-ui/react'

export const Footer = (props) => {

	return (
		<>
			<Flex {...props}>
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
							<li><Link isExternal href='https://wp.vetherasset.io/'>Whitepaper</Link></li>
							<li><Link isExternal href='https://docs.vetherasset.io/'>Docs</Link></li>
							<li><Link isExternal href='https://github.com/vetherasset/vether-branding'>Branding</Link></li>
						</ul>
					</GridItem>
					<GridItem colSpan={1} textAlign={{ base: 'center', sm: 'left' }}>
						<Heading as='h3' size='sm'>Media</Heading>
						<ul style={{ listStyleType: 'none' }}>
							<li><Link isExternal href='https://etherscan.io/token/0x4Ba6dDd7b89ed838FEd25d208D4f644106E34279'>Etherscan</Link></li>
							<li><Link isExternal href='https://www.coingecko.com/en/coins/vether'>Coingecko</Link></li>
						</ul>
					</GridItem>
					<GridItem colSpan={1} textAlign={{ base: 'center', sm: 'left' }}>
						<Heading as='h3' size='sm'>Exchange</Heading>
						<ul style={{ listStyleType: 'none' }}>
							<li><Link isExternal href='https://uniswap.exchange/swap/0x4ba6ddd7b89ed838fed25d208d4f644106e34279'>Uniswap</Link></li>
						</ul>
					</GridItem>
					<GridItem colSpan={{ base: '3', sm: '4' }} textAlign={{ base: 'center', sm: 'right' }}>
						<Heading as='h3' size='sm'>Community</Heading>
						<ul style={{ listStyleType: 'none' }}>
							<li><Link isExternal href='https://discord.gg/vaderprotocol'>Discord</Link></li>
							<li><Link isExternal href='https://t.me/vaderprotocol'>Telegram</Link></li>
							<li><Link isExternal href='https://github.com/vetherasset/'>Github</Link></li>
						</ul>
					</GridItem>
				</Grid>
			</Flex>
		</>
	)
}
