<template>
  <div>
    <label v-for="option in options" v-bind:key="option.id">
      <input type="radio"
        v-model="current"
        v-bind:value="option.value" />{{ option.label }}
    </label>

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
        <tr v-for="todo in computedTodos" v-bind:key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.comment }}</td>
          <td class="state">
            <button @click="doChangeState(todo)">
              {{ computedOptions[todo.state] }}
            </button>
          </td>
          <td class="button">
            <button @click.shift="doRemove(todo)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["todos"],
  name: 'TodoList',
  data() {
    return {
      options: [
        { id: 1, value: -1, label: 'すべて' },
        { id: 2, value: 0,  label: '作業中' },
        { id: 3, value: 1,  label: '完了' }
      ],

      current: -1 // -1の場合は全てを表示
    }
  },
  methods: {
    doChangeState: function(item) { // state変更
      item.state = item.state ? 0 : 1;
    },
    doRemove: function(item) {
      const index = this.todos.indexOf(item);
      this.todos.splice(index);
    }
  },
  computed: { // dataから別の新しいデータを作成する関数型data キャッシュ機能により１回のみ
    computedTodos() {
      return this.todos.filter(todo => this.current < 0 ? true : this.current === todo.state, this) // callback内でthisとして使用できる値を指定
    },
    computedOptions() {
      return this.options.reduce(function(a, b) {
        return Object.assign(a, { [b.value]: b.label })
      }, {}); // {}は初期値
    }
  }
}
</script>

<style>
  table {
    margin: 30px auto 0;
  }
</style>
