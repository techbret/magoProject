import { ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import BecomeProvider from '../pages/BecomeProvider'
import LocationOfSpace from './LocationOfSpace'
import ProcessNavBar from './ProcessNavBar'
import TypeOfSpace from './TypeOfSpace'


const setup = [
  {page: <BecomeProvider />, button: "Next", width: 'h-2 bg-indigo-600 w-1/4' },
  {page: <TypeOfSpace />, button: "Next", width: 'h-2 bg-indigo-600 w-1/2' },
  {page: <LocationOfSpace />, button: "Next", width: 'h-2 bg-indigo-600 w-3/4' },
  {page: <BecomeProvider />, button: "Finish", width: 'h-2 bg-indigo-600 w-full' }
]


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function StickyNavbar({name}) {
    const [nextLabel, setNextLabel] = useState(0)

  return (
    <>
    <ProcessNavBar />
      {setup[nextLabel].page}
      <div className="fixed inset-x-0 bottom-0 ">
      <div className="overflow-hidden bg-gray-200">
          <div className={classNames(setup[nextLabel].width)} />
        </div>
        <div className="bg-zinc-900 border-t-2 border-zinc-600">
          <div className="mx-auto max-w-full py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center">
                {nextLabel > 0 ? (
                <button
                  onClick={() => setNextLabel(nextLabel - 1)}
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm hover:bg-zinc-50"
                >
                  <ArrowLeftIcon className='h-4 mr-2'/> Back
                </button>
                ) : ''}
              
              </div>
              <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                <button
                  onClick={() => setNextLabel(nextLabel + 1)}
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm hover:bg-zinc-50"
                >
                  {setup[nextLabel].button}<span className='text-white'>{'-'}</span>  <ArrowRightIcon className='h-4 mr-2'/>
                </button>
              </div>             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
