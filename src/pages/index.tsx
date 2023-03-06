import type { ReactElement } from 'react'
import { BasicLayout } from '@/components/layouts/basic-layout'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => (
  <BasicLayout>
    <p className="heading-m font-bold">Hello World</p>
  </BasicLayout>
)

Home.getLayout = function getLayout(page: ReactElement) {
  return <BasicLayout>{page}</BasicLayout>
}

export default Home
