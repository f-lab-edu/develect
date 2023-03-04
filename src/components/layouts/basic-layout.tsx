import { pretendard } from '@/styles/font'

interface BasicLayoutProps {
  children?: React.ReactNode
}

export const BasicLayout = ({ children }: BasicLayoutProps) => (
  <div className={`${pretendard.className} font-sans`}>
    <header />
    <main>{children}</main>
    <footer />
  </div>
)
