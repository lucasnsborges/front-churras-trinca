import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations';

export const Container = styled.div`
  height: 100%;
  display: flex;
  min-height: 200px;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
`

const Animation = keyframes`${fadeIn}`;

export const Content = styled.div`
  top: 172px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
  min-height: 400px;
  position: absolute;
  margin-bottom: 48px;
  justify-content: space-between;
  animation: 0.5s ${Animation};

  @media screen and (max-width: 875px) {
    top: 48px;
    z-index: 2;
  }
`
