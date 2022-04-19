import React from 'react'
import styled from 'styled-components'

const Editor = () => {
   return (
      <StyledEditor>
         <StyledDiv>
            <StyledNumbers>
               1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9
               <br />
               10
            </StyledNumbers>
            <pre id="before">
               #pond {}
               display: flex;
            </pre>
            <textarea />
            <pre id="after" />
         </StyledDiv>
         <button type="button">Следующий</button>
      </StyledEditor>
   )
}

export default Editor

const StyledEditor = styled.div`
   font-family: 'Source Code Pro', monospace;
   font-size: 16px;
   line-height: 1.5;
   color: #777;
   position: relative;
   top: 1.3rem;
   & button {
      position: absolute;
      right: 1em;
      bottom: 1em;
      padding-top: 0.3em;
      display: inline-block;
      padding: 0.4em 0.8em;
      background-color: #d11606;
      border: none;
      border-radius: 4px;
      font-family: 'PT Sans', sans-serif;
      font-size: 16px;
      line-height: 24px;
      color: #fff;
      cursor: pointer;
      appearance: none;
   }
`
const StyledDiv = styled.div`
   height: 260px;
   text-align: start;
   position: relative;
   padding: 10px 10px 10px 40px;
   background-color: #e0e0e0;
   border-radius: 4px;
   overflow: hidden;
   & pre {
      font-family: 'Source Code Pro', monospace;
      font-size: 16px;
      line-height: 1.5;
      color: #777;
   }
   & textarea {
      display: block;
      width: calc(100% - 16px);
      height: 24px;
      margin-left: 16px;
      border: none;
      font-family: 'Source Code Pro', monospace;
      font-size: 16px;
      outline: none;
      resize: none;
      overflow: auto;
   }
`
const StyledNumbers = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   padding: 10px 6px;
   text-align: right;
   background-color: #999;
   color: #d5d5d5;
`
