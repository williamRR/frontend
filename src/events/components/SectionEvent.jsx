import { EventCard } from './EventCard'

export const SectionEvent = ({ sectionTitle, events }) => {
  console.log('SectionEvent', sectionTitle)

  if (!events || events.length === 0) {
    return null
  }

  return (
    <>
      <section className='mb-24'>
        <h3 className='text-3xl pb-4 dark:text-gray-100'>{sectionTitle}</h3>

        <div className='flex flex-wrap -mx-2 lg:-mx-2 gap-y-10'>
          {
            events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          }
        </div>
      </section>
    </>
  )
}
