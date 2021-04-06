import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'

export const Logotype = (props) => {


	return (
		<Box {...props}>
			<Link href='/'>
				<a>
					<Image
						width='146.31px'
						height='54px'
						src='/assets/svg/logotype.svg'
					/>
				</a>
			</Link>
		</Box>
	)
}
