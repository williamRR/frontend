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

  if (events.length === 0) {
    return <p>Cargando...</p>;
  }

  const headers = Object.keys(events[0]);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {events.map((event, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header}>{event[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
