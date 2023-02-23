import { Popover, Transition } from '@headlessui/react'
import { signOut, useSession, signIn } from 'next-auth/react';
import { Fragment, useState } from 'react'


const solutions = [
  {
    name: 'Se connecter',
    href: '##',
  },
  {
    name: 'Editer profil',
    href: '##',
  }
]

export default function PopoverUser() {
    const [isShowing, setIsShowing] = useState(false)
    const {data: session} = useSession()
  return (
    <div onMouseEnter={() => setIsShowing(true)} onMouseLeave={() => setIsShowing(false)}>
      <Popover className="relative">
          <>
            <Popover.Button
            >
               {session ? (<span>
              <button className="block p-6 underlined text-black" onClick={() => signOut()}>
              <img src={session.user.image} className="h-4 w-4" style={{borderRadius: "50%"}}/>

              <span className="sr-only"> Déconnexion </span> 
              </button>

          </span>) : (<span>
              <button className="block p-6 underlined text-black" onClick={() => signIn("auth0")}>
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="sr-only"> Se connecter </span> 
              </button>

          </span>)}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-700"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
              show={isShowing}
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl" >
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        {/* <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          <Image src={item.icon} alt="" />
                        </div> */}
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
      </Popover>
    </div>
  )
}