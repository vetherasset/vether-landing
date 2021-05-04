import React from 'react'
import { Box } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Hero } from '../sections/Hero'
import { Dragon } from '../sections/Dragon'

const Home = () => {
	return (
		<>
			<Header p='1.2rem 1rem'/>
			<Box maxWidth='75rem' margin='0 auto' padding='0 1.5rem'>
				<Hero/>
				<Dragon/>
			</Box>
			<Footer/>
		</>
	)
}

export default Home