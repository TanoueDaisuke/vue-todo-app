<template>
<table>
  <thead>
    <tr>
      <th class="id">ID</th>
      <th class="comment">コメント</th>
      <th class="state">状態</th>
      <th class="button">-</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="todo in todo" v-bind:key="todo.id">
      <td>{{ todo.id }}</td>
      <td>{{ todo.comment }}</td>
      <td class="state">
        <button>{{ todo.state }}</button>
      </td>
      <td class="button">
        <button>削除</button>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      todos: []
    }
  }
}
</script>

<style>

</style>
