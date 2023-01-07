import React from "react";
import StickyNavbar from "../components/StickyNavBar";
import { UserAuth } from "../context/AuthContext";
import icon from "../assets/icon.svg";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

const officeTypes = [
  { name: "Church", inStock: true },
  { name: "Co-Working", inStock: true },
  { name: "Gym", inStock: true },
  { name: "Kitchen", inStock: true },
  { name: "Office", inStock: true },
  { name: "Studio", inStock: true },
  { name: "Other", inStock: true },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  

export default function BecomeProvider() {
  const { user } = UserAuth();
  const [space, setSpace] = useState(null);

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <img src={icon} className="h-12 mx-auto" alt="" />
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-4xl">
              What best describes your space?
            </p>
          </div>
          <div>

            <RadioGroup value={space} onChange={setSpace} className="mt-8">
              <RadioGroup.Label className="sr-only">
                {" "}
                Choose a memory option{" "}
              </RadioGroup.Label>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                {officeTypes.map((option) => (
                  <RadioGroup.Option
                    key={option.name}
                    value={option}
                    className={({ active, checked }) =>
                      classNames(
                        option.inStock
                          ? "cursor-pointer focus:outline-none"
                          : "opacity-25 cursor-not-allowed",
                        active ? "ring-2 ring-offset-2 ring-indigo-500" : "",
                        checked
                          ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700"
                          : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                        "border rounded-md p-24 flex items-center justify-center text-sm font-medium uppercase sm:flex-1"
                      )
                    }
                    disabled={!option.inStock}
                  >
                    <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
      <StickyNavbar />
    </div>
  );
}
