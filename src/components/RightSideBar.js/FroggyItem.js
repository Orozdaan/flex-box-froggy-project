/* eslint-disable no-undef */
import React from 'react'
import styled from 'styled-components'

const FroggyItem = ({ color }) => {
   return (
      <DivFroggy>
         <DivBg color={color} />
      </DivFroggy>
   )
}
const DivFroggy = styled.div`
   position: relative;
   width: 20%;
   height: 20%;
   overflow: hidden;
`
const DivBg = styled.div`
   width: 100%;
   height: 100%;
   background-image: ${({ color }) => {
      if (color === 'green') {
         ;('var(--froggy-green)')
      } else if (color === 'red') {
         ;('var(--froggy-red)')
      } else {
         ;('var(--froggy-yellow)')
      }
   }};
   //   color === 'green'
   //      ? 'var(--froggy-green)'
   //      : color === 'red'
   //      ? 'var(--froggy-red)'
   //      : 'var(--froggy-yellow)'};
   background-position: center center;
   background-size: contain;
   background-repeat: no-repeat;
   animation: puls 1s linear infinite;
   transform: scale(1);
   @keyframes puls {
      0% {
         transform: scale(1);
      }
      10% {
         transform: scale(1, 1);
      }
      20% {
         transform: scale(0.9);
      }
   }
`

export default FroggyItem
