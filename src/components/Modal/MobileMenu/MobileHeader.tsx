import { OrderIcon, SearchIcon } from "@/assets/icon/Icon";
import { useSession } from "next-auth/react";
import { dataLiving, dataDecoration } from "@/utils/DataHeader";
import Disclosure from "./Disclosure";
import Image from "next/image";
import { useState } from "react";
import ModalSearch from "../Search/ModalSearch";
import Link from "next/link";


const MobileHeader = ({ closeModal }) => {
  const { data: session } = useSession()
  let [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)

  return (
    <div className="h-full mt-2 p-3 space-y-4 md:space-y-8 pt-[10vh]">
      <div className="divide-y divide-gray-900">
        <ul className="pt-2 pb-4 space-y-2 md:space-y-4 text-sm divide-y divide-gray-300">
          <li>
            <Disclosure title="Espace de vie">
              {dataLiving.map(item => {
                return (
                  <Link
                    onClick={closeModal}
                    key={item.name}
                    href={item.href}
                    className="m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white">
                      <Image src={item.icon} alt="" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </Disclosure>
          </li>
          <li>
            <Disclosure title="Décorations">
              {dataDecoration.map(item => {
                return (
                  <Link
                    onClick={closeModal}
                    key={item.name}
                    href={item.href}
                    className="m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white">
                      <Image src={item.icon} alt="" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </Disclosure>
          </li>
          <li>
            <Link href="/about" onClick={closeModal} className="flex items-center rounded-lg py-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
              <span className="capitalize"> à propos </span>
            </Link>
          </li>
          <li>
            <Link onClick={closeModal} href="/contact" className="flex items-center rounded-lg py-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
              <span> Contact </span>
            </Link>
          </li>
        </ul>
        <ul className="pt-4 pb-2 space-y-1 text-sm">
          <li>
            <button onClick={() => setIsSearchOpen(true)} className="flex items-center p-2 space-x-3 rounded-md">
              <SearchIcon />
              <span >Rechercher</span>
              {isSearchOpen && <ModalSearch isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />}
            </button>
          </li>
          {session &&
            <li>
              <button className="flex items-center p-2 space-x-3 rounded-md">
                <OrderIcon />
                <span>Mes Commandes</span>
              </button>
            </li>
          }
        </ul>
      </div>
    </div>
  );
};

export default MobileHeader;