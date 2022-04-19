import React from 'react'
import styled from 'styled-components'

const Board = () => {
   return (
      <section>
         <StyledBoard>
            <StyledPond>
               <StyledFrog>
                  <Image />
               </StyledFrog>
            </StyledPond>
            <StyledDiv>
               <StyledLeaf>
                  <SecondImg />
               </StyledLeaf>
            </StyledDiv>
         </StyledBoard>
      </section>
   )
}

export default Board

const StyledBoard = styled.div`
   position: sticky;
   top: 0;
   width: 50vw;
   height: 50vw;
   min-width: 300px;
   min-height: 300px;
   max-width: 100vh;
   max-height: 100vh;
   overflow: hidden;
`
const StyledDiv = styled.div`
   z-index: 10;
   border-radius: 0 0 0 10px;
   background-color: #1f5768;
   display: flex;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   padding: 1em;
   justify-content: flex-end;
`
const StyledFrog = styled.div`
   width: 20%;
   height: 20%;
   overflow: hidden;
   position: relative;
`

const Image = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   background-image: url(https://flexboxfroggy.com/images/frog-green.svg);
   background-position: center center;
   background-size: contain;
   background-repeat: no-repeat;
`
const StyledLeaf = styled.div`
   position: relative;
   width: 20%;
   height: 20%;
   overflow: hidden;
`
const SecondImg = styled.div`
   width: 100%;
   height: 100%;
   background-position: center center;
   background-size: contain;
   background-repeat: no-repeat;
   background-image: url(https://flexboxfroggy.com/images/lilypad-green.svg);
   transform: scale(0.867432) rotate(74.4368deg);
`

const StyledPond = styled.div`
   display: flex;
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   padding: 1em;
   z-index: 20;
`
