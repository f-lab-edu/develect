import { Button } from '@/components/button'
import { Logo } from '@/components/logo'

import { GlobalNavigation } from './global-navigation'

export const Header = () => (
  <header className="sticky top-0 flex h-[var(--header-height)] items-center justify-between border-b border-b-gray-100 bg-white px-4 md:px-8">
    <span className="flex h-full gap-x-10">
      <Logo size="sm" linkActive />
      <GlobalNavigation />
    </span>
    <span>
      <Button>회원가입</Button>
    </span>
  </header>
)
