export const MainContent = ({ children }) => {
  return (
    <>
      <main className='container sm:w-3/4 mx-auto px-2 sm:px-0 pb-12 mb-12'>
        {children}
      </main>
    </>
  )
}
