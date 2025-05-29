import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

// Utility delay function
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Seed products if table is empty
const seedProducts = async () => {
  const count = await prisma.product.count();
  if (count === 0) {
    await prisma.product.createMany({
      data: [
        {
          title: "Product 2",
          price: 200,
          description: "Description for product 2",
        },
        {
          title: "Product 1",
          price: 100,
          description: "Description for product 1",
        },
        {
          title: "Product 3",
          price: 300,
          description: "Description for product 3",
        },
      ],
    });
    console.log("Products seeded successfully");
  }
};
seedProducts();

// Get all products
export const getProducts = async () => {
  await delay(2000);
  try {
    return await prisma.product.findMany();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Get product by ID
export const getProductById = async (id: number) => {
  await delay(2000);
  try {
    return await prisma.product.findUnique({ where: { id } });
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};

// Create a product
export const createProduct = async (data: {
  title: string;
  price: number;
  description: string;
}) => {
  await delay(2000);
  try {
    return await prisma.product.create({ data });
  } catch (error) {
    console.error("Error creating product:", error);
    return null;
  }
};

// Update a product
export const updateProduct = async (
  id: number,
  data: { title?: string; price?: number; description?: string }
) => {
  await delay(2000);
  try {
    return await prisma.product.update({ where: { id }, data });
  } catch (error) {
    console.error("Error updating product:", error);
    return null;
  }
};

// Delete a product
export const deleteProduct = async (id: number) => {
  await delay(2000);
  try {
    return await prisma.product.delete({ where: { id } });
  } catch (error) {
    console.error("Error deleting product:", error);
    return null;
  }
};
