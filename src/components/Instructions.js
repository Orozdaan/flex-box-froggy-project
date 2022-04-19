import React from 'react'
import styled from 'styled-components'

const Instructions = () => {
   return (
      <StyledInstructions>
         <p>
            Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно помочь
            лягушонку Фроги и его <br /> друзьям написанием CSS кода! Направь
            этого лягушонка на лилию справа используя свойство <br />
            <StyledCode>justify-content</StyledCode>
            , которое выравнивает элементы горизонтально и принимает следующие
            <br /> значения:
         </p>
         <ul>
            <li>
               <code>flex-start</code>: Элементы выравниваются по левой стороне
               контейнера.
            </li>
            <li>
               <code>flex-end</code>: Элементы выравниваются по правой стороне
               контейнера.
            </li>
            <li>
               <code>center</code>: Элементы выравниваются по центру контейнера.
            </li>
            <li>
               <code>space-between</code>: Элементы отображаются с одинаковыми
               отступами между ними.
            </li>
            <li>
               <code>space-around</code>: Элементы отображаются с одинаковыми
               отступами вокруг них.
            </li>
         </ul>
         <StyledText>
            Например, <code>justify-content: flex-end</code>; сдвинет лягушонка
            вправо.
         </StyledText>
      </StyledInstructions>
   )
}

export default Instructions

const StyledInstructions = styled.div`
   padding-top: 1rem;
   text-align: start;
   & ul {
      margin: 0;
      padding: 1em 0 1rem 2rem;
   }
   & li {
      line-height: 1.5;
      & ::marker {
         unicode-bidi: isolate;
         font-variant-numeric: tabular-nums;
         text-transform: none;
         text-indent: 0px !important;
         text-align: start !important;
         text-align-last: start !important;
      }
      & code {
         padding: 0 2px;
         background-color: rgba(255, 255, 255, 0.2);
         font-family: 'Source Code Pro', monospace;
         font-weight: 900;
         color: rgba(255, 255, 255, 0.8);
         white-space: nowrap;
      }
   }
`
const StyledCode = styled.code`
   cursor: pointer;
   border-bottom: 1px solid rgba(255, 255, 255, 0.7);
   padding: 0 2px;
   background-color: rgba(255, 255, 255, 0.2);
   font-family: 'Source Code Pro', monospace;
   font-weight: 900;
   color: rgba(255, 255, 255, 0.8);
   white-space: nowrap;
`
const StyledText = styled.p`
   & code {
      padding: 0 2px;
      background-color: rgba(255, 255, 255, 0.2);
      font-family: 'Source Code Pro', monospace;
      font-weight: 900;
      color: rgba(255, 255, 255, 0.8);
      white-space: nowrap;
   }
`
