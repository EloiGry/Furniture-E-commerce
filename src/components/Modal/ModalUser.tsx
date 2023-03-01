import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { signOut, useSession, signIn } from 'next-auth/react';
import { RightToLeft, Opacity } from './Transition'

const connected = [{name: "Déconnexion", icon: EditActiveIcon, onClick: signOut}, {name: "Mes commandes", icon: EditActiveIcon, onClick: signOut},{name: "Editer profil", icon: EditActiveIcon, onClick: signOut}]
const disconnected = [{name: "Se connecter", icon: EditActiveIcon, onClick: signIn},{name: "S'inscrire", icon: EditActiveIcon, onClick: signIn}]

export default function ModalUser({isUserOpen, setIsUserOpen}) {
    const {data : session} = useSession()
  

  function closeModal() {
    setIsUserOpen(false)
  }


  return (
    <>
      <Transition appear show={isUserOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            {...Opacity}
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 overflow-y-auto">
            <div className="flex min-h-full items-right justify-right text-center overflow-x-hidden">
              <Transition.Child
                as={Fragment}
                {...RightToLeft}
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                {session ? (<>
              {connected.map(el => {
                return (
                  <div key={el.name}>

                  <button
                  onClick={() => el.onClick()}
                    className="group flex w-full items-center rounded-md px-2 py-2 text-sm"
                  >
                    
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    {el.name}
                  </button>
              </div>
                )
              })}
                
              
              </>) : (<>
              {disconnected.map(el => {
                return (
                  <div key={el.name}>

                  <button
                  onClick={() => el.onClick("auth0")}
                    className="flex w-full items-center rounded-md px-2 py-2 text-sm"
                  >
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    {el.name}
                  </button>
              </div>
                )
              })}
                
              
              </>
              )}

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
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