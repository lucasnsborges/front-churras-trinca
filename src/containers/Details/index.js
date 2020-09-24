import React, { useState, useEffect } from 'react'
import moment from 'moment'
import lodash from 'lodash'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { Formik } from 'formik'
import { Input } from '../../components/Input'

import Checkbox from '../../components/Checkbox'
import { Container } from '../Home/styles'
import {
  Title,
  UsersIcon,
  CoinIcon
} from '../../components/ListItem/styles'

import {
  Wrapper,
  Header,
  Row,
  Description,
  Field,
  AddButton,
  List,
  Item,
  Name,
  Balance,
  Form,
  RemoveGuest,
  UpdateAmountInput,
  UpdateAmountButton,
  Label,
  GoBack
} from './styles'

import { balanceFormat } from '../../utils'
import { addGuest, updateGuest, removeGuest } from '../../api/schedule'

const GuestList = React.memo(({
  guests,
  updateGuest,
  removeGuest,
  changeContribution,
  updateContribution,
  updateContrVisible,
  contrVisible,
}) => {
  return guests.map(guest => (
    <Item key={guest._id}>
      <Row>
        <Checkbox
          guestId={guest._id}
          onChange={updateGuest}
          checked={guest.contributed}
        />
        <Name>{guest.name}</Name>
      </Row>
      {contrVisible === guest._id ? (
        <Row>
          <UpdateAmountInput
            autoFocus
            onChange={e => changeContribution(e.target.value)}
          />
          <UpdateAmountButton onClick={() => updateContribution(guest._id)}>
            Salvar
          </UpdateAmountButton>
        </Row>
      ) : (
        <Balance line={guest.contributed}>
          <div onClick={() => updateContrVisible(guest._id)}>
            {balanceFormat(guest.amount)}
          </div>
          <RemoveGuest onClick={() => removeGuest(guest._id)} />
        </Balance>
      )}
    </Item>
  ))
})

export default function Details(props) {
  const { state } = props.history.location

  const [total, setTotal] = useState(0)
  const [data, setData] = useState(state)
  const [loading, setLoading] = useState(false)
  const [contribution, setContribution] = useState('')
  const [updateContrVisible, setUpdateContrVisible] = useState('')

  useEffect(() => {
    const filtered = data.guests.filter(
      guest => guest.contributed && guest.active)
    const sum = lodash.sumBy(filtered, 'amount')

    return setTotal(sum)
  }, [data])

  const handleAddGuest = async (body, resetForm) => {
    setLoading(true)

    const response = await addGuest(data.id, body)

    setData({...data, guests: response.guests})

    setLoading(false)
    resetForm({ name: '' })
  }

  const handleUpdateGuest = (guestId, mod) => {
    const guests = data.guests.map(guest => {
      return guest._id === guestId ? { ...guest, ...mod } : guest
    })

    setData({...data, guests })

    return updateGuest(data.id, guestId, mod)
  }

  const handleRemoveGuest = (guestId) => {
    const guests = data.guests.map(guest => {
      return guest._id === guestId ? { ...guest, active: false } : guest
    })

    setData({...data, guests })

    return removeGuest(data.id, guestId)
  }

  const handleUpdateContribution = guestId => {
    const amount = Number(contribution)

    if (amount > 0) {
      handleUpdateGuest(guestId, { amount })
    }

    setContribution('')
    setUpdateContrVisible('')
  }

  const handleChangeContribution = value => {
    setContribution(value)
  }

  const handleUpdateContrVisible = guestId => {
    setUpdateContrVisible(guestId)
  }

  const handleGoBack = () => {
    props.history.goBack()
  }

  return (
    <Container>
      <Wrapper>
        <Header>
          <Row>
            <GoBack onClick={handleGoBack}/>
          </Row>
          <Row>
            <Title>
              {moment(data.date).format('DD/MM')}
            </Title>
            <Row>
              <UsersIcon />
              {data.guests.filter(guest => guest.active).length}
            </Row>
          </Row>
          <Row>
            <Description>
              {data.description}
            </Description>
            <Row>
              <CoinIcon />
              {balanceFormat(total)}
            </Row>
          </Row>
        </Header>

        <Formik
          initialValues={{
            name: '',
            amount: state.suggestedAmount || ''
          }}
          validate={values => {
            const errors = {}
            if (!values.name) {
              errors.password = 'Informe o nome do participante'
            }
            if (!values.amount) {
              errors.password = 'Informe um valor de contribuição'
            }
            return errors
          }}
          onSubmit={(values, { resetForm }) => handleAddGuest(values, resetForm)}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field>
                <Label>Nome do participante</Label>
                <Input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Ex.: Alice"
                />
              </Field>
              <Field>
                <Label>Valor sugerido</Label>
                <Input
                  type="number"
                  name="amount"
                  value={values.amount}
                  onChange={handleChange}
                  placeholder="Ex.: 50"
                />
              </Field>
              <AddButton type="submit">
                {loading ? (
                  <Loader type="ThreeDots" color="#fff" height={14} width={44} />
                ) : 'adicionar participante'}
              </AddButton>
            </Form>
          )}
        </Formik>

        <List>
          {data.id && data.guests.length > 0 && (
            <GuestList
              updateGuest={handleUpdateGuest}
              removeGuest={handleRemoveGuest}
              contrVisible={updateContrVisible}
              updateContrVisible={handleUpdateContrVisible}
              changeContribution={handleChangeContribution}
              updateContribution={handleUpdateContribution}
              guests={data.guests.filter(guest => guest.active)}
            />
          )}
        </List>
      </Wrapper>
    </Container>
  )
}
