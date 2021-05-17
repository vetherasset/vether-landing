import React from 'react'
import Head from 'next/head'
import { Box, Heading, Link, useBreakpointValue } from '@chakra-ui/react'

const WhitePaper = () => {

	return (
		<>
			<Head>
				<title>Vether - A strictly-scarce Ethereum based asset.</title>
			</Head>
			<Box maxWidth='55rem' m='0 auto' p={{ base: '3.3rem 1.25rem', md: '3.3rem 2.5rem' }}>
				<Heading as='h1' size='md'>WHITEPAPER</Heading>
				<Heading as='h2' size='sm' textAlign='center' textStyle='noLigs'>
					Vether: A strictly-scarce Ethereum-based asset
				</Heading>
				<Box as='p' textAlign='justify' textStyle='p' p='0 3rem'>
					Vether is designed to be a store-of-value with properties of strict scarcity,
					unforgeable costliness and a fixed emission schedule. Vether mimics characteristics of Bitcoin,
					where miners compete to expend capital to acquire newly-minted coins and chase ever-decreasing margins.
					Instead of expending capital, Vether participants compete to purchase it by destroying capital on-chain.
					As a result, all units of Vether are acquired at-cost and by anyone. This mechanism is called Proof-of-Value.
				</Box>

				<Heading as='h2' size='xs'>Introduction</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>
				When a new monetary asset is created the key problem is a matter of distribution - how to fairly distribute it
				to a wide number of participants such that anyone can acquire it and all units are distributed at-cost.
				Bitcoin&apos;s entire fixed-supply is being distributed fairly and at-cost, however Ethereum and the tokens
				created on it have not undergone the same process. As such, the value held by Ethereum and its tokens
				continually inflate as more are created at various cost with unpredictable distribution.
				Vether is designed to return scarcity properties to Ethereum, captured in a single fixed-supply asset,
				emitted in a way that continually absorbs value, at the same time as being distributed fairly and at-cost.
				</Box>

				<Heading as='h2' size='xs' textStyle='noLigs'>Acquiring Vether</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>
				Vether can only be acquired (mined) by destroying an asset with existing value, such as Ether or ERC-20 tokens.
				All value is measured in units of Ether, and token value is derived from liquidity-pool markets.
				Unpriced tokens have their value derived from the cost of gas used to destroy them.
				All assets are destroyed by sending them to an unspendable Ethereum address.
				</Box>

				<Heading as='h2' size='xs'>Emission Period</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>
				Vether is auctioned off in Days of around 23.5 hours. 244 Days make up 1 Era.
				The 12th Era is 1064 Days long and the total Emission Period is 10 years. The overlapping time periods
				ensure Day and Era changes happen across different time periods and seasons globally.
				The Emission begins with 2048 per day, which halves each Era until it is 1 Vether per day in the 12th Era.
				After exactly 10 years the total emitted supply of Vether will be exactly 1,000,000 and cannot ever be increased.
				</Box>

				<Heading as='h2' size='xs'>Network Fee</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>
				Each transaction of Vether incurs a small fee of 10 basis points, which is returned to the contract.
				These fees accrue and will be emitted only after the Emission Period, at 1 Vether per Day.
				At a monetary velocity of 1, enough fees accrue in the first 10 years to power emissions for another 30 years.
				At higher velocities, the fee acts as a deflationary force.
				</Box>

				<Heading as='h2' size='xs'>Stock-To-Flow [3]</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>
				Vether begins with a stock-to-flow of 1 that doubles each Era to be 2670 after 10 years.
				Since all units are acquired at-cost and emitted continuously, if Vether develops a market the halvings
				will function to reduce supply and increase value. This will reinforce Vether as a store-of-value.
				After the Emission Period, accrued fees provide on-going flow that fixes the stock-to-flow at a minimum of 2670 indefinitely.
				Thus, as long as there is economic activity, Vether can absorb value from Ethereum-based assets in perpetuity.
				</Box>

				<Heading as='h2' size='xs'>Conclusion</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>
				Vether is a strictly-scarce asset that has a fixed emission schedule and can only be acquired at-cost.
				Halvings are built in to the emission schedule to target a stock-to-flow of 2670 after 10 years.
				Beyond 10 years accrued fees power the emission, and thus the contract will run for as long as Ethereum exists.
				If Vether attains a monetary premium it will become one of the most valuable assets on the Ethereum network,
				with the widest and fairest distribution.
				</Box>

				<Heading as='h2' size='xs'>Appendix A - Emission Schedule</Heading>
				<Box as='p'>The Emission Schedule is as follows:</Box>
				<br/>
				<EmissionTable/>
				<br />

				<Heading as='h2' size='xs'>Appendix B - Fee Era</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>
				The Fee Period activates after the 12th Era, and begins to emit all accrued fees.<br />
				The emission of fees is a maximum of 1 Vether per Day.
				</Box>

				<Heading as='h2' size='xs'>Appendix C - Contract Integrity</Heading>
				<Box as='p' textAlign='justify' textStyle='p'>
				- The contract is a compliant SafeMath ERC-20 that mints all 1 million Vether during construction. <br />
				- There are no owned or whitelisted functions, and no ability to change the contract&apos;s parameters. <br />
				- The UniSwap Factory interface is used to return token exchange addresses. <br />
				- The UniSwap Exchange interface is used to enable token to ether transfers. <br />
				- The contract uses blocktime instead of blockheight since the Ethereum block generation speed can change.<br />
				- The UpdateEmission() function is called where possible to ensure frequent Emission Schedule updates.
				</Box>

				<Heading as='h2' size='xs'>References</Heading>
				<Box as='p' textAlign='justify' fontStyle='italic' textStyle='p'>
					[1] N. Szabo, &ldquo;Antiques, time, gold, and bit gold&rdquo;, <Link href='http://unenumerated.blogspot.com/2005/10/antiques-time-gold-and-bit-gold.html' isExternal>
						http://unenumerated.blogspot.com/2005/10/antiques-time-gold-and-bit-gold.html</Link>, 2005<br />
					[2] S. Nakamoto, &ldquo;Bitcoin: A Peer-to-Peer Electronic Cash System&rdquo;, <Link href='https://bitcoin.org/bitcoin.pdf' isExternal>https://bitcoin.org/bitcoin.pdf</Link>, 2008<br />
					[3] PlanB, &ldquo;Modeling Bitcoin&apos;s Value with Scarcity&rdquo;, <Link href='https://medium.com/@100trillionUSD/modeling-bitcoins-value-with-scarcity-91fa0fc03e25' isExternal>https://medium.com/@100trillionUSD/modeling-bitcoins-value-with-scarcity-91fa0fc03e25</Link>, 2019
				</Box>
			</Box>
		</>
	)
}

