import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Opacity } from '../Transition'
import Cart from './Cart'
import { useAppStore } from '@/lib/store';
import { CloseIcon } from '@/assets/icon/Icon';

export default function ModalCart({ isCartOpen, setIsCartOpen }) {
  const { cart } = useAppStore()
  function closeModal() {
    setIsCartOpen(false)
  }

  return (
    <>
      <Transition appear show={isCartOpen} as={Fragment}>
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
                <Dialog.Panel className="relative w-full md:w-[500px] transform overflow-x-hidden overflow-y-auto bg-white p-6 text-left align-middle shadow-xl transition-all">
                <button onClick={() => closeModal()} className="absolute top-20 right-2"> <CloseIcon/> </button>
                  <Cart products={cart}/>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Valider mon panier
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