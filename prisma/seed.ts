import { PrismaClient } from '@prisma/client'
import { products } from "./data"
const prisma = new PrismaClient()

export const load = async () => {
    try {  
      await prisma.product.createMany({
        data: products
      })
      console.log('Added product data')
    } catch (e) {
      console.error(e)
      process.exit(1)
    } finally {
      await prisma.$disconnect()
    }
  }
  
  load()