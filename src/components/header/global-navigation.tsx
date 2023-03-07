import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Routes } from '@/lib/routes'
import type { Navigation } from '@/lib/routes/routes.interface'

const navList: Navigation[] = [
  {
    href: Routes.ROOT,
    label: '홈',
  },
  {
    href: Routes.EXPLORE,
    label: '탐색',
  },
]

export const GlobalNavigation = () => {
  const { pathname } = useRouter()

  return (
    <nav>
      <ul className="flex h-full items-center gap-x-6">
        {navList.map(({ href, label }) => {
          const isActive = pathname === href
          return (
            <li
              key={label}
              className={classNames(
                'relative flex h-full flex-col justify-center',
                'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:transition after:content-[""]',
                'hover:after:bg-gray-700',
                isActive && 'after:bg-gray-700'
              )}
            >
              <Link
                href={href}
                className={classNames(
                  'label-l flex h-full items-center justify-center font-medium transition hover:text-gray-700',
                  isActive ? 'text-gray-700' : 'text-gray-400'
                )}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
