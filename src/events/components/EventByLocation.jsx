import { EventLocationCard } from '../../event-location'

export const EventByLocation = ({ eventLocations }) => {
  return (
    <>
      <section className='mb-24'>
        <h3 className='text-3xl pb-4 dark:text-gray-100'>Ver eventos en</h3>

        <div className='flex flex-wrap -mx-2 lg:-mx-2 gap-y-10'>
          {eventLocations.map((eventLocation) => (
            <EventLocationCard key={eventLocation.id} eventLocation={eventLocation} />
          ))}
        </div>
      </section>
    </>
  )
}
