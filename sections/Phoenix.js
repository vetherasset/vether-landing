import React from 'react'
import { Flex, Heading, Box } from '@chakra-ui/react'

export const Phoenix = (props) => {

	const style = {
		w: '50%',
		minH: '615px',
		padding: { base: '0', md: '0 1.5rem', lg: '0 5rem' },
		flexFlow: 'column',
		justifyContent: 'center',
	}

	return (
		<Flex {...props}>
			<Flex {...style}>
				<Heading as='h1' size='xl'>
					Decentralized
				</Heading>
				<Box size='md' fontWeight='normal' textAlign='justify'>
					No one can control it and there’s no blacklist. Every day a&nbsp;portion gets released to whoever burns Ether for it.
					This&nbsp;mechanism is called <b>Proof-of-Value</b>.
				</Box>
			</Flex>
			<Flex {...style}>
				<img
					width='487px'
					height='486px'
					src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 501.4 501.4'%3E%3Cg transform='translate(-343 -174)'%3E%3Cpath fill='none' stroke='%23ffdc73' stroke-miterlimit='10' stroke-width='1.9' d='M360 191h465v465H360z' clip-rule='evenodd'/%3E%3Ccircle cx='594.1' cy='425.2' r='250' fill='none' stroke='%23ffbf00' stroke-miterlimit='10' stroke-width='1.5' clip-rule='evenodd'/%3E%3Cg fill='none' stroke='%23ffdc73' stroke-miterlimit='10' stroke-width='2.8' clip-rule='evenodd'%3E%3Cpath d='M746 319l-15 17c-4 4-9 8-15 10l9-32 2-11c1-8-1-14-2-21-1-9-4-18-8-26-5-9-12-16-23-19-14-3-7 3-2 12 6 10 11 20 12 32 2 13-1 26-8 36-10 13-22 24-34 34-9 7-17 14-22 24-3 5-5 11-4 17 13-10 24-24 41-30l-1 3-7 10c-5 6-9 13-10 22h2l10-7c9-7 18-12 29-16l11-4v1l-1 1-2 3c-15 19-35 32-57 43-3 1-7 3-9 7 30 0 55-12 76-33 22-22 33-47 33-78l-5 5zM500 253c-7 12-11 25-10 39 1 12 5 23 13 31l16 16 27 25c7 7 12 16 13 26l1 3-8-7-21-17-12-7-1 1 3 6 9 12a29 29 0 015 16v1c-16-11-31-24-51-27h-1l7 10c10 10 21 18 33 25l28 17 1 2c-26 0-49-9-68-26-27-22-41-50-42-85 5 2 8 6 11 9 4 5 7 10 12 14 3 4 8 7 13 9l-3-11-6-30 1-24c1-13 5-24 14-34 7-6 16-11 24-11 3 0-7 15-8 17z'/%3E%3Cpath d='M621 330c8-5 18-8 27-11l2-1-6-5c-15-6-28-14-45-12l-10-22-4-25c-3 5-6 10-6 16-1 8 2 15 7 22l8 9v3l-2 3-5-4c-9-8-15-18-19-29l-5-10-1 1v1c-2 10 0 19 6 27 5 6 10 11 17 14l6 3-3 5c-11-5-22-12-30-22-1 6 1 11 4 15 4 5 10 7 17 8h8l-6 11a69 69 0 00-5 66c4 11 9 21 10 33 1 8 0 17-4 25-3 6-7 10-12 14-2 2-8 8-2 6 6-1 12-4 16-8 9-6 14-15 15-25 2-13-1-25-5-37l-6-21c-3-10-1-21 1-31 3-10 7-19 16-26 4-3 9-5 15-6l-2 2-11 10c-10 9-17 21-16 35 0 11 3 22 9 32l6 9 3 3 1 3s0 0 0 0l2 2c11 11 6 52 17 30 6-10 5-21 0-31l-13-22c-5-9-11-17-12-27-1-5-1-10 1-15 3-8 9-13 16-18z'/%3E%3C/g%3E%3Cpath fill='%23ffbf00' fill-rule='evenodd' d='M616 635c9-6 17-14 23-24l14-27c7-15 13-31 21-44 6-11 14-20 23-27 10-7 20-12 31-15h4v1l-7 5c-9 8-18 16-26 26-8 11-14 24-16 38v2c9-10 18-22 31-25l-4 4-13 18-17 26c-6 10-14 18-22 25-11 8-22 13-34 15l-8 2zM578 636c-9-6-17-15-22-25l-13-28c-6-16-11-32-19-46-6-11-13-20-22-27-9-8-20-14-30-18h-4v1l6 6c9 8 18 16 25 27 7 12 13 24 15 39v2c-10-11-18-23-31-27l5 4 12 19 15 27c6 10 13 19 22 27 10 9 21 14 33 17l8 2z' clip-rule='evenodd'/%3E%3Cpath fill='%23ffc315' fill-rule='evenodd' d='M650 536c5-5 10-10 13-17l7-17 10-29a64 64 0 0131-30l2-1v1l-4 4c-5 5-10 11-14 18s-7 15-8 24v1c5-7 10-15 18-18l-3 3-7 12-9 17c-3 6-7 12-12 17-6 6-12 10-19 13l-5 2z' clip-rule='evenodd' opacity='.5'/%3E%3Cpath fill='%23ffbf00' fill-rule='evenodd' d='M629 498l2-5 2-5 1-8a17 17 0 017-9l-1 1-3 6-1 6 4-5v1l-2 3-1 5-3 5-4 4-1 1z' clip-rule='evenodd'/%3E%3Cpath fill='%23ffbf00' fill-rule='evenodd' d='M605 438v13l9 36c5 15 13 28 9 46l3 1 12-24c14 49-4 105-33 112 10-11 15-25 16-42l-14 19-3-24-6-22c-6 14-14 27-9 45l-2 1-12-21-2 1 11 40c-27-8-43-67-27-110l7 28c5-20 15-36 25-54 6-11 8-25 12-37l2-8h2z' clip-rule='evenodd'/%3E%3Cpath fill='%23e0aa00' fill-rule='evenodd' d='M649 500c3-4 4-7 5-12l1-11 2-17a39 39 0 0112-23h1l-2 3-5 13v15c2-5 3-10 7-14l-1 2-2 8-2 11-4 12-9 11-3 2z' clip-rule='evenodd' opacity='.5'/%3E%3Cpath fill='%23ffc315' fill-rule='evenodd' d='M547 536c-5-5-10-10-13-17l-7-17c-3-10-6-20-11-29a64 64 0 00-30-30l-2-1v1l3 4c6 5 11 11 15 18s7 15 8 24v1c-6-7-10-15-18-18l3 3 7 12 8 17 13 17c5 6 12 10 19 13l5 2z' clip-rule='evenodd' opacity='.5'/%3E%3Cpath fill='%23ffbf00' fill-rule='evenodd' d='M568 498l-3-5-1-5-1-8a17 17 0 00-7-9h-1l1 1 3 6 1 6-4-5 1 1 1 3 2 5 2 5 5 4 1 1z' clip-rule='evenodd'/%3E%3Cpath fill='%23e0aa00' fill-rule='evenodd' d='M547 500c-2-4-4-7-4-12l-1-11-2-17a39 39 0 00-12-23h-1l1 3 5 13c2 4 2 9 1 14v1c-2-5-3-10-7-14l1 2 2 8 2 11 4 12c2 5 5 8 9 11l2 2zM650 536c5-5 10-10 13-17l7-17 10-29a64 64 0 0131-30l2-1v1l-4 4c-5 5-10 11-14 18s-7 15-8 24v1c5-7 10-15 18-18l-3 3-7 12-9 17c-3 6-7 12-12 17-6 6-12 10-19 13l-5 2z' clip-rule='evenodd' opacity='.5'/%3E%3Cpath fill='%23ffc315' fill-rule='evenodd' d='M547 536c-5-5-10-10-13-17l-7-17c-3-10-6-20-11-29a64 64 0 00-30-30l-2-1v1l3 4c6 5 11 11 15 18s7 15 8 24v1c-6-7-10-15-18-18l3 3 7 12 8 17 13 17c5 6 12 10 19 13l5 2z' clip-rule='evenodd' opacity='.5'/%3E%3Cpath fill='none' stroke='%23ffdc73' stroke-miterlimit='10' stroke-width='1.9' d='M761 239l36-46v86' clip-rule='evenodd'/%3E%3Cpath fill='none' stroke='%23ffc315' stroke-miterlimit='10' stroke-width='1.9' d='M761 612l36 41v-82M425 241l-38-48v92' clip-rule='evenodd'/%3E%3Cpath fill='none' stroke='%23ffdc73' stroke-miterlimit='10' stroke-width='1.9' d='M425 609l-38 44v-87' clip-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E"
				/>
			</Flex>
		</Flex>
	)
}
