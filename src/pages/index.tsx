import type { ReactElement } from 'react'
import { BasicLayout } from '@/components/layouts/basic-layout'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => (
  <div className="basic-grid">
    {Array.from({ length: 12 }, (_, i) => i).map((key) => (
      <div key={key} className="h-screen w-full bg-red-50" />
    ))}
  </div>
)

Home.getLayout = function getLayout(page: ReactElement) {
  return <BasicLayout>{page}</BasicLayout>
}

export default Home
