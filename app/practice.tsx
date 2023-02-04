import { Heading } from '@chakra-ui/react'
import React from 'react'

export default function Practice() {
  return (
    <>
    <head>hello world</head>
      <Heading as={"h1"} color="red" fontSize="50px" >This is H1 from chakara heading</Heading>
      <Heading>This is default from chakara heading</Heading>
      <Heading as={"h2"}>This is from chakara heading</Heading>
      <Heading as={"h3"}>This is from chakara heading</Heading></>
  )
}
