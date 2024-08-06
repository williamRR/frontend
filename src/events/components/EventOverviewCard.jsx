import { useState } from 'react'
import noImage from '../../assets/img/no-image.png'
import { useNavigate } from 'react-router-dom'

export const EventOverviewCard = ({ event }) => {
  if (!event) return null
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(amount)
  }

  const sumAmount = () => {
    setQuantity((quantity) => {
      if (quantity === 10) return quantity
      return quantity + 1
    })
  }

  const subAmount = () => {
    setQuantity((quantity) => {
      if (quantity === 1) return 1
      return quantity - 1
    })
  }

  const saveBuy = () => {
    // almacenar en localStorage
    localStorage.setItem('buy', event.amount * quantity)
    localStorage.setItem('quantity', quantity)
    localStorage.setItem('event', JSON.stringify(event))

    navigate(`/checkout`)
  }

  return (
    <>
      <section className='mb-24 mt-52'>
        <div className='mx-auto 2xl:px-0'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16'>
            <div className='shrink-0 max-w-md lg:max-w-lg mx-auto'>
              <img className='wh-512x600' src={noImage} alt='' />
            </div>

            <div className='mt-6 sm:mt-8 lg:mt-0'>
              <h1 className='text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white'>
                {event.name}
              </h1>
              <div className='mt-4 sm:items-center sm:gap-4 sm:flex'>
                <p className='text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white'>
                  { formatCurrency(event.amount) || 'xx.xxx' } CLP - Valor Unitario
                </p>
              </div>

              <div className='mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8'>
                <div className='w-full md:w-3/5 py-2 px-3 dark:bg-gray-800 bg-white border border-gray-200 rounded-lg'>
                  <div className='w-full flex justify-between items-center gap-x-3'>
                    <div>
                      <span className='block font-medium text-sm dark:text-white text-gray-800'>
                        Cantidad de entradas
                      </span>
                      <span className='block text-lg dark:text-slate-200 text-gray-500'>
                        { formatCurrency(event.amount * quantity) } CLP
                      </span>
                    </div>
                    <div className='flex items-center gap-x-1.5'>
                      <button type='button' onClick={subAmount} className='p-4 size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none'>
                        <svg className='flex-shrink-0 size-3.5' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                          <path d='M5 12h14'></path>
                        </svg>
                      </button>
                      <div className='px-2 pr-0 py-1 w-12 bg-white border rounded-md text-gray-800 text-center focus:ring-0'>{quantity}</div>
                      <button type='button' onClick={sumAmount} className='p-4 size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none'>
                        <svg className='flex-shrink-0 size-3.5' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                          <path d='M5 12h14'></path>
                          <path d='M12 5v14'></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <button
                    onClick={saveBuy}
                    type='button'
                    className='w-full md:w-2/5 mt-4 py-4 sm:mt-0 text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-primary-800'>
                    Comprar
                </button>
              </div>

              <hr className='my-6 md:my-8 border-gray-200 dark:border-gray-800' />

              <p className='mb-6 text-gray-500 dark:text-gray-400'>
                {event.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
