import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

type Data = {
    question: string;
    answer:string;
}

export default function DropDown({question, answer}: Data) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-start gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-gray-900  ring-gray-300 ring-inset hover:bg-gray-50">
        {question} 
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="mb-5 z-10 origin-top-right divide-y divide-gray-100  bg-white shadow-lg ring-1 ring-black/5  focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        
        <div className="">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              {answer}
            </a>
          </MenuItem>
        </div>
        
      </MenuItems>
    </Menu>
  )
}