import { useEffect, useState } from 'react';
import API from '../utils/axiosConfig';
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Modal,
  TextField,
  Box,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const Events = () => {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({});

  const fetchEvents = async () => {
    try {
      const response = await API.get('/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
    }
  };

  const handleOpen = (event = {}) => {
    setCurrentEvent(event);
    setIsEditing(Object.keys(event).length > 0);
    setModalOpen(true);
  };

  const handleClose = () => {
    setCurrentEvent({});
    setModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await API.put(`/events/${currentEvent.id}`, currentEvent);
      } else {
        await API.post('/events', currentEvent);
      }
      fetchEvents();
      handleClose();
    } catch (error) {
      console.error('Error al guardar el evento:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/events/${id}`);
      fetchEvents();
    } catch (error) {
      console.error('Error al eliminar el evento:', error);
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
    <Container
      maxWidth='lg'
      style={{
        marginTop: '20px',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Modal open={modalOpen} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <form onSubmit={handleSubmit}>
            {headers.map(
              (header) =>
                header !== 'id' && (
                  <TextField
                    key={header}
                    name={header}
                    label={header}
                    value={currentEvent[header] || ''}
                    onChange={handleChange}
                    fullWidth
                    margin='normal'
                  />
                ),
            )}
            <Button type='submit' variant='contained' color='primary' fullWidth>
              {isEditing ? 'Actualizar' : 'Agregar'}
            </Button>
          </form>
        </Box>
      </Modal>
      <TableContainer component={Paper}>
        <Table className="bg-orange-400">
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event, index) => (
              <TableRow key={index}>
                {headers.map((header) => (
                  <TableCell key={header}>{event[header]}</TableCell>
                ))}
                <TableCell>
                  <IconButton
                    color='primary'
                    aria-label='buy'
                    onClick={() => alert('entrada comprada')}
                  >
                    <AttachMoneyIcon />
                  </IconButton>

                  <IconButton
                    color='primary'
                    aria-label='edit'
                    onClick={() => handleOpen(event)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color='secondary'
                    aria-label='delete'
                    onClick={() => handleDelete(event.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant='contained'
        color='primary'
        startIcon={<AddIcon />}
        style={{ marginTop: '20px' }}
        onClick={() => handleOpen()}
      >
        Agregar
      </Button>
    </Container>
  );
}
