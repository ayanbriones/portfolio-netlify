/* This examplHe requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header({
  handleIntroScroll,
  handleProjectsScroll,
  handleSkillSetScroll,
  handleAboutScroll,
}) {
  const navigation = [
    { name: 'Home', current: false, scrollTo: handleIntroScroll },
    {
      name: 'Projects',
      current: false,
      scrollTo: handleProjectsScroll,
    },
    {
      name: 'About',
      current: false,
      scrollTo: handleAboutScroll,
    },
    {
      name: 'Skills',
      current: false,
      scrollTo: handleSkillSetScroll,
    },
  ]
  return (
    <>
      <div className='min-h-full'>
        <Disclosure as='nav' className='bg-inherit'>
          {({ open }) => (
            <>
              <div className='max-w-7xl mx-auto'>
                <div className='flex items-center justify-between h-16'>
                  <div className='flex items-center'>
                    <div className='hidden md:block'>
                      <div className='flex items-baseline space-x-4'>
                        {navigation.map((item) => (
                          <button
                            onClick={item.scrollTo}
                            key={item.name}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'group px-3 py-2 text-lg font-medium text-gray-300 transition duration-300'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                            <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-gradient-to-r from-yellow-100 to-orange-500'></span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='-mr-2 flex md:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                      ) : (
                        <MenuIcon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className='md:hidden'>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                  {navigation.map((item) => (
                    <Disclosure.Button
                      onClick={item.scrollTo}
                      key={item.name}
                      as='a'
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}
