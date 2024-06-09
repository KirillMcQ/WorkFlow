'use server'
import { prisma } from '@/prisma'

export const getProjectsOwnedByUser = async (userId: string | undefined) => {
  if (!userId) { // This will only be undefined if the currentUser function is loading.
    return []
  }

  return prisma.project.findMany({
    where: {
      uidCreated: userId
    }
  })
}
