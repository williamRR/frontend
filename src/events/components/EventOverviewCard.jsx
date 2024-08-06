export const EventOverviewCard = () => {
  return (
    <>
      <section className='mb-24 mt-52'>
        <div className='mx-auto 2xl:px-0'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16'>
            <div className='shrink-0 max-w-md lg:max-w-lg mx-auto'>
              <img className='wh-512x600' src='./img/no-image.png' alt='' />
            </div>

            <div className='mt-6 sm:mt-8 lg:mt-0'>
              <h1 className='text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white'>
                  [Título evento]
              </h1>
              <div className='mt-4 sm:items-center sm:gap-4 sm:flex'>
                <p className='text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white'>
                  $20.000 CLP - Valor Unitario
                </p>
              </div>

              <div className='mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8'>
                <div className='w-full md:w-3/5 py-2 px-3 dark:bg-gray-800 bg-white border border-gray-200 rounded-lg'>
                  <div className='w-full flex justify-between items-center gap-x-3'>
                    <div>
                      <span className='block font-medium text-sm dark:text-white text-gray-800'>
                        Cantidad de entradas
                      </span>
                      <span className='block text-xs dark:text-slate-200 text-gray-500'>
                        $20.000 CLP - Valor Unitario
                      </span>
                    </div>
                    <div className='flex items-center gap-x-1.5'>
                      <button type='button' className='p-4 size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none'>
                        <svg className='flex-shrink-0 size-3.5' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                          <path d='M5 12h14'></path>
                        </svg>
                      </button>
                      <input
                        className='pl-2 pr-0 py-1 w-12 bg-white border rounded-md text-gray-800 text-center focus:ring-0'
                        type='number'
                        value='0'
                        max='99'
                        min='0'
                      />
                      <button type='button' className='p-4 size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none'>
                        <svg className='flex-shrink-0 size-3.5' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                          <path d='M5 12h14'></path>
                          <path d='M12 5v14'></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <button
                    type='submit'
                    className='w-full md:w-2/5 mt-4 py-4 sm:mt-0 text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-primary-800'>
                    Comprar
                </button>
              </div>

              <hr className='my-6 md:my-8 border-gray-200 dark:border-gray-800' />

              <p className='mb-6 text-gray-500 dark:text-gray-400'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt illum qui tempore atque beatae? Asperiores, modi voluptates exercitationem quos aut a explicabo vero pariatur suscipit quibusdam! Pariatur recusandae quod corporis!
                Quam vitae quae labore modi ipsam expedita praesentium ea incidunt corporis pariatur esse repudiandae, voluptatem fugit optio libero nisi amet officiis aliquid perspiciatis dolore nemo consectetur provident! Iure, sequi natus?
                Sint architecto esse explicabo asperiores nesciunt. Ut voluptatem nobis quis inventore iste totam sapiente eius, architecto ipsam. Eaque maxime praesentium eveniet doloribus, beatae modi consequatur commodi odit repellat quis quas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
