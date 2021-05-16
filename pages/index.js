import React from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
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
			<Box maxWidth='75rem' m='0 auto' p={{ base: '0 1.25rem', md: '0 2.5rem' }}>
				<Hero/>
				<Dragon/>
				<Phoenix/>
				<Star/>
				<Smith/>
			</Box>
		</>
	)
}

export default Home