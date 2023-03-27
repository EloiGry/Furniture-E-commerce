import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { signOut, useSession, signIn } from 'next-auth/react';
import { Opacity } from '../Transition'
import { CloseIcon, UserIcon } from '@/assets/icon/Icon';

const connected = [{ name: "Déconnexion", icon: EditActiveIcon, onClick: signOut }, { name: "Mes commandes", icon: EditActiveIcon, onClick: signOut }, { name: "Editer profil", icon: EditActiveIcon, onClick: signOut }]
const disconnected = [{ name: "Je souhaite me connecter à mon compte", icon: EditActiveIcon, onClick: signIn }, { name: "Je souhaite me créer un compte utilisateur", icon: EditActiveIcon, onClick: signIn }]

export default function ModalUser({ isUserOpen, setIsUserOpen }) {
  const { data: session } = useSession()
  


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

          <div className="fixed inset-y-0 right-0 overflow-y-auto w-full md:w-[500px]">
            <div className="flex min-h-full items-right justify-right text-center overflow-x-hidden">
              <Transition.Child
                as={Fragment}

              >
                <Dialog.Panel className="relative flex flex-col justify-evenly items-center pt-[12vh] w-full md:w-[500px] transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                <button onClick={() => closeModal()} className="absolute top-20 right-2"> <CloseIcon/> </button>
                  <div className='flex justify-center mb-4'>
                    <UserIcon />
                  </div>
                  <div className="w-full">
                  {session ? (<>
                    {connected.map(el => {
                      return (
                        <div key={el.name} >

                          <button
                            onClick={() => el.onClick()}
                            className="flex w-full items-center rounded-md px-2 py-2 border-2 border-black bg-black text-white my-4 hover:bg-white hover:text-black duration-300 transition-all"
                          >

                            <EditActiveIcon
                              className="mr-4 h-5 w-5"
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
                            className="flex w-full items-center rounded-md px-2 py-2 border-2 border-black bg-black text-white my-4 hover:bg-white hover:text-black duration-300 transition-all"
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

function EditActiveIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>

  )
}