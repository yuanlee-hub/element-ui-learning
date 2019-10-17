<template>
    <div aria="Test">
      <button @click="add">Add</button>
      <hr>
      {{ list }}
    </div>
</template>

<script>
export default {
  name: 'Cl' + 'Test',
  props: {
    list: null
  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    add () {
      this._list = [Math.random()] // 界面不会更新
      console.log('list:', this._list)
    }
  },
  created () {
    this._list = this.list
  }
}
</script>
