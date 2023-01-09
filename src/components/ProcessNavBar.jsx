import React from 'react'
import { Link } from 'react-router-dom'
import icon from "../assets/icon.svg";

export default function ProcessNavBar() {
  return (
    <div>
        <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" className="-mt-4 p-1.5">
                <img className="h-8" src={icon} alt="" />
              </a>
            </div>

            <div className="lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <Link
                to="/sign-up"
                className="inline-block mr-2 rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-zinc-900 shadow-sm ring-1 ring-zinc-400 hover:ring-gray-900/20"
              >
                Questions?
              </Link>
              <Link
                to="/sign-up"
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-zinc-900 shadow-sm ring-1 ring-zinc-400 hover:ring-gray-900/20"
              >
                Save & Exit
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
