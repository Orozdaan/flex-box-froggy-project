import React, { useState } from 'react'
import styled from 'styled-components'

const Header = () => {
   const [setShow] = useState(false)
   const handleShow = () => setShow((prevState) => !prevState)

   return (
      <StyledDiv>
         <div>
            <h1>FLEXBOX FROGGY</h1>
         </div>
         <StyledLevel>
            <ArrowLeft>
               <span />
            </ArrowLeft>
            <LevelIndicator>
               <LabelLevel>Уровень</LabelLevel>
               <span> 1</span>
               <span> из</span>
               <span> 24</span>
               <button type="button" onClick={handleShow}>
                  <span> ▾</span>
               </button>
            </LevelIndicator>
            <ArrowRight>
               <span />
            </ArrowRight>
         </StyledLevel>
      </StyledDiv>
   )
}

export default Header

const StyledDiv = styled.div`
   display: flex;
   flex-wrap: wrap;
   margin-top: -0.5rem;
   color: white;
   justify-content: space-between;
   & h1 {
      margin: 0.5rem 0 0;
      font-family: 'Fredoka One', cursive;
      font-weight: bold;
      text-transform: uppercase;
   }
`
const StyledLevel = styled.div`
   position: relative;
   display: inline-block;
   height: 30px;
   margin-top: 0.5rem;
   font-size: 15px;
   user-select: none;
`
const ArrowLeft = styled.span`
   border-right: 1px solid rgba(255, 255, 255, 0.2);
   border-radius: 4px 0 0 4px;
   display: inline-flex;
   align-items: center;
   padding: 0.25em 0.5em 0.2em;
   cursor: pointer;
   float: left;
   height: 30px;
   background-color: rgba(255, 255, 255, 0.2);
   & span {
      border-right: 11px solid rgba(255, 255, 255, 0.7);
      display: inline-block;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
   }
`
const LevelIndicator = styled.span`
   display: inline-block;
   width: 160px;
   line-height: 30px;
   text-align: center;
   cursor: pointer;
   float: left;
   height: 30px;
   background-color: rgba(255, 255, 255, 0.2);
`
const LabelLevel = styled.span`
   margin-left: 5px;
`
const ArrowRight = styled.span`
   border-left: 1px solid rgba(255, 255, 255, 0.2);
   border-radius: 0 4px 4px 0;
   display: inline-flex;
   align-items: center;
   padding: 0.25em 0.5em 0.2em;
   cursor: pointer;
   float: left;
   height: 30px;
   background-color: rgba(255, 255, 255, 0.2);
   & span {
      border-left: 11px solid rgba(255, 255, 255, 0.7);
      display: inline-block;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
   }
`
