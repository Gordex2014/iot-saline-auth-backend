import { Router } from "express";
import {
  createRoom,
  getRoomById,
  listRooms,
  updateRoom,
} from "../controllers/rooms.controllers";
import {
  roomCreationMiddleware,
  roomModificationMiddleware,
  validateJwt,
  validRoomMiddleware,
} from "../middlewares";

const router = Router();

router.use(validateJwt(["USER_ADMIN_ROLE"]));

router.get("/", listRooms);

router.get("/:id", validRoomMiddleware, getRoomById);

router.post("/", roomCreationMiddleware, createRoom);

router.put("/:id", roomModificationMiddleware, updateRoom);

export default router;
