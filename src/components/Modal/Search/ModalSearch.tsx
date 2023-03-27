import { CloseIcon } from '@/assets/icon/Icon'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Opacity } from '../Transition'
import Search from './Search'

export default function ModalSearch({ isSearchOpen, setIsSearchOpen }) {


  function closeModal() {
    setIsSearchOpen(false)
  }


  return (
    <>
      <Transition appear show={isSearchOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            {...Opacity}
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 w-full md:w-[500px] overflow-y-auto">
            <div className="flex min-h-full items-right justify-right text-center overflow-x-hidden">
              <Transition.Child
                as={Fragment}
              >
                <Dialog.Panel className="relative w-full md:w-[500px] transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Search/>
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