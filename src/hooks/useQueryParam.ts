import { stringify } from 'querystring'

import { useRouter } from 'next/router'

export const useQueryParam = (key: string) => {
  const { query } = useRouter()
  const searchParams = new URLSearchParams(stringify(query))
  return searchParams.get(key)
}
