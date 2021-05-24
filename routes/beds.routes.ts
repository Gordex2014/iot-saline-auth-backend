import { Router } from "express";
import {
  createBed,
  getBedById,
  listBeds,
  listBedsByRoomId,
  updateBed,
} from "../controllers/beds.controller";
import {
  bedCreationMiddleware,
  bedModificationMiddleware,
  validateJwt,
  validBedMiddleware,
  validRoomForBedsMiddleware,
} from "../middlewares";

const router = Router();

router.use(validateJwt(["USER_ADMIN_ROLE"]));

router.get("/", listBeds);

router.get("/rooms/:roomId", validRoomForBedsMiddleware, listBedsByRoomId);

router.get("/:id", validBedMiddleware, getBedById);

router.post("/", bedCreationMiddleware, createBed);

router.put("/:id", bedModificationMiddleware, updateBed);

export default router;
