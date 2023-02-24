import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { signOut, useSession, signIn } from 'next-auth/react';

const connected = [{name: "Déconnexion", icon: EditActiveIcon, onClick: signOut}, {name: "Mes commandes", icon: EditActiveIcon, onClick: signOut},{name: "Editer profil", icon: EditActiveIcon, onClick: signOut}]
const disconnected = [{name: "Se connecter", icon: EditActiveIcon, onClick: signIn},{name: "S'inscrire", icon: EditActiveIcon, onClick: signIn}]

export default function PopoverUser() {
  const [isShowing, setIsShowing] = useState(false)
  const {data: session} = useSession()
  return (
    <div onMouseEnter={() => setIsShowing(true)} onMouseLeave={() => setIsShowing(false)}>
      <Menu as="div" className="relative">
          <Menu.Button className="block p-6 underlined text-black">
          {session ? (<div >
              <img src={session.user.image} className="h-4 w-4" style={{borderRadius: "50%"}}/>

              <span className="sr-only"> Déconnexion </span> 

          </div>) : (<div>
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="sr-only"> Se connecter </span> 
              {/* </button> */}
          </div>)}
          </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          show={isShowing}
        >
          <Menu.Items className="absolute z-10 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {session ? (<>
              {connected.map(el => {
                return (
                  <Menu.Item key={el.name}>
                {({ active }) => (
                  <button
                  onClick={() => el.onClick()}
                    className={`${
                      active ? 'bg-grey text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    {el.name}
                  </button>
                )}
              </Menu.Item>
                )
              })}
                
              
              </>) : (<>
              {disconnected.map(el => {
                return (
                  <Menu.Item key={el.name}>
                {({ active }) => (
                  <button
                  onClick={() => el.onClick("auth0")}
                    className={`${
                      active ? 'bg-gray-50' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    {el.name}
                  </button>
                )}
              </Menu.Item>
                )
              })}
                
              
              </>
              )}
              
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}



function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="grey"
        stroke="grey"
        strokeWidth="2"
      />
    </svg>
  )
}