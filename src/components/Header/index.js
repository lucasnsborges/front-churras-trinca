import React from 'react'
import { Container, BgIcons, Exit } from './styles'

export default function Header() {
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    window.location.href = '/'
  }

  return (
    <Container>
      {localStorage.getItem('token') && (
        <Exit onClick={handleLogout}>Sair</Exit>
      )}
      <BgIcons />
      <h1>Agenda de Churras</h1>
    </Container>
  )
}
