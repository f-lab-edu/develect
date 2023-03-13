import { BasicLayout } from '@/components/layouts/BasicLayout'

import type { NextPageWithLayout } from '@/pages/_app'
import type { ReactElement } from 'react'

const Explore: NextPageWithLayout = () => <div>Explore</div>

Explore.getLayout = function getLayout(page: ReactElement) {
  return <BasicLayout>{page}</BasicLayout>
}

export default Explore
