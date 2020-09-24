import styled from 'styled-components'
import { FaPlus, FaArrowRight } from 'react-icons/fa'

export const Container = styled.div`
  z-index: 2;
  right: 32px;
  bottom: 32px;
  display: flex;
  position: fixed;
  align-items: center;

  @media screen and (max-width: 875px) {
    right: 16px;
  }
`

export const Label = styled.div`
  padding: 12px;
  margin: 0 12px;
  border-radius: 8px;
  background: #ffffff;
  border: solid 1px #f5f5f5;
  display: ${props => (props.labelActive ? 'block' : 'none')};
`

export const Button = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  cursor: pointer;
  min-width: 60px;
  min-height: 60px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 8px #c5c5c5;
  background-color: var(--primary-color);
`

export const AddIcon = styled(FaPlus)`
  color: #000;
  font-size: 24px;
`

export const ArrowRight = styled(FaArrowRight)`
  color: #000;
  margin: 0 4px;
  font-size: 12px;
`
