export const EventLocationCard = ({ eventLocation }) => {
  console.log('EventLocationCard', eventLocation)

  return (
    <>
      <div className='group w-full lg:w-1/2 px-2 lg:px-2'>
        <div className='flex items-center bg-white border border-gray-200 dark:border-0 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
          <img src='./img/no-image.png' className='object-center object-cover h-full md:h-40 rounded-l-lg w-1/3' alt='local-x' />
          <div className='p-4 leading-normal w-2/3'>
            <h3 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-3'>{eventLocation.name}</h3>
          </div>
        </div>
      </div>
    </>
  )
}
