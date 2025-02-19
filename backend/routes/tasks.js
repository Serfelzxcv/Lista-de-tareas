const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// Obtener todas las tareas
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Crear una nueva tarea
router.post('/', async (req, res) => {
  const newTask = new Task(req.body);
  const savedTask = await newTask.save();
  res.json(savedTask);
});

// Marcar tarea como completada
router.patch('/:id', async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTask);
});

// Eliminar tarea
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
