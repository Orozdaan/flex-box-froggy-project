import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Instructions from './Instructions'
import Editor from './Editor'
import Board from './RightSideBar.js/Board'

const MainSection = () => {
   return (
      <StyledMain>
         <SideBar>
            <div>
               <Header />
               <Instructions />
               <Editor />
            </div>
         </SideBar>
         <Board />
      </StyledMain>
   )
}

export default MainSection
const StyledMain = styled.main`
   display: flex;
`
const SideBar = styled.div`
   width: 80%;
   min-width: 300px;
   position: relative;
   padding: 2em;
   background-color: #43a047;
   font-size: 15px;
   display: flex;
`
