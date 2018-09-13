const cassandra = require('cassandra-driver')

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'todos' });

module.exports.getAll = () => 
  client.execute('SELECT * FROM todo_list', [], { prepare: true })

module.exports.create = newTodoValue => {

  const query = 'INSERT INTO todo_list (value, datetime) VALUES (?, ?)'; 
  const params = [ newTodoValue, new Date()];

  return client.execute(query, params, { prepare: true })
}
