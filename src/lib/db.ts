import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient() {
  return new PrismaClient({
    log: ['query'],
  })
}

// Lazy initialization — only creates the client when accessed.
// This prevents build-time errors on platforms where DATABASE_URL
// may not be configured (e.g. Vercel, Netlify).
export const db = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    if (!globalForPrisma.prisma) {
      globalForPrisma.prisma = createPrismaClient()
    }
    const client = globalForPrisma.prisma as Record<string | symbol, unknown>
    return client[prop as string | symbol]
  },
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma ??= undefined
