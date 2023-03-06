
import Task from "../models/Task";

//cargar pagina principal 
export const renderTask = async (req, res) => {
    const tasks = await Task.find().lean()
    res.render("index", { tasks: tasks })
};

  // añadir tareas a la lista 
export const createTask = async (req, res) => {
    try {
        const task = Task(req.body);
        await task.save();
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

// muestra una tarea y reenderiza la tarea

export const renderTaskEdit = async(req, res) => {
    try{
    const task = await Task.findById(req.params.id).lean()
    res.render('edit',{task:task});}
    catch (error){
      console.log(error.message);
    }
  };

// ACTUALIZA TAREA
 export const updateTask= async(req, res) => {
    /* console.log(req.body);*/
    const {id} = req.params
     await Task.findByIdAndUpdate(id, req.body )
    res.redirect("/");
   }

// ELIMITA TAREA

export const taskDelete = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
  };

  //VALIDAR SI LA TAREA ESTA REALIZADA O NO!!
  
  export const taskDone =async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    //console.log(task)
   // res.send("toggle");
   res.redirect("/")
  }