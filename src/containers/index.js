import 'sanitize.css/sanitize.css'
import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import GlobalStyle from '../global-styles'
import Home from './Home'
import Login from './Login'
import Details from './Details'
import Header from '../components/Header'
import PrivateRoute from '../components/PrivateRoute'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

export default function App() {
  return (
    <Container>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/details" component={Details} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </Container>
  );
}
