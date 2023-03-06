import { NextPage } from 'next'
import { BasicLayout } from '@/components/layouts/basic-layout'

const Home: NextPage = () => (
  <BasicLayout>
    <p className="heading-m font-bold">Hello World</p>
  </BasicLayout>
)

export default Home
