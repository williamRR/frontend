import { useEffect, useState } from 'react';
import './App.css';
import API from './utils/axiosConfig';

function App() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await API.get('/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      {events.map((event) => (
        <div key={event.id}>
          <p>{JSON.stringify(events)}</p>
        </div>
      ))}
    </>
  );
}

export default App;
