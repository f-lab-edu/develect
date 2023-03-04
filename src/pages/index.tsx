import { NextPage } from 'next'
import { BasicLayout } from '@/components/layouts/basic-layout'

const Home: NextPage = () => (
  <BasicLayout>
    <h1 className="text-xl font-bold">Hello World</h1>
  </BasicLayout>
)

export default Home
