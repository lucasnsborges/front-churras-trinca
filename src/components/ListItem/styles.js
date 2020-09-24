import styled from 'styled-components'
import { FaUserFriends, FaDonate } from 'react-icons/fa'

export const Container = styled.div`
  width: 46%;
  margin: 12px;
  margin-top: 0;
  height: 200px;
  padding: 24px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 0px 8px #ddd;

  @media screen and (max-width: 875px) {
    width: 100%;

    :nth-last-child(1) {
      margin-bottom: 128px;
    }
  }
`

export const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
`

export const Description = styled.div`
  font-size: 16px;
  margin-top: 4px;
  font-weight: 600;
`

const IconStyle = `
  font-size: 16px;
  margin-right: 8px;
  color: var(--primary-color);
`

export const UsersIcon = styled(FaUserFriends)`
  ${IconStyle}
`

export const CoinIcon = styled(FaDonate)`
  ${IconStyle}
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const BottomSide =  styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`
