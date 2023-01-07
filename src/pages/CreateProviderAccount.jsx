/* This example requires Tailwind CSS v3.0+ */
import { useEffect, useState } from "react";
import Google from '../assets/googleLogo.png';
import icon from "../assets/icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function CreateProviderAccount() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [displayName, setDisplayName] = useState("");

  const { createUser } = UserAuth()

  const navigate = useNavigate()


  const createNewAccount = async (e) => {
    e.preventDefault();
    setError("");
    setDisplayName(firstName + ' ' + lastName)
    if (password === confirmPassword) {
      try {
        await createUser(email, password, firstName, lastName);
      } catch (e) {
        setError(e.message);
        console.log(e.message);
      }
    }
    
  };

  return (
    <div className="isolate bg-zinc-100 h-screen">
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
                Exit
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="h-full">
        <div className="flex min-h-full flex-col justify-center ">
          <div className="shadow-xl mx-auto bg-white sm:-mt-12 mt-4">
            <div className="sm:mx-auto sm:w-full sm:max-w-lg p-8">
              <img
                className="mx-auto h-12 w-auto"
                src={icon}
                alt="Your Company"
              />
              <h2 className="mt-6  text-center text-3xl font-bold tracking-tight text-gray-900">
                Create your Provider Account
              </h2>
            </div>

            <div className=" sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white pb-8 px-4  sm:rounded-lg sm:px-10">
                <form className="space-y-4" action="#" method="POST">
                  <div className="relative rounded-md border border-gray-300 px-1 py-1 shadow-sm bg-gray-50 focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600">
                    <label
                      htmlFor="firstname"
                      className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900 "
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="block w-full border-0 px-3 py-3 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm bg-gray-50"
                      placeholder="First Name"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>

                  <div>
                    <div className="relative rounded-md border border-gray-300 px-1 py-1 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600 bg-gray-50">
                      <label
                        htmlFor="lastname"
                        className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        className="block w-full border-0 p-0 text-gray-900 px-3 py-3 placeholder-gray-500 focus:ring-0 sm:text-sm bg-gray-50"
                        placeholder="Last Name"
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative rounded-md border border-gray-300 px-1 py-1 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600 bg-gray-50">
                      <label
                        htmlFor="email"
                        className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 px-3 py-3 focus:ring-0 sm:text-sm bg-gray-50"
                        placeholder="Email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative rounded-md border border-gray-300 px-1 py-1 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600 bg-gray-50">
                      <label
                        htmlFor="password"
                        className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="block w-full border-0 p-0 text-gray-900 px-3 py-3 placeholder-gray-500 focus:ring-0 sm:text-sm bg-gray-50"
                        placeholder="Password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative rounded-md border border-gray-300 px-1 py-1 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600 bg-gray-50">
                      <label
                        htmlFor="password-confirm"
                        className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="password-confirm"
                        id="password-confirm"
                        className="block w-full border-0 p-0 text-gray-900  px-3 py-3 placeholder-gray-500 focus:ring-0 sm:text-sm bg-gray-50"
                        placeholder="Confirm Password"
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      id="recaptcha-container"
                      className="flex w-full justify-center rounded-md border border-transparent bg-sky-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                      onClick={createNewAccount}
                    >
                      Continue
                    </button>
                  </div>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div>
                      <a
                        href="#"
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                      >
                        <span className="sr-only">Sign in with Facebook</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="#4267B2"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>

                    <div>
                      <a
                        href="#"
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                      >
                        <span className="sr-only">Sign in with Google</span>
                        <img src={Google} className="h-5 w-5" alt="" />
                      </a>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
