const todoModel = require('../models/todos')

module.exports.getAll = (req, res, next) => {
  todoModel.getAll()
  .then(({rows}) => {
    res.send({ todos: rows })
  })
  .catch(next)
}

module.exports.create = (req, res, next) => {
  const newTodoValue = req.body.value

  if(!newTodoValue){
    return next({status: 400, message: 'Bad Request'})
  }

  todoModel.create(newTodoValue)
  .then((result) => {
    res.sendStatus(201)
  })
  .catch(next)
}