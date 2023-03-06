import { pretendard } from '@/styles/font'

interface BasicLayoutProps {
  children?: React.ReactNode
}

export const BasicLayout = ({ children }: BasicLayoutProps) => (
  <div
    className={`${pretendard.className} flex min-h-screen flex-col font-sans`}
  >
    <header />
    <main className="container flex-auto">{children}</main>
    <footer />
  </div>
)
