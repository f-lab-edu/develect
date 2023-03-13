import classNames from 'classnames'

import { Footer } from '@/components/footer'
import { Logo } from '@/components/logo'

interface AuthLayoutProps {
  children?: React.ReactNode
}

export const AuthLayout = ({ children }: AuthLayoutProps) => (
  <div className="flex min-h-screen flex-col">
    <header className="header-container flex justify-center">
      <Logo size="sm" linkActive />
    </header>
    <main className="container flex-auto">
      <div className="basic-grid mt-16">
        <div
          className={classNames(
            'col-span-4 flex flex-col',
            'md:col-span-4 md:col-start-3',
            'lg:col-span-6 lg:col-start-4'
          )}
        >
          {children}
        </div>
      </div>
    </main>
    <Footer />
  </div>
)