const EmissionTable = () => {

	return (
		<>
			{useBreakpointValue({
				base: <>
					<Box fontFamily='Courier New' fontSize='10px' m='0 auto' textAlign='center'>
						<Box as='p'>|-----|--------|-------|-------|-----------|</Box>
						<Box as='p'>| Era | &nbsp;&nbsp;Days | Total | Years | Per Cycle |</Box>
						<Box as='p'>|-----|--------|-------|-------|-----------|</Box>
						<Box as='p'>| &nbsp;&nbsp;1 | &nbsp;&nbsp;&nbsp;244 | &nbsp;&nbsp;244 | &nbsp;&nbsp;0.7 | &nbsp;&nbsp;&nbsp;&nbsp;2,048 |</Box>
						<Box as='p'>| &nbsp;&nbsp;2 | &nbsp;&nbsp;&nbsp;244 | &nbsp;&nbsp;488 | &nbsp;&nbsp;1.3 | &nbsp;&nbsp;&nbsp;&nbsp;1,024 | </Box>
						<Box as='p'>| &nbsp;&nbsp;3 | &nbsp;&nbsp;&nbsp;244 | &nbsp;&nbsp;732 | &nbsp;&nbsp;2.0 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;512 | </Box>
						<Box as='p'>| &nbsp;&nbsp;4 | &nbsp;&nbsp;&nbsp;244 | &nbsp;&nbsp;976 | &nbsp;&nbsp;2.6 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;256 | </Box>
						<Box as='p'>| &nbsp;&nbsp;5 | &nbsp;&nbsp;&nbsp;244 | &nbsp;1420 | &nbsp;&nbsp;3.3 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;128 |</Box>
						<Box as='p'>| &nbsp;&nbsp;6 | &nbsp;&nbsp;&nbsp;244 | &nbsp;1464 | &nbsp;&nbsp;3.9 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;64 | </Box>
						<Box as='p'>| &nbsp;&nbsp;7 | &nbsp;&nbsp;&nbsp;244 | &nbsp;1708 | &nbsp;&nbsp;4.6 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32 | </Box>
						<Box as='p'>| &nbsp;&nbsp;8 | &nbsp;&nbsp;&nbsp;244 | &nbsp;1952 | &nbsp;&nbsp;5.2 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16 | </Box>
						<Box as='p'>| &nbsp;&nbsp;9 | &nbsp;&nbsp;&nbsp;244 | &nbsp;2196 | &nbsp;&nbsp;5.9 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8 | </Box>
						<Box as='p'>| &nbsp;10 | &nbsp;&nbsp;&nbsp;244 | &nbsp;2440 | &nbsp;&nbsp;6.5 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 | </Box>
						<Box as='p'>| &nbsp;11 | &nbsp;&nbsp;&nbsp;244 | &nbsp;2684 | &nbsp;&nbsp;7.2 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 | </Box>
						<Box as='p'>| &nbsp;14 | &nbsp;&nbsp;1064 | 3,748 | &nbsp;10.0 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 | </Box>
						<Box as='p'>-------------------------------------------</Box>
						<Box as='p' fontStyle='italic'>* Stock-To-Flow (the inverse of inflation)</Box>
					</Box>
				</>,
				md: <>
					<Box fontFamily='Courier New' fontSize={{ md: '12px', lg: '14px' }} textAlign='center'>
						<Box as='p'>|-----|--------|-------|-------|-----------|---------|------------|---------|-------|</Box>
						<Box as='p'>| Era | &nbsp;&nbsp;Days | Total | Years | Per Cycle | &nbsp;&nbsp;Total | Cumulative | Annual% | &nbsp;S2F* |</Box>
						<Box as='p'>|-----|--------|-------|-------|-----------|---------|------------|---------|-------|</Box>
						<Box as='p'>| &nbsp;&nbsp;1 | &nbsp;&nbsp;&nbsp;244 | &nbsp;&nbsp;244 | &nbsp;&nbsp;0.7 | &nbsp;&nbsp;&nbsp;&nbsp;2,048 | 499,714 | &nbsp;&nbsp;&nbsp;499,714 | &nbsp;&nbsp;&nbsp;154% | &nbsp;&nbsp;&nbsp;&nbsp;1 |</Box>
						<Box as='p'>| &nbsp;&nbsp;2 | &nbsp;&nbsp;&nbsp;244 | &nbsp;&nbsp;488 | &nbsp;&nbsp;1.3 | &nbsp;&nbsp;&nbsp;&nbsp;1,024 | 249,856 | &nbsp;&nbsp;&nbsp;749,568 | &nbsp;&nbsp;&nbsp;&nbsp;51% | &nbsp;&nbsp;&nbsp;&nbsp;2 |</Box>
						<Box as='p'>| &nbsp;&nbsp;3 | &nbsp;&nbsp;&nbsp;244 | &nbsp;&nbsp;732 | &nbsp;&nbsp;2.0 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;512 | 144,928 | &nbsp;&nbsp;&nbsp;874,496 | &nbsp;&nbsp;&nbsp;&nbsp;22% | &nbsp;&nbsp;&nbsp;&nbsp;5 |</Box>
						<Box as='p'>| &nbsp;&nbsp;4 | &nbsp;&nbsp;&nbsp;244 | &nbsp;&nbsp;976 | &nbsp;&nbsp;2.6 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;256 | &nbsp;62,464 | &nbsp;&nbsp;&nbsp;936,960 | &nbsp;&nbsp;&nbsp;&nbsp;10% | &nbsp;&nbsp;&nbsp;10 |</Box>
						<Box as='p'>| &nbsp;&nbsp;5 | &nbsp;&nbsp;&nbsp;244 | &nbsp;1420 | &nbsp;&nbsp;3.3 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;128 | &nbsp;31,232 | &nbsp;&nbsp;&nbsp;968,192 | &nbsp;&nbsp;&nbsp;5.0% | &nbsp;&nbsp;&nbsp;20 |</Box>
						<Box as='p'>| &nbsp;&nbsp;6 | &nbsp;&nbsp;&nbsp;244 | &nbsp;1464 | &nbsp;&nbsp;3.9 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;64 | &nbsp;15,616 | &nbsp;&nbsp;&nbsp;983,808 | &nbsp;&nbsp;&nbsp;2.4% | &nbsp;&nbsp;&nbsp;41 |</Box>
						<Box as='p'>| &nbsp;&nbsp;7 | &nbsp;&nbsp;&nbsp;244 | &nbsp;1708 | &nbsp;&nbsp;4.6 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32 | &nbsp;&nbsp;7,808 | &nbsp;&nbsp;&nbsp;991,616 | &nbsp;&nbsp;&nbsp;1.2% | &nbsp;&nbsp;&nbsp;83 |</Box>
						<Box as='p'>| &nbsp;&nbsp;8 | &nbsp;&nbsp;&nbsp;244 | &nbsp;1952 | &nbsp;&nbsp;5.2 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16 | &nbsp;&nbsp;3,904 | &nbsp;&nbsp;&nbsp;995,520 | &nbsp;&nbsp;&nbsp;0.6% | &nbsp;&nbsp;166 |</Box>
						<Box as='p'>| &nbsp;&nbsp;9 | &nbsp;&nbsp;&nbsp;244 | &nbsp;2196 | &nbsp;&nbsp;5.9 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8 | &nbsp;&nbsp;1,952 | &nbsp;&nbsp;&nbsp;997,472 | &nbsp;&nbsp;&nbsp;0.3% | &nbsp;&nbsp;333 |</Box>
						<Box as='p'>| &nbsp;10 | &nbsp;&nbsp;&nbsp;244 | &nbsp;2440 | &nbsp;&nbsp;6.5 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 | &nbsp;&nbsp;&nbsp;&nbsp;976 | &nbsp;&nbsp;&nbsp;998,448 | &nbsp;&nbsp;&nbsp;0.2% | &nbsp;&nbsp;666 |</Box>
						<Box as='p'>| &nbsp;11 | &nbsp;&nbsp;&nbsp;244 | &nbsp;2684 | &nbsp;&nbsp;7.2 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 | &nbsp;&nbsp;&nbsp;&nbsp;488 | &nbsp;&nbsp;&nbsp;998,936 | &nbsp;&nbsp;0.07% | 1,333 |</Box>
						<Box as='p'>| &nbsp;14 | &nbsp;&nbsp;1064 | 3,748 | &nbsp;10.0 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 | &nbsp;&nbsp;&nbsp;1064 | &nbsp;1,000,000 | &nbsp;&nbsp;0.04% | 2,670 |</Box>
						<Box as='p'>-------------------------------------------------------------------------------------</Box>
						<Box as='p' fontStyle='italic'>* Stock-To-Flow (the inverse of inflation)</Box>
					</Box>
				</>,
			})}
		</>
	)
}

export default WhitePaper