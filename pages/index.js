import React from 'react'
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
			<Header p={{ base: '1.2rem 1rem', md: '1.2rem 1.5rem' }}/>
			<Box maxWidth='75rem' m='0 auto' p={{ base: '0 1.25rem', md: '0 2.5rem' }}>
				<Hero/>
				<Dragon/>
				<Phoenix/>
				<Star/>
				<Smith/>
			</Box>
			<Footer/>
		</>
	)
}

export default Home