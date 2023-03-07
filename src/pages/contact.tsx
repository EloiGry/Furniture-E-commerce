import { Tab } from '@headlessui/react'
import Tab1 from '@/components/Contact/Tab1'
import Tab2 from '@/components/Contact/Tab2'

import React from 'react';

const Contact = () => {
    
    return (
    <div className='pt-[12vh]'>
        <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-black/20 p-1">
            <Tab className={({ selected }) =>
                    classNames(
                    'w-full rounded-lg py-2.5 text-sm leading-5 text-black font-semibold',
                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none',
                    selected
                        ? 'bg-white shadow'
                        : 'text-grey hover:bg-white/[0.12] hover:text-white'
                    )
                }>Prendre rendez vous avec un conseiller </Tab>
            <Tab className={({ selected }) =>
                    classNames(
                    'w-full rounded-lg py-2.5 text-sm leading-5 text-black font-semibold',
                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none',
                    selected
                        ? 'bg-white shadow'
                        : 'text-grey hover:bg-white/[0.12] hover:text-white'
                    )
                }>Nous contacter</Tab>
        </Tab.List>
        <Tab.Panels>
            <Tab.Panel><Tab1/></Tab.Panel>
            <Tab.Panel><Tab2/></Tab.Panel>
        </Tab.Panels>
        </Tab.Group>
    </div>
    );
};

export default Contact;

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }