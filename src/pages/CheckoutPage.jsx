import  { useEffect, useState } from 'react'
import { MainContent } from './components/MainContent'
import API from '../utils/axiosConfig'

export const CheckoutPage = () => {
  const [total, setTotal] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [event, setEvent] = useState({})

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    celular: '',
    metodoPago: ''
  })

  useEffect(() => {
    const buy = localStorage.getItem('buy')
    const quantity = localStorage.getItem('quantity')
    const event = JSON.parse(localStorage.getItem('event'))

    setTotal(buy)
    setQuantity(quantity)
    setEvent(event)
  }, [])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(amount)
  }

  const handleBuy = async(e) => {
    e.preventDefault()

    // Obtener los datos del formulario

    // Crear el objeto currentEvent
    const currentBuy = {
      clientName: formState.name,
      clientEmail: formState.email,
      clientSmartphone: formState.celular,
      paymentGateway: formState.metodoPago,
      total,
      quantity,
      event: event
    }

    try {
      const response = await API.post('/purchases', currentBuy);

      if (response.data) {
        console.log(response.data)
        localStorage.removeItem('buy')
        localStorage.removeItem('quantity')
        localStorage.removeItem('event')

        alert('Compra realizada con éxito')
      }
    } catch (error) {
      console.error('Error al guardar el evento:', error);
    }

  }

  return (
    <>
      <MainContent>
        <div className='mb-24 mt-52'>
          <h3 className="text-3xl pb-4 dark:text-gray-100 mt-40">Checkout</h3>

          <form onSubmit={handleBuy} >
            {/* creame un formulario de 5 campos del cliente y boton de pagar en tailwindcss*/}
            <div className='flex flex-col sm:flex-row gap-4'>
              <div className='w-full sm:w-1/2'>
                <div className="pb-4">
                  <label htmlFor='name' className='block text-sm font-medium dark:text-white text-gray-700   dark:text-gray
                  -200'>
                    Nombre
                  </label>
                  <input id="name" type='text' onChange={(e)=> setFormState({...formState, name: e.target.value})} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2' placeholder='Ingrese su nombre' required/>
                </div>
                <div className="pb-4">
                  <label htmlFor='email' className='block text-sm font-medium dark:text-white text-gray-700   dark:text-gray
                  -200'>
                    Email
                  </label>
                  <input id="email" type='text'  onChange={(e)=> setFormState({...formState, name: e.target.value})} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2' placeholder='Ingrese su email' required/>
                </div>
                <div className="pb-4">
                  <label htmlFor='celular' className='block text-sm font-medium dark:text-white text-gray-700   dark:text-gray
                  -200'>
                    Celular
                  </label>
                  <input id="celular" type='text' onChange={(e)=> setFormState({...formState, name: e.target.value})}  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2' placeholder='Ingrese su número de celular' required/>
                </div>
              </div>
              {/* columan con el total a pagar */}
              <div className='w-full sm:w-1/2'>
                <div className="pb-4">
                  <label htmlFor='cantidad' className='block text-xl font-medium dark:text-white text-gray-700   dark:text-gray
                  -200'>
                    Evento: {event.name || 'Evento'}
                  </label>
                </div>
                <div className="pb-4">
                  <label htmlFor='cantidad' className='block text-xl font-medium dark:text-white text-gray-700   dark:text-gray
                  -200'>
                    Cant. entradas: {quantity}
                  </label>
                </div>
                <div className="pb-4">
                  <label htmlFor='total' className='block text-xl font-medium dark:text-white text-gray-700   dark:text-gray
                  -200'>
                    Total a pagar: {formatCurrency(total)}
                  </label>
                </div>
                <hr />
                <div className="py-4">
                  <label htmlFor='metodo' className='block text-sm font-medium dark:text-white text-gray-700   dark:text-gray
                  -200'>
                    Método de pago
                  </label>
                  <select id="metodo" onChange={(e)=> setFormState({...formState, name: e.target.value})} className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2' required>
                    <option value=''>Seleccione un método de pago</option>
                    <option value='Tranferencia'>Tranferencia</option>
                    <option value='Webpay'>Webpay</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8'>
              <button
                  type='submit'
                  className='w-full mt-4 py-4 sm:mt-0 text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-primary-800'>
                  Comprar
              </button>
            </div>
          </form>
        </div>
      </MainContent>
    </>
  )
}
