import React, { useState } from 'react'
import { ReactComponent as PreviousLevelIcon } from '../../../assets/icons/previous-level.svg'
import { ReactComponent as NextLevelIcon } from '../../../assets/icons/nextLevel.svg'
import { ReactComponent as DropdownIcon } from '../../../assets/icons/dropdown.svg'
import styled from 'styled-components'
import AllLevels from '../AllLevels'
import { FroggyAction } from '../../../store/FroggyLevels'
import { useDispatch, useSelector } from 'react-redux'

export const LevelSwitcher = () => {
   const dispatch = useDispatch()
   const [isDropdownVisible, setIsDropdownVisible] = useState(false)
   const { currentLevel, currentLevels } = useSelector((state) => state.froggy)

   const showLevelDropDownHandler = () => {
      setIsDropdownVisible((prevState) => !prevState)
   }
   const nextHandler = () => {
      dispatch(FroggyAction.nextLevel())
   }
   const prevHandler = () => {
      dispatch(FroggyAction.prevLevel())
   }
   return (
      <Container>
         <IndicatorContainer>
            <PreviousLevelButtonContainer onClick={prevHandler}>
               <StyledPreviousLevelIcon />
            </PreviousLevelButtonContainer>
            <LevelIndicator onClick={showLevelDropDownHandler}>
               <LabelLevel>
                  <span>Уровень </span>
                  <span>
                     {currentLevel} из {currentLevels.length}
                  </span>
               </LabelLevel>
               <StyledDropdownIcon />
            </LevelIndicator>
            <NextLevelButtonContainer
               className="nextLevel"
               onClick={nextHandler}
            >
               <StyledNextLevelIcon />
            </NextLevelButtonContainer>
         </IndicatorContainer>
         <LevelsContainer>
            {isDropdownVisible && (
               <AllLevels showLevel={showLevelDropDownHandler} />
            )}
         </LevelsContainer>
      </Container>
   )
}
export default LevelSwitcher

const Container = styled.div``

const IndicatorContainer = styled.div`
   display: flex;
   width: 200px;
   line-height: 30px;
   text-align: center;
   cursor: pointer;
`

const StyledPreviousLevelIcon = styled(PreviousLevelIcon)`
   width: 10px;
   display: flex;
   align-items: center;
   justify-content: center;
`

const StyledNextLevelIcon = styled(NextLevelIcon)`
   width: 10px;
   margin-left: 5px;
`

const PreviousLevelButtonContainer = styled.div`
   width: 30px;
   background-color: rgba(255, 255, 255, 0.2);
   display: flex;
   align-items: center;
   justify-content: center;
`

const StyledDropdownIcon = styled(DropdownIcon)`
   margin-left: 5px;
   width: 16px;
   padding-top: 5px;
`

const NextLevelButtonContainer = styled.div`
   width: 30px;
   background-color: rgba(255, 255, 255, 0.2);
`
const LevelIndicator = styled.span`
   display: inline-block;
   width: 160px;
   line-height: 30px;
   text-align: center;
   cursor: pointer;
   height: 30px;
   background-color: rgba(255, 255, 255, 0.2);
`
const LabelLevel = styled.span`
   margin-left: 5px;
`

const LevelsContainer = styled.div`
   padding: 10px;
`
