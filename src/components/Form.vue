<template>
  <div>
    <h2>新しい作業の追加</h2>
    <form class="add-form" v-on:submit.prevent="doAdd">
      <!-- コメント入力フォーム -->
      コメント <input type="text" ref="comment">
      <!-- 追加ボタンのモック -->
      <button type="submit">追加</button>
    </form>
  </div>
</template>

<script>
import todoStorage from '../lib/localStrageApi'

export default {
  props: ['todos'],
  name: 'Form',
  methods: {
    doAdd: function() {
      const inputedComment = this.$refs.comment

      if (inputedComment.value.length === 0) {
        return;
      }
  
      this.todos.push({
        id: todoStorage.uid++,
        comment: inputedComment.value,
        state: 0,
      })

      inputedComment.value = ''
    }
  }
}
</script>

<style>

</style>