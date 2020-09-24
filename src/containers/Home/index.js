import React, { useEffect, useState } from 'react'
import { Container, Content } from './styles'
import ListItem from '../../components/ListItem'
import AddNewLists from '../../components/AddNewLists'
import AddListsButton from '../../components/AddListsButton'

import { get } from '../../api/schedule'

export default function Home(props) {
  const [data, setData] = useState()
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    const getLocalSchedules = localStorage.getItem('schedules')

    if (getLocalSchedules) {
      setData(JSON.parse(getLocalSchedules))
    }

    const fetchData = async () => {
      const result = await get()

      setData(result)
      addLocalList(result)
    }

    fetchData()
  }, [])

  const addLocalList = (list) => {
    localStorage.setItem('schedules', JSON.stringify(list))
  }

  const ToggleModal = () => {
    setModalVisible(!modalVisible)
  }

  const AddList = (list) => {
    setData([...data, list])
    addLocalList([...data, list])
  }

  return (
    <Container>
      <Content>
        {data && data.length > 0 && data.map(list => (
          <ListItem
            key={list.id}
            data={list}
            history={props.history}
          />
        ))}
      </Content>
      <AddListsButton
        onClick={ToggleModal}
        labelActive={data && data.length === 0}
      />
      <AddNewLists
        visible={modalVisible}
        handleAddList={AddList}
        handleClose={ToggleModal}
      />
    </Container>
  )
}
