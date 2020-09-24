import styled from 'styled-components';
import { FaTimes, FaArrowLeft } from 'react-icons/fa'
import { Content } from '../Home/styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export const Wrapper = styled(Content)`
  padding: 24px;
  animation: none;
  min-height: 400px;
  padding-bottom: 64px;
  background-color: #fff;
  flex-direction: column;
`;

export const Header = styled.div`
  margin-bottom: 12px;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const Description = styled.div`
  color: #000;
  font-size: 24px;
  font-weight: 600;
`

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  @media screen and (max-width: 875px) {
    width: 100%;
    align-items: center;
    flex-direction: column;
  }
`

export const Field = styled.div`
  padding-right: 12px;

  @media screen and (max-width: 875px) {
    width: 100%;
    margin-bottom: 16px;
  }
`

export const Label = styled.div`
  color: #333;
  font-size: 12px;
  margin: 4px 0 4px 2px;
`

export const AddButton = styled(Button)`
  width: 254px;
  height: 48px;
  margin-top: 0;
  border-radius: 4px;

  @media screen and (max-width: 875px) {
    margin-top: 16px;
  }
`

export const UpdateAmountButton = styled(Button)`
  color: #000;
  width: 72px;
  height: 32px;
  margin-top: 0;
  font-size: 12px;
  margin-left: 8px;
  border-radius: 4px;
  background-color: var(--primary-color);
`

export const UpdateAmountInput = styled(Input)`
  width: 80px;
  height: 32px;
`

export const List = styled.div`
  flex: 1;
  margin-top: 32px;
`

export const Item = styled.div`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 2px #faf3d9;
`

export const Name = styled.span`
  margin-left: 16px;
`

export const Balance = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
  text-decoration: ${props => props.line ? 'line-through' : 'none'};
`

export const RemoveGuest = styled(FaTimes)`
  width: 16px;
  height: 16px;
  padding: 2px;
  font-size: 12px;
  cursor: pointer;
  margin-left: 24px;
`

export const GoBack = styled(FaArrowLeft)`
  width: 16px;
  height: 16px;
  margin: 12px 0;
  font-size: 12px;
  cursor: pointer;
`
