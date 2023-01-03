import { ArrowLeftIcon} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function StickyNavbar() {
    const [nextLabel, setNextLabel] = useState('Get Started')

  return (
    <>
      {/*
        Make sure you add some bottom padding to pages that include a sticky banner like this to prevent
        your content from being obscured when the user scrolls to the bottom of the page.
      */}
      <div className="fixed inset-x-0 bottom-0 ">
        <div className="bg-sky-500 border-t-2 border-sky-600">
          <div className="mx-auto max-w-full py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center">
              <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-sky-600 shadow-sm hover:bg-sky-50"
                >
                  <ArrowLeftIcon className='h-4 mr-2'/> Back
                </a>
              </div>
              <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                <button
                  onClick={() => setNextLabel('Next')}
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-sky-600 shadow-sm hover:bg-sky-50"
                >
                  {nextLabel}
                </button>
              </div>             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
