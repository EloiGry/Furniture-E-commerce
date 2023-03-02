import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { signOut, useSession, signIn } from 'next-auth/react';
import { RightToLeft, Opacity } from './Transition'

const connected = [{name: "Déconnexion", icon: EditActiveIcon, onClick: signOut}, {name: "Mes commandes", icon: EditActiveIcon, onClick: signOut},{name: "Editer profil", icon: EditActiveIcon, onClick: signOut}]
const disconnected = [{name: "Je souhaite me connecter à mon compte", icon: EditActiveIcon, onClick: signIn},{name: "Je souhaite me créer un compte utilisateur", icon: EditActiveIcon, onClick: signIn}]

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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-32 h-32">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Utilisateur
                  </Dialog.Title>
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
                    className="flex w-full items-center rounded-md px-2 py-2"
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