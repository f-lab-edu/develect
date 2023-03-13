import classNames from 'classnames'

import { AuthLayout } from '@/components/layouts/AuthLayout'
import { useSignInWithGoogle } from '@/modules/auth/hooks/useSignInWithGoogle'
import GoogleIcon from '@/public/svg/logos/google.svg'

import type { NextPageWithLayout } from '@/pages/_app'

const SignIn: NextPageWithLayout = () => {
  const { signInWithGoogle } = useSignInWithGoogle()

  return (
    <>
      <h1 className="heading-m font-bold">
        디벨렉트에 오신 것을 <br />
        환영합니다.
      </h1>
      <p className="label-m mt-3">토픽을 선택하고 의견을 공유해주세요.</p>
      <button
        type="button"
        onClick={signInWithGoogle}
        className={classNames(
          'mt-10 w-full rounded-[24px] border border-gray-300 py-2 px-4',
          'flex items-center justify-center gap-2'
        )}
      >
        <GoogleIcon />
        <p className="label-m font-medium">구글로 시작하기</p>
      </button>
    </>
  )
}

SignIn.getLayout = (page) => <AuthLayout>{page}</AuthLayout>

export default SignIn
