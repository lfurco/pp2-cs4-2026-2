import { prisma } from "../database/client.js";
import type { CreateCarDto } from "../dto/car/createCarDto.js";

export function findAll() {
 return prisma.car.findMany({
   include: {
     customer: {
       select: { name: true },
     },
   },
   orderBy: { id: "asc" },
 });
}

export function create(data: CreateCarDto) {
 return prisma.car.create({
   data,
 });
}
