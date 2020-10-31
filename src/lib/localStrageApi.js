// https://jp.vuejs.org/v2/examples/todomvc.html
var STORAGE_KEY = 'vue-todo-app'
var todoStorage = {
  fetch: function() {
    var todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function(todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length + 1 // デフォでは0になっているので
    return todos
  },

  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

export default todoStorage;
