import React from 'react'

import {
  Container,
  Label,
  Button,
  AddIcon,
  ArrowRight
} from './styles'

export default function AddButton(props) {
  return (
    <Container>
      <Label labelActive={props.labelActive}>
        Clique para adicionar uma nova lista
        <ArrowRight />
      </Label>
      <Button onClick={props.onClick}>
        <AddIcon />
      </Button>
    </Container>
  )
}
