<template>
<div id="app">
  <img src="./assets/logo.png">
  <Form :todos="todos" />
  <TodoList :todos="todos" />
</div>
</template>

<script>
import TodoList from './components/TodoList'
import Form from './components/Form'

import todoStorage from './lib/localStrageApi'


export default {
  name: 'App',
  components: {
    Form,
    TodoList,
  },
  data() {
    return {
      todos: [
        // {
        //   id: 1,
        //   comment: '1コメ！',
        //   state: '未完了'
        // }
      ]
    }
  },
  watch: {
    todos: {
      handler: function (changedTodos) {
        todoStorage.save(changedTodos)
      },
      deep: true
    }
  },
  created() {
    this.todos = todoStorage.fetch()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
