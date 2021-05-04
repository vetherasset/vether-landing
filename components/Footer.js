import React from 'react'
import { Flex, Grid, Box, Heading, GridItem } from '@chakra-ui/react'

export const Footer = (props) => {

	return (
		<>
			<hr style={{ width: '100%', maxWidth: '60rem', height: '1px', margin: '0 auto', borderColor: '#ffdc7342' }}/>
			<Flex {...props}
				width='100%'
				height='auto'
				flexDirection='column'
				m='0 auto'
				p='10rem 1.5rem'
			>
				<Grid
					width='100%'
					maxWidth='70rem'
					m='0 auto'
					templateRows='repeat(1, 1fr)'
					templateColumns='repeat(7, 1fr)'
					gap='5'
				>
					<GridItem colSpan={1}>
						<Heading as='h3' size='sm'>Resources</Heading>
						<ul style={{ listStyleType: 'none' }}>
							<li><a href='#'>Whitepaper</a></li>
							<li><a href='#'>Docs</a></li>
							<li><a href='#'>Branding</a></li>
						</ul>
					</GridItem>
					<GridItem colSpan={1}>
						<Heading as='h3' size='sm'>Media</Heading>
						<ul style={{ listStyleType: 'none' }}>
							<li><a href='#'>Coingecko</a></li>
							<li><a href='#'>Etherscan</a></li>
						</ul>
					</GridItem>
					<GridItem colSpan={1}>
						<Heading as='h3' size='sm'>Media</Heading>
						<ul style={{ listStyleType: 'none' }}>
							<li><a href='#'>Coingecko</a></li>
							<li><a href='#'>Etherscan</a></li>
						</ul>
					</GridItem>
					<GridItem colSpan={4} textAlign='right'>
						<Heading as='h3' size='sm'>Community</Heading>
						<ul style={{ listStyleType: 'none' }}>
							<li><a href='#'>Discord</a></li>
							<li><a href='#'>Telegram</a></li>
							<li><a href='#'>Github</a></li>
						</ul>
					</GridItem>
				</Grid>
			</Flex>
		</>
	)
}
