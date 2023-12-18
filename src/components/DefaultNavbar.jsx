/* eslint-disable react/prop-types */
import { Link, useLocation } from "wouter";

const SectionComponent = ( { sectionName } ) => {
  return (
    <li>
      <Link href={`${sectionName.toLowerCase()}`}>
        <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{sectionName}</a>
      </Link>
    </li>
  )
}
const SectionComponentSelected = ( { sectionName } ) => {
  return (
    <li>
      <Link href={`${sectionName.toLowerCase()}`}>
        <a className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">{sectionName}</a>
      </Link>
    </li>

  )
}
export default function DefaultNavbar () {
  const sectionsArray = ["Home", "About", "Contact",]
  const [location] = useLocation()
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.6435-9/197864929_101494528837212_6871151113927145873_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeGeGvkDCh7JPDAxpOI3uj7FgBRZIFBk-9eAFFkgUGT71_h7w1NL3BDaES00dK3A0t66AbgGzP8Pg1O0czuoVo_7&_nc_ohc=MpnykBMDnEcAX_AW_da&_nc_ht=scontent-qro1-1.xx&oh=00_AfA-WGdxGqUCNVVI38Hvqm2wOSJb1m5wijcd_wdGwyA56w&oe=65A73A83"
              className="h-10 rounded-full" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jaime Morales Ceron</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {
                sectionsArray.map( section => {
                  if ( location == '/' + section.toLowerCase() ) {
                    return ( <SectionComponentSelected key={section} sectionName={section} ></SectionComponentSelected> )
                  }
                  else {
                    return ( <SectionComponent key={section} sectionName={section} ></SectionComponent> )
                  }
                } )
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
