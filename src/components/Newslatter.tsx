import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const Newslatter = () => {
	let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
    return (
		<>
        <div className="w-full relative bg-[url('../../public/PictureNewslatter.jpg')] py-32 bg-center bg-blend-multiply bg-cover">
	<div className="container flex flex-col flex-wrap content-center justify-center p-4 py-10 md:py-20 mx-auto md:p-10">
		<h1 className="text-5xl antialiased font-bold leading-none text-center">Se tenir au courant des nouveautés</h1>
		<p className="pt-2 pb-8 font-semibold text-xl antialiased text-center">Informez-vous sur les événements et autres nouvelles</p>
		<div className="flex flex-row">
			<input type="text" placeholder="example@email.com" className="outline-none w-3/5 p-3 rounded-l-lg sm:w-2/3" />
			<button onClick={openModal} type="button" className="w-2/5 p-3 font-bold rounded-r-lg sm:w-1/3 bg-black hover:bg-opacity-90 text-white">S'inscrire</button>
		</div>
	</div>
</div>
<Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Inscription réussie
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Vous allez trecevoir un mail dans les prochaines secondes !
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      C'est daccord !
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
	  </>
    );
};

export default Newslatter;

