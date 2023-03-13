import { BasicLayout } from '@/components/layouts/BasicLayout'
import { NextPageWithLayout } from '@/pages/_app'

const Home: NextPageWithLayout = () => <div>Home</div>

Home.getLayout = (page) => <BasicLayout>{page}</BasicLayout>

export default Home
