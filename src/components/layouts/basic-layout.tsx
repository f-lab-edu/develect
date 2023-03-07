import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { pretendard } from '@/styles/font'

interface BasicLayoutProps {
  children?: React.ReactNode
}

export const BasicLayout = ({ children }: BasicLayoutProps) => (
  <div
    className={`${pretendard.className} flex min-h-screen flex-col font-sans`}
  >
    <Header />
    <main className="container flex-auto">{children}</main>
    <Footer />
  </div>
)
