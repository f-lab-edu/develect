import { signIn } from 'next-auth/react'

import { useQueryParam } from '@/hooks/useQueryParam'

export const useSignInWithGoogle = () => {
  const callbackUrl = useQueryParam('redirect') || '/'

  const signInWithGoogle = () =>
    signIn('google', { callbackUrl, redirect: false })

  return { signInWithGoogle }
}
