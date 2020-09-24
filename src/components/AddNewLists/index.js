import React, { useState } from 'react'
import moment from 'moment'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { Formik } from 'formik'
import { FaTimes } from 'react-icons/fa'
import { create } from '../../api/schedule'
import { Input } from '../Input'
import { Button } from '../Button'
import {
  Container,
  Content,
  Header,
  Field,
  Label,
} from './styles'
import { ErrorFieldMessage } from '../../containers/Login/styles'

export default function AddNewLists(props) {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (body, resetForm) => {
    setLoading(true)

    const response = await create(body)

    if (response.id) {
      props.handleAddList(response)
      props.handleClose()
    }
  }

  return (
    <Container visible={props.visible}>
      <Content>
        <Header>
          <FaTimes onClick={props.handleClose} />
        </Header>

        <Formik
          initialValues={{
            description: '',
            suggestedAmount: '',
            date: moment().format('YYYY-MM-DD').toString(),
          }}
          validate={values => {
            const errors = {}

            if (moment(values.date).add(1, 'day').isBefore(moment())) {
              errors.date = 'Informe uma data futura'
            }

            if (!values.description) {
              errors.description = 'Informe uma descrição para sua lista'
            }
            return errors
          }}
          onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Field>
                <Label>Data do churrasco</Label>
                <Input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.date}
                />
                {errors.date && touched.date &&
                  <ErrorFieldMessage>
                    {errors.date}
                  </ErrorFieldMessage>
                }
              </Field>
              <Field>
                <Label>Descrição</Label>
                <Input
                  type="text"
                  name="description"
                  placeholder="Ex.: Churras da firma"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
                {errors.description && touched.description &&
                  <ErrorFieldMessage>
                    {errors.description}
                  </ErrorFieldMessage>
                }
              </Field>
              <Field>
                <Label>Contribuição sugerida</Label>
                <Input
                  type="number"
                  name="suggestedAmount"
                  placeholder="Ex.: R$ 20"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.suggestedAmount}
                />
              </Field>
              <Button type="submit">
                {loading ? (
                  <Loader type="ThreeDots" color="#fff" height={14} width={44} />
                ) : 'Criar lista'}
              </Button>
            </form>
          )}
        </Formik>
      </Content>
    </Container>
  )
}
