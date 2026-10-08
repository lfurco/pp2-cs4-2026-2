import * as repository from "../repositories/carRepository.ts";
import type { CreateCarDto } from "../dto/car/createCarDto.ts";

export async function create(data: CreateCarDto) {
 return repository.create(data);
}
