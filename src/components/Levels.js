import React from 'react'
import styled from 'styled-components'

const Levels = () => {
   return (
      <LevelWrapper>
         <StyledLevels>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
            <span>15</span>
            <span>16</span>
            <span>17</span>
            <span>18</span>
            <span>19</span>
            <span>20</span>
            <span>21</span>
            <span>22</span>
            <span>23</span>
            <span>24</span>
         </StyledLevels>
         <div>Сбросить</div>
      </LevelWrapper>
   )
}

export default Levels
const LevelWrapper = styled.div`
   display: none;
   top: 30px;
   right: 31px;
   max-width: 160px;
   padding: 1em 0.5em;
   margin-top: 12px;
   z-index: 80;
   position: absolute;
   display: inline-block;
   max-width: 350px;
   padding: 1em 1em;
   background-color: #2c3e50;
   border-radius: 4px;
   font-size: 12px;
   line-height: 1.5;
   z-index: 60;
`
const StyledLevels = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   & span {
      float: left;
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
   }
`
