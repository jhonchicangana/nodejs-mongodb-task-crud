import { Router } from "express";
import Task from "../models/Task";
//import {renderTask, updateTask} from "../controllers/task.controller";
import {renderTask, createTask, renderTaskEdit,updateTask, taskDelete, taskDone} from "../controllers/task.controller";
const router = Router();

// Direcionar a la pagina principal
router.get("/", renderTask); 

//añadir tareas a la lista
router.post('/tasks/add', createTask);//añadir tareas a la lista


// se podria borrar
/*router.get("/about", (req, res) => {
    res.render('about');
  });*/

  router.get("/task/:id/update", renderTaskEdit );

// actualiza tareas
  router.post("/task/:id/update", updateTask);

// BORRAR TAREAS 
  router.get("/task/:id/delete", taskDelete);

// MARCAR COMO REALIZADAS LAS TAREAS

  router.get("/task/:id/toggleDone", taskDone);

  export default router;