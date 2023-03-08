import Link from 'next/link'
import { Routes } from '@/lib/constants/routes'
import LogoImage from '@/public/svg/logos/logo.svg'

type LogoSize = 'sm' | 'md' | 'lg'

interface LogoProps {
  size?: LogoSize
  linkActive?: boolean
}

export const Logo = ({ size = 'md', linkActive = false }: LogoProps) => {
  const sizeClass = {
    sm: 'h-4',
    md: 'h-8',
    lg: 'h-12',
  }[size]

  return (
    <span className="flex items-center">
      {linkActive ? (
        <Link href={Routes.ROOT}>
          <LogoImage className={sizeClass} />
        </Link>
      ) : (
        <LogoImage className={sizeClass} />
      )}
    </span>
  )
}
