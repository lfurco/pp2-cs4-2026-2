import type {
 Request,
 Response,
 NextFunction,
} from "express";
import * as service from "../services/carService.ts";
import type { CreateCarDto } from "../dto/car/createCarDto.ts";

type CreateCarRequest = Request<
 Record<string, never>,
 unknown,
 CreateCarDto
>;

export async function create(
 req: CreateCarRequest,
 res: Response,
 next: NextFunction
): Promise<void> {
 try {
   const car = await service.create(req.body);
   res.status(201).json(car);
 }
 catch (error) {
   next(error);
 }
}
