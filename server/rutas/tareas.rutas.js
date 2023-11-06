import { Router } from "express";
import {
  getTarea,
  getTareas,
  crearTarea,
  borrarTarea,
  editarTarea,
} from "../controladores/tareas.controladores.js";

const router = Router();

router.get("/tarea", getTareas);

router.get("/tarea/:id", getTarea);

router.post("/tarea", crearTarea);

router.put("/tarea/:id", editarTarea);

router.delete("/tarea/:id", borrarTarea);

export default router;
