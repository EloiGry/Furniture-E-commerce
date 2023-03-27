import { CloseIcon } from '@/assets/icon/Icon'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Opacity } from '../Transition'
import MobileHeader from './MobileHeader'

export default function ModalMobile({ isMobileOpen, setIsMobileOpen }) {


  function closeModal() {
    setIsMobileOpen(false)
  }


  return (
    <>
      <Transition appear show={isMobileOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 lg:hidden" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            {...Opacity}
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-y-0 left overflow-y-auto overflow-x-hidden w-full md:w-[500px]">
            <div className="flex h-full items-right justify-right text-center">
              <Transition.Child
                as={Fragment}
              >
                <Dialog.Panel className="relative w-full md:w-[500px] transform overflow-x-hidden overflow-y-auto bg-white p-6 text-left align-middle shadow-xl transition-all">

                  <MobileHeader closeModal={closeModal}/>
                  <button onClick={() => closeModal()} className="absolute top-20 right-2"> <CloseIcon/> </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}