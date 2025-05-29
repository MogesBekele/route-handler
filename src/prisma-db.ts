import {PrismaClient} from '@prisma/client';
import { resolve } from 'path';

const prisma  = new PrismaClient()

const seedProducts = async ()=>{
  const count = await prisma.product.count();

  if(count ===0){

    await prisma.product.createMany({
      data: [
        { title: 'Product 2', price: 200, description: 'Description for product 2' },
        { title: 'Product 1', price: 100, description: 'Description for product 1' },
        { title: 'Product 3', price: 300, description: 'Description for product 3' },
      ],
    });
    console.log('Products seeded successfully');
  }
  

}

seedProducts()

// create a function to get all products
export const getProducts = async () => {
  await new Promise((resolve)=>{setTimeout(resolve, 2000)});
  const products = await prisma.product.findMany();
  return products;
}

// create a function to get a product by id
export const getProductById = async (id: number) => {
  await new Promise((resolve)=>{setTimeout(resolve, 2000)});
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  return product;
}

// create a function to create a product
export const createProduct = async (data: { title: string; price: number; description: string }) => {
  await new Promise((resolve)=>{setTimeout(resolve, 2000)});
  const product = await prisma.product.create({
    data: data,
  });
  return product;
}
