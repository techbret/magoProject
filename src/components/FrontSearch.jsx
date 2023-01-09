import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RadioGroup } from "@headlessui/react";
import churchIcon from '../assets/church.svg';
import weightIcon from '../assets/weight.svg';
import buildingIcon from '../assets/building.svg';
import kitchenIcon from '../assets/kitchen.svg';
import officeIcon from '../assets/office.svg';
import studioIcon from '../assets/studio-light.svg';
import {
  HomeModernIcon,
  BuildingOffice2Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const memoryOptions = [
  { name: "Sunday", inStock: true },
  { name: "Monday", inStock: true },
  { name: "Tuesday", inStock: true },
  { name: "Wednesday", inStock: true },
  { name: "Thursday", inStock: true },
  { name: "Friday", inStock: true },
  { name: "Saturday", inStock: true },
];

const officeTypes = [
  { name: "Church", inStock: true, icon: churchIcon },
  { name: "Co-Working", inStock: true, icon: buildingIcon },
  { name: "Gym", inStock: true, icon: weightIcon },
  { name: "Kitchen", inStock: true, icon: kitchenIcon },
  { name: "Office", inStock: true, icon: officeIcon  },
  { name: "Studio", inStock: true, icon: studioIcon  },
  { name: "Other", inStock: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FrontSearch() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [mem, setMem] = useState(null);
  const [space, setSpace] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="relative py-12 px-8 ">
        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl sm:mt-12">
          <span className="block text-white">Find your Space</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-2xl text-zinc-800 font-bold tracking-tight sm:text-3xl lg:text-4xl sm:max-w-3xl">
          Find the right fit for you, or your organization.
        </p>
      </div>

      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl border border-zinc-800 border-2 bg-white sm:overflow-hidden sm:rounded-md">
                <div className="relative py-16 px-6 sm:py-24 lg:py-8 lg:px-8">
                  <form>
                    <div className="flex mx-auto">
                      <p className="text-lg">I'm looking to:</p>
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        className="h-6 w-6 ml-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                      />
                      <label
                        htmlFor="push-everything"
                        className="ml-2 block text-lg font-medium text-gray-700"
                      >
                        Find a Space
                      </label>

                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        className="h-6 w-6 ml-4 border-gray-300 text-sky-600 focus:ring-sky-500"
                      />
                      <label
                        htmlFor="push-everything"
                        className="ml-2 block text-lg font-medium text-gray-700"
                      >
                        Rent a Space
                      </label>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mt-8">
                        <h2 className="text-sm font-medium text-gray-900">
                          Type of Space
                        </h2>
                      </div>

                      <RadioGroup
                        value={mem}
                        onChange={setSpace}
                        className="mt-2"
                      >
                        <RadioGroup.Label className="sr-only">
                          {" "}
                          Choose a memory option{" "}
                        </RadioGroup.Label>
                        <div className="grid grid-cols-3 gap-3 sm:grid-cols-7">
                          {officeTypes.map((option) => (
                            
                            <RadioGroup.Option
                              key={option.name}
                              value={option}
                              className={({ active, checked }) =>
                                classNames(
                                  option.inStock
                                    ? "cursor-pointer focus:outline-none"
                                    : "opacity-25 cursor-not-allowed",
                                  active
                                    ? "ring-2 ring-offset-2 ring-indigo-500"
                                    : "",
                                  checked
                                    ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700"
                                    : "bg-white border-gray-300 border-2 text-gray-900 hover:bg-gray-50",
                                  "border rounded-md py-8 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1"
                                )
                              }
                              disabled={!option.inStock}
                            >
                              <RadioGroup.Label as="span">
                                <img src={option.icon} alt="" className="h-6 mx-auto"/>                                 
                                {option.name}
                              </RadioGroup.Label>
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="grid grid-cols-3 gap-5 space-y-0 mt-8">
                      <div>
                        <label
                          htmlFor="location"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Location
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          className="mt-1 h-12 block w-full rounded-sm border-gray-300 py-2 pl-3 pr-10 text-base focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm border-2 "
                          placeholder="Zip code or Address"
                        ></input>
                      </div>

                      <div>
                        <label
                          htmlFor="location"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Start Date
                        </label>
                        <DatePicker
                          selected={selectedDate}
                          onChange={handleDateChange}
                          className="mt-1 h-12 block w-full rounded-sm border-gray-300 py-2 pl-3 pr-10 text-base focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm border-2 "
                          placeholderText="Select a date"
                        />
                      </div>

                      <div className="">
                        <label
                          htmlFor="location"
                          className="block text-sm font-medium text-gray-700"
                        >
                          End Date
                        </label>
                        <DatePicker
                          selected={selectedDate}
                          onChange={handleDateChange}
                          className="mt-1 h-12 block w-full rounded-sm border border-gray-300  py-2 pl-3 pr-10 text-base focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm border-2 "
                          placeholderText="Select a date"
                        />
                      </div>
                      <div className="col-span-2">
                        <div>
                          <div className="flex items-center justify-between mt-2">
                            <h2 className="text-sm font-medium text-gray-900">
                              Days of the week
                            </h2>
                          </div>

                          <RadioGroup
                            value={mem}
                            onChange={setMem}
                            className="mt-2"
                          >
                            <RadioGroup.Label className="sr-only">
                              {" "}
                              Choose a memory option{" "}
                            </RadioGroup.Label>
                            <div className="grid grid-cols-3 gap-3 sm:grid-cols-7">
                              {memoryOptions.map((option) => (
                                <RadioGroup.Option
                                  key={option.name}
                                  value={option}
                                  className={({ active, checked }) =>
                                    classNames(
                                      option.inStock
                                        ? "cursor-pointer focus:outline-none"
                                        : "opacity-25 cursor-not-allowed",
                                      active
                                        ? "ring-2 ring-offset-2 ring-indigo-500"
                                        : "",
                                      checked
                                        ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700"
                                        : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                                      "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1"
                                    )
                                  }
                                  disabled={!option.inStock}
                                >
                                  <RadioGroup.Label as="span">
                                    {option.name}
                                  </RadioGroup.Label>
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="location"
                          className="block text-sm font-medium text-gray-700 mt-3"
                        >
                          Times
                        </label>

                        <div className="flex -space-x-px mt-1">
                          <div className="w-1/2 min-w-0 flex-1">
                            <select
                              id="location"
                              name="location"
                              className="relative h-12 block w-full rounded-none rounded-l-sm focus:z-10 border-gray-300  pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              defaultValue="12:00"
                            >
                              <option>12:00</option>
                              <option>12:30</option>
                              <option>Mexico</option>
                            </select>
                          </div>
                          <div className="min-w-0 flex-1">
                            <label htmlFor="card-cvc" className="sr-only">
                              CVC
                            </label>
                            <select
                              id="location"
                              name="location"
                              className="relative h-12 block w-full rounded-none rounded-l-sm border-gray-300 focus:z-10 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              defaultValue="AM"
                            >
                              <option>AM</option>
                              <option>PM</option>
                            </select>
                          </div>
                        </div>
                        <div className="relative flex items-start mt-2">
                          <div className="flex h-5 items-center">
                            <input
                              id="comments"
                              aria-describedby="comments-description"
                              name="comments"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="comments"
                              className="font-medium text-gray-700"
                            >
                              I need/have multiple time slots
                            </label>
                            <p
                              id="comments-description"
                              className="text-gray-500 text-xs"
                            >
                              All spaces have flexibility and are not limited to
                              the parameters of this search. This is just to
                              give you a start
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mx-auto mt-10">
                      <div className="">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-sm border border-transparent bg-sky-500 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8 "
                        >
                          Search
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
              <p className="text-center text-base font-semibold text-gray-500">
                Trusted by over 300 businesses and 1800 users
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                    alt="Tuple"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                    alt="Mirage"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
}
