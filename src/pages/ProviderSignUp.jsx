/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, PlusCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import icon from '../assets/icon.svg'
import { Link } from 'react-router-dom'


export default function ProviderSignUp() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="isolate bg-white">

            <div className="px-6 pt-6 lg:px-8">
                <div>
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                            <a href="#" className="-mt-4 p-1.5">
                                <img className="h-8" src={icon} alt="" />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                            <span className="inline-block px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900">Ready to list your space?</span>
                            <Link
                                to="/sign-up"
                                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold bg-sky-500 leading-6 text-white shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                            >
                                <span><PlusCircleIcon className='h-8 inline-block' /></span>  SpaceTogether Setup
                            </Link>
                        </div>
                    </nav>
                    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                            <div className="flex h-9 items-center justify-between">
                                <div className="flex">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <span className="sr-only">Your Company</span>
                                        <img
                                            className="h-8"
                                            src={icon}
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="flex">
                                    <button
                                        type="button"
                                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">

                                    <div className="py-6">
                                        <Link
                                            to="/sign-up"
                                            className="inline-block rounded-lg px-3 py-2 text-sm font-semibold bg-sky-500 leading-6 text-white shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                                        >
                                            <span><PlusCircleIcon className='h-8 inline-block' /></span>  SpaceTogether Setup
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </div>
            </div>
            <main>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                        <div>
                            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                    <span className="text-gray-600">
                                        Announcing our new Provider Course.{' '}
                                        <a href="#" className="font-semibold text-sky-500">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            Learn more <span aria-hidden="true">&rarr;</span>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                    Optimize your space when you're not using it
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                                    Share your space during slow periods, or rent out sections when they're unoccupied. Don't waste money on a building when you're not there.
                                </p>
                                <div className="mt-8 flex gap-x-4 sm:justify-center">
                                    <a
                                        href="#"
                                        className="inline-block rounded-lg bg-sky-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 hover:bg-sky-700 hover:ring-sky-700"
                                    >
                                        Get started
                                        <span className="text-sky-200" aria-hidden="true">
                                            &rarr;
                                        </span>
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                                    >
                                        Live demo
                                        <span className="text-gray-400" aria-hidden="true">
                                            &rarr;
                                        </span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
