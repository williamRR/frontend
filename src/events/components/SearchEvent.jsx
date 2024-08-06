export const SearchEvent = () => {
  return (
    <>
      <header className='container sm:w-3/4 mx-auto mt-24 py-14 px-2 sm:px-0'>
        <h2 className='text-center text-5xl dark:text-gray-100 mb-8'>Buscar Eventos</h2>
        <form className='max-w-md mx-auto'>
          <label
            htmlFor='default-search'
            className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
            Search
          </label>
          <div className='relative'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                  <svg className='w-4 h-4 text-gray-500 dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
                      <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'/>
                  </svg>
              </div>

              <input
                id='default-search'
                type='search'
                className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Ingrese un evento...'
              />
              <button
                type='submit'
                className='absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-slage-900 bg-slage-700 rounded-e-lg border border-slage-700 hover:bg-slage-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-slage-600 dark:hover:bg-slage-700 dark:text-white dark:focus:ring-slage-800'>
                  <svg className='w-4 h-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'/>
                  </svg>
                  <span className='sr-only'>Search</span>
              </button>
          </div>
        </form>
      </header>
    </>
  )
}
