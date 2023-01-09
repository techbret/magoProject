import React from "react";
import icon from "../assets/icon.svg";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { CheckCircleIcon } from '@heroicons/react/20/solid'

const mailingLists = [
    { name: "The Entire Space", inStock: true, description: 'Renters have the entire space to themselves' },
    { name: "A Private Space", inStock: true, description: 'Renters have the entire space to themselves' },
    { name: "A Shared Space", inStock: true, description: 'Renters have the entire space to themselves' },
    { name: "Access to Multiple Private Spaces", inStock: true, description: 'Renters have the entire space to themselves' },
    { name: "Access to Multiple Shared Spaces", inStock: true, description: 'Renters have the entire space to themselves' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


export default function TypeOfSpace() {
    const [space, setSpace] = useState(null);
    const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])

    console.log(space)

    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-4xl py-16 px-6 sm:py-24 lg:px-8">
                    <div className="text-center">
                        <img src={icon} className="h-12 mx-auto" alt="" />
                        <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-4xl">
                            What type of space will the renters have?
                        </p>
                    </div>
                    <div className="max-w-xl mx-auto">

                        <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>

                            <div className="mt-12 grid grid-cols-1 gap-y-2">
                                {mailingLists.map((mailingList) => (
                                    <RadioGroup.Option
                                        key={mailingList.id}
                                        value={mailingList}
                                        className={({ checked, active }) =>
                                            classNames(
                                                checked ? 'border-transparent' : 'border-gray-300',
                                                active ? 'border-indigo-500 ring-2 ring-indigo-500' : '',
                                                'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                                            )
                                        }
                                    >
                                        {({ checked, active }) => (
                                            <>
                                                <span className="flex flex-1">
                                                    <span className="flex flex-col">
                                                        <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                                                            {mailingList.name}
                                                        </RadioGroup.Label>
                                                        <RadioGroup.Description as="span" className="mt-1 flex items-center text-sm text-gray-500">
                                                            {mailingList.description}
                                                        </RadioGroup.Description>
                                                    </span>
                                                </span>
                                                <CheckCircleIcon
                                                    className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-600')}
                                                    aria-hidden="true"
                                                />
                                                <span
                                                    className={classNames(
                                                        active ? 'border' : 'border-2',
                                                        checked ? 'border-indigo-500' : 'border-transparent',
                                                        'pointer-events-none absolute -inset-px rounded-lg'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </>
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>
                    </div>
                </div>
            </div>
        </div>
    );
}
