import React from 'react'
import Data from '../FakeData.json'

function CreditList() {
  return (
    <div>
      <div>
        {Object.entries(Data).map(([key, value]) => {
          return (
            <div style={{flexDirection: 'row'}}>
              <h4>{key}</h4>
              <h4>{value.credit}</h4>
              <h4>{value.discord}</h4>
              <h4>{value.reddit}</h4>
            </div>
          )
        })}
      </div>
    </div>
    
  )
}

export default CreditList
