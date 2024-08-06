import { useEffect, useState } from 'react';
import { SectionEvent, SearchEvent, EventByLocation } from '../events'
import { MainContent } from './components/MainContent'

import API from '../utils/axiosConfig'

export const IndexPage = () => {

  const [ recommendedEvents, setRecommendedEvents ] = useState([])
  const [ musicEvents, setMusicEvents ] = useState([])
  const [ artsEvents, setArtsEvents ] = useState([])
  const [ feriasEvents, setFeriasEvents ] = useState([])
  const [ eventLocations, setEventLocations ] = useState([])

  const fetchRecommendedEvents = async () => {
    try {
      const response = await API.get('/events/random')

      // setRecommendedEvents como arreglo de eventos
      setRecommendedEvents(response.data)

    } catch (error) {
      console.error('Error al hacer la solicitud:', error)
    }
  }

  const fetchMusicEvents = async () => {
    try {
      const response = await API.get('/events/category/66b1e1b8fd07bb19d70997db')

      // setRecommendedEvents como arreglo de eventos
      setMusicEvents(response.data)

    } catch (error) {
      console.error('Error al hacer la solicitud:', error)
    }
  }

  const fetchArtsEvents = async () => {
    try {
      const response = await API.get('/events/category/66b1e1c1fd07bb19d70997dc')

      // setRecommendedEvents como arreglo de eventos
      setArtsEvents(response.data)

    } catch (error) {
      console.error('Error al hacer la solicitud:', error)
    }
  }

  const fetchFeriasEvents = async () => {
    try {
      const response = await API.get('/events/category/66b1e1cbfd07bb19d70997dd')

      // setRecommendedEvents como arreglo de eventos
      setFeriasEvents(response.data)

    } catch (error) {
      console.error('Error al hacer la solicitud:', error)
    }
  }

  const fetchEventByLocation = async () => {
    try {
      const response = await API.get('/event-locations')

      // setRecommendedEvents como arreglo de eventos
      setEventLocations(response.data)

    } catch (error) {
      console.error('Error al hacer la solicitud:', error)
    }
  }

  useEffect(() => {
    fetchRecommendedEvents()
    fetchMusicEvents()
    fetchArtsEvents()
    fetchFeriasEvents()

    fetchEventByLocation()
  }, [])

  return (
    <>
      {/* <SearchEvent /> */}
      <MainContent>
        <div className="mt-52">
          <SectionEvent sectionTitle='Eventos Recomendados' events={recommendedEvents} />
          <SectionEvent sectionTitle='Música' events={musicEvents} />
          <SectionEvent sectionTitle='Artes y Teatro' events={artsEvents} />
          <SectionEvent sectionTitle='Ferias y Expo' events={feriasEvents} />
          <EventByLocation eventLocations={eventLocations} />
        </div>
      </MainContent>
    </>
  )
}
