import { prisma } from '@/lib/prisma/client'

import type { User } from '@/prisma/generated'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  try {
    const user = await prisma.user.findFirst()
    if (!user) {
      res.status(404)
      return
    }
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500)
  }
}
