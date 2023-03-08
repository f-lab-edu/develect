import { BasicLayout } from '@/components/layouts/basic-layout'

import { NextPageWithLayout } from './_app'

import type { ReactElement } from 'react'

const Home: NextPageWithLayout = () => (
  // TODO: 테스트용 임시 코드(제거 예정)
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
