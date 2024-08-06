import { useEffect, useState } from 'react'
import { EventOverviewCard } from '../events/components/EventOverviewCard'
import { MainContent } from './components/MainContent'
import { useParams } from 'react-router-dom'

import API from '../utils/axiosConfig'

export const EventOverviewPage = () => {

  const [ event, setEvent ] = useState([])

  // Recibir la id desde la URL /event-overview/:id
  const { id } = useParams()

  const fetchEvent = async () => {
    try {
      const response = await API.get(`/events/${id}`)

      setEvent(response.data)
    } catch (error) {
      console.error('Error al hacer la solicitud:', error)
    }
  }

  useEffect(() => {
    fetchEvent()
  }, [])

  return (
    <>
      <MainContent>
        <EventOverviewCard event={event}/>
      </MainContent>
    </>
  )
}
