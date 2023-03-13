import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'
import { Button } from '@/components/button'
import { GlobalNavigation } from '@/components/header/GlobalNavigation'
import { Logo } from '@/components/logo'
import { Routes } from '@/lib/constants/routes'

export const Header = () => {
  const { pathname } = useRouter()
  const { data: session } = useSession()

  return (
    <header className="header-container flex items-center justify-between">
      <span className="flex h-full gap-x-10">
        <Logo size="sm" linkActive />
        <GlobalNavigation />
      </span>
      <span>
        {session ? (
          <button onClick={() => signOut()} type="button">
            로그아웃
          </button>
        ) : (
          <Link
            href={{
              pathname: Routes.AUTH_SIGNIN,
              query: { redirect: pathname },
            }}
          >
            <Button>시작하기</Button>
          </Link>
        )}
      </span>
    </header>
  )
}
