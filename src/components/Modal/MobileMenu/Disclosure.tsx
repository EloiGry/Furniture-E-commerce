import { ChevronDownIcon } from '@/assets/icon/Icon';
import { Disclosure } from '@headlessui/react'

type Props = {
    title: string;
    children?: React.ReactNode;
  };

export default function MyDisclosure({title, children}:Props) {
  return (
    <Disclosure>
      <Disclosure.Button className="w-full py-2 flex justify-between items-center">
        <span>{title}</span>
        <ChevronDownIcon />
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
        {children}
      </Disclosure.Panel>
    </Disclosure>
  )
}