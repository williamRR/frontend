export const EventCard = ({ event }) => {
  console.log('EventCard', event)

  return (
    <>
      <div className='group w-full lg:w-1/2 xl:w-1/3 px-2 lg:px-2'>
        <div className='w-full bg-white border shadow-md rounded-lg dark:border-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='w-full relative rounded-lg overflow-hidden'>
            <img src='./img/no-image.png' className='w-full object-center object-cover' alt='no-image' />
            <div className='px-5 pb-5'>
              <h5 className='text-xl font-medium tracking-tight text-gray-900 dark:text-white pt-6 mb-5'>{event.name}</h5>
              <div className='flex items-center justify-between'>
                {/* <div className='text-gray-700 dark:text-gray-200 text-xl sm:text-lg'>20 de Septiembre 2024</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
