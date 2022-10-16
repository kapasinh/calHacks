import React from 'react'
import Data from '../FakeData.json'
import { Flex} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function CreditList() {
  return (
    <div>
      
      <Flex flexDirection={'column'}>
      <Flex flexDirection={'row'} alignItems={'stretch'}>
              <div style={{flex: 1, textAlign: 'left', textDecoration: 'underline'}}>Chain Name</div>
              <div style={{flex: 1, textAlign: 'left', textDecoration: 'underline'}}>Address</div>
              <div style={{flex: 0.2, textAlign: 'center', textDecoration: 'underline'}}>Credit Score</div>
              <div style={{flex: 0.2, textAlign: 'center', textDecoration: 'underline'}}>Discord Score</div>
              <div style={{flex: 0.2, textAlign: 'center', textDecoration: 'underline'}}>Reddit Score</div>
            </Flex>
        {Object.entries(Data).map(([key, value]) => {
          return (
            <Flex flexDirection={'row'} alignItems={'stretch'}>
              <Link style={{flex: 1, textAlign: 'left'}} to={`/details/${key}`}>{key}</Link>
              <div style={{flex: 1, textAlign: 'left'}}>{value.chainName}</div>
              <div style={{flex: 0.2, textAlign: 'center'}}>{value.credit}</div>
              <div style={{flex: 0.2, textAlign: 'center'}}>{value.discord}</div>
              <div style={{flex: 0.2, textAlign: 'center'}}>{value.reddit}</div>
            </Flex>
          )
        })}
      </Flex>
    </div>
    
  )
}

export default CreditList
