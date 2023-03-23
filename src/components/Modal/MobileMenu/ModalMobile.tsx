import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { RightToLeft, Opacity } from '../Transition'
import MobileHeader from './MobileHeader'

export default function ModalMobile({ isMobileOpen, setIsMobileOpen }) {


  function closeModal() {
    setIsMobileOpen(false)
  }


  return (
    <>
      <Transition appear show={isMobileOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                // {...RightToLeft}
              >
                <Dialog.Panel className="w-full md:w-[500px] transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Mes coups de coeurs
                  </Dialog.Title> */}
                  <MobileHeader/>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}