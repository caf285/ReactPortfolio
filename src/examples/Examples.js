import Todo from './testing/Todo.js';

function Examples() {
  const todos = [
    { id: 1, title: "wash dishes", completed: false, },
    { id: 2, title: "make dinner", completed: true, },
  ]

  return (
    <div>
      {
        todos.map((todo) => {
          return (<Todo todo={todo} />)
        })
      }
    </div>
  );
}

export default Examples;
