const express = require('express');
const router = express.Router();

const Task = require('../models/task')

router.get('/', async (req,res) => {
    const tasks = await Task.find();
    res.json(tasks)
})

router.get('/:id', async (req,res) => {
    const task = await Task.findById(req.params.id);
    res.json(task)
})

router.post('/', async (req,res)=>{
   // console.log(req.body); //req.body por tener app.use(express.json())


    const {
        title,description
    } = req.body;

    const tasks = new Task({
        title,
        description
    })
    console.log(tasks)
    //const tasks = await Task.find();
    await tasks.save();
    res.json({
        status:'Task Saved'
    })
})


router.put('/:id',async (req,res) => {
    const {title, description} = req.body;
    const newTask = {title,description};
    await Task.findByIdAndUpdate(req.params.id,newTask);
    console.log(req.params.id);
    res.json({
        status:'Tarea actualizada'
    });

})


router.delete('/:id',async (req,res) => {
   
    await Task.findByIdAndRemove(req.params.id);
    
    res.json({
        status:'Tarea eliminada'
    });

})
module.exports = router;