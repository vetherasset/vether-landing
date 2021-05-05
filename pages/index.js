import React from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Hero } from '../sections/Hero'
import { Dragon } from '../sections/Dragon'
import { Phoenix } from '../sections/Phoenix'
import { Star } from '../sections/Star'
import { Smith } from '../sections/Smith'

const Home = () => {

	return (
		<>
			<Head>
				<title>Vether - A strictly-scarce Ethereum based asset.</title>
			</Head>
			<Header p={{ base: '1.2rem 1rem', md: '1.2rem 1.5rem' }}/>
			<Box maxWidth='75rem' m='0 auto' p={{ base: '0 1.25rem', md: '0 2.5rem' }}>
				<Hero/>
				<Dragon/>
				<Phoenix/>
				<Star/>
				<Smith/>
			</Box>
			<hr style={{ width: '100%', maxWidth: '60rem', height: '1px', margin: '0 auto', borderColor: '#ffdc7342' }}/>
			<Footer
				width='100%'
				height='auto'
				flexDirection='column'
				m='0 auto'
				p='10rem 1.5rem'
			/>
		</>
	)
}

export default Home