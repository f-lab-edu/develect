import { ReactElement, useEffect } from 'react'
import { BasicLayout } from '@/components/layouts/BasicLayout'
import { NextPageWithLayout } from '@/pages/_app'

const Home: NextPageWithLayout = () => {
  // Test API
  useEffect(() => {
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }, [])

  return <div>Home</div>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <BasicLayout>{page}</BasicLayout>
}

export default Home
