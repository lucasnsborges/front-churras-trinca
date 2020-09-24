import React, { useState, useEffect } from 'react'
import moment from 'moment'
import lodash from 'lodash'
import { balanceFormat } from '../../utils'
import {
  Container,
  Title,
  Description,
  BottomSide,
  Row,
  UsersIcon,
  CoinIcon
} from './styles'

export default function ListItem({ data, history }) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const filtered = data.guests.filter(
      guest => guest.contributed && guest.active)
    const sum = lodash.sumBy(filtered, 'amount')

    return setTotal(sum)
  }, [data])

  const handleClick = () => {
    history.push('/details', data)
  }

  return (
    <Container onClick={handleClick}>
      <Title>
        {moment(data.date).format('DD/MM')}
      </Title>
      <Description>
        {data.description}
      </Description>

      <BottomSide>
        <Row>
          <UsersIcon />
          {data.guests.filter(guest => guest.active).length}
        </Row>
        <Row>
          <CoinIcon />
          {balanceFormat(total)}
        </Row>
      </BottomSide>
    </Container>
  )
}
