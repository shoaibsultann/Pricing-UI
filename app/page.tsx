'use client'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })
import { ChakraProvider, Heading } from '@chakra-ui/react'
import Features from './features'
import Header from './Header'
import Practice from './practice'
import Pricing from './Pricing'

export default function Home() {
  return (
    // chakara is called component library
    <ChakraProvider>
      {/* <Practice/> */}
      <Header />
      <Pricing/>
      <Features/>
    </ChakraProvider>
    
  )
}
