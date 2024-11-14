const todoList = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Get milk, eggs, bread, and fruits",
    completed: false,
    dueDate: "2024-08-10",
    priority: "High"
  },
  {
    id: 2,
    title: "Workout",
    description: "30-minute morning workout session",
    completed: true,
    dueDate: "2024-08-05",
    priority: "Medium"
  },
  {
    id: 3,
    title: "Read a book",
    description: "Finish reading 'Atomic Habits'",
    completed: false,
    dueDate: "2024-08-15",
    priority: "Low"
  },
  {
    id: 4,
    title: "Finish project",
    description: "Complete the project proposal for client",
    completed: false,
    dueDate: "2024-08-08",
    priority: "High"
  },
  {
    id: 5,
    title: "Clean the house",
    description: "Vacuum and mop the floors",
    completed: false,
    dueDate: "2024-08-07",
    priority: "Medium"
  }
];

/*
  Quiz 1: Find all tasks that is not completed yet. Return the array of titles.
*/

// Ver 1

const findUncompletedTasks = () => {
  const result = [];

  for (const todo of todoList) {
    if (!todo.completed) {
      result.push(todo.title);
    }
  }

  return result;
}


const uncompletedTasks = findUncompletedTasks();
console.log(uncompletedTasks);

// Ver 2 (Filter & Map)

const findUnfinishedTasks = () => {
  const unfinishedTasks = todoList.filter((todo) => {
    return todo.completed === false;
  })

  const unfinishedTaskNames = unfinishedTasks.map((todo) => {
    return todo.title
  })

  return unfinishedTaskNames;
}

const unfinishedTasks = findUnfinishedTasks();
console.log(unfinishedTasks);

// Ver 3 (Filter & Map Advanced)

const advancedFindUncompletedTasks = () => {
  return todoList.filter((todo) => todo.completed === false).map((todo) => todo.title);
}

const tasks = advancedFindUncompletedTasks();
console.log(tasks);

/*
  Quiz 2: Find Task by ID
*/

function findTaskById(id) {
  let result;

  for (const todo of todoList) {
    if (todo.id === id) {
      result = todo;
    }
  }

  return result;
}

console.log(findTaskById(5));

/*
  Quiz 3: Find By Params
*/
console.log('_____________');

function findTaskByParams(id, title, description) {
  let result;

  for (const todo of todoList) {
    if (description) {
      if (todo.description === description) {
        result = todo;
      }
    } else if (title) {
      if (todo.title === title) {
        result = todo;
      }
    } else {
      if (todo.id === id) {
        result = todo;
      }
    }
  }

  return result;
}

const taskFound = findTaskByParams(1, "Workout", "Complete the project proposal for client");
console.log(taskFound);