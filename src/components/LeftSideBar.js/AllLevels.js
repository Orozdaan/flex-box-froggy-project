/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { FroggyAction } from '../../store/FroggyLevels'

const AllLevels = ({ showLevel }) => {
   const dispatch = useDispatch()
   const { currentLevels } = useSelector((state) => state.froggy)
   const toggleLevelHandle = (event) => {
      dispatch(FroggyAction.selectLevel(Number(event.target.id)))
   }
   return (
      <LevelWrapper>
         <StyledLevels>
            {currentLevels.map((level) => (
               <span
                  onClick={toggleLevelHandle}
                  id={level.level}
                  key={level.level}
               >
                  {level.level}
               </span>
            ))}
         </StyledLevels>
         <Reset onClick={showLevel}>Сбросить</Reset>
      </LevelWrapper>
   )
}

export default AllLevels
const LevelWrapper = styled.div`
   top: 45px;
   right: 53px;
   padding: 1em 0.5em;
   margin-top: 12px;
   z-index: 80;
   position: absolute;
   display: inline-block;
   background-color: #2c3e50;
   border-radius: 4px;
   font-size: 12px;
   line-height: 1.5;
`
const Reset = styled.div`
   padding-top: 9px;
   margin-left: 45px;
   cursor: pointer;
`
const StyledLevels = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: repeat(6, 1fr);
   grid-column-gap: 2px;
   grid-row-gap: 2px;

   & span {
      /* float: left; */
      display: inline-block;
      width: 30px;
      height: 30px;
      margin: 2px;
      line-height: 26px;
      background-color: rgba(255, 255, 255, 0.2);
      border: 2px solid transparent;
      border-radius: 50%;
      text-align: center;
      cursor: pointer;
      &:hover {
         opacity: 0.9;
      }
      &:active {
         background: green;
      }
   }
`
