import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../FakeData.json'

function Validator() {
    const {address} = useParams()
    let score = Data[address].credit + ((Data[address].discord) *.1) + ((Data[address].reddit) * .1)
  return (
    <Flex flexDirection={'column'}>
        <div style={{flex:1}}> Wallet Address: {address}</div>
        <div style={{flex:1}}>Chain Name: {Data[address].chainName}</div>
        <div style={{flex:1}}>Credit Score: {Data[address].credit}</div>
        <div style={{flex:1}}>Discord Score: {Data[address].discord}</div>
        <div style={{flex:1}}>Reddit Score: {Data[address].reddit}</div>
        <div>Overall Score: {score}</div>
    </Flex>
  )
}

export default Validator