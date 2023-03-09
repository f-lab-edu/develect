import { BasicLayout } from '@/components/layouts/basic-layout'
import { NextPageWithLayout } from '@/pages/_app'

import type { ReactElement } from 'react'

const Home: NextPageWithLayout = () => <div>Home</div>

Home.getLayout = function getLayout(page: ReactElement) {
  return <BasicLayout>{page}</BasicLayout>
}

export default Home
