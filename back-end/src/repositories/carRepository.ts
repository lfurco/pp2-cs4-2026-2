import { prisma } from "../database/client.js";
import type { CreateCarDto } from "../dto/car/createCarDto.js";

export function create(data: CreateCarDto) {
 return prisma.car.create({
   data,
 });
}
