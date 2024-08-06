import { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'

export const Navbar = () => {
  // const navigate = useNavigate()

  // const { authState } = useContext(AuthContext)
  const { modeDark } = useContext(AuthContext)

  //   const { user } = authState

  //   const onLogout = () => {
  //     // logout()

  //     navigate('/login', {
  //       replace: true,
  //     })
  //   }

  return (
    <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='container sm:w-3/4 flex flex-wrap items-center justify-between mx-auto p-2'>
        <Link
          to='/'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <img
            src='./img/logo-ivcawica-v2.png'
            className='h-28 mb-0 md:-mb-12'
            alt='logo'
          />
        </Link>
        <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <button
            onClick={() => modeDark()}
            type='button'
            className='text-slage-900 bg-slate-100 hover:bg-slate-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-slate-600 dark:text-gray-100 dark:hover:bg-slate-100 dark:hover:text-slate-900 dark:focus:ring-slate-800'
          >
            Dark/Light
          </button>

          <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-sticky'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-sticky'
        >
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <Link
                to='#'
                className='block py-2 px-3 text-gray-900 dark:text-white bg-slage-700 rounded md:bg-transparent md:text-slage-700 md:p-0 md:dark:text-slage-500'
                aria-current='page'
              >
                <i className='fa-brands fa-instagram'></i>
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slage-700 md:p-0 md:dark:hover:text-slage-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                <i className='fa-brands fa-facebook'></i>
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slage-700 md:p-0 md:dark:hover:text-slage-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                <i className='fa-brands fa-x-twitter'></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
