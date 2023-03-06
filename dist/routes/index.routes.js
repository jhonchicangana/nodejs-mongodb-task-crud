"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _Task = _interopRequireDefault(require("../models/Task"));
var _task = require("../controllers/task.controller");
//import {renderTask, updateTask} from "../controllers/task.controller";

var router = (0, _express.Router)();

// Direcionar a la pagina principal
router.get("/", _task.renderTask);

//añadir tareas a la lista
router.post('/tasks/add', _task.createTask); //añadir tareas a la lista

// se podria borrar
/*router.get("/about", (req, res) => {
    res.render('about');
  });*/

router.get("/task/:id/update", _task.renderTaskEdit);

// actualiza tareas
router.post("/task/:id/update", _task.updateTask);

// BORRAR TAREAS 
router.get("/task/:id/delete", _task.taskDelete);

// MARCAR COMO REALIZADAS LAS TAREAS

router.get("/task/:id/toggleDone", _task.taskDone);
var _default = router;
exports["default"] = _default;